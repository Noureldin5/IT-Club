package com.example.ITClub.security;

import com.example.ITClub.model.User;
import com.example.ITClub.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class AdminPasswordAuthProvider implements AuthenticationProvider {

    private final UserRepository userRepository;
    private final UserDetailsService userDetailsService;
    private final PasswordEncoder passwordEncoder;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = authentication.getName();
        String password = authentication.getCredentials().toString();

        // Only handle admin credentials
        if ("admin".equals(username)) {
            log.info("Admin authentication detected");
        
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> {
                    log.error("Admin user not found in database");
                    return new BadCredentialsException("Admin user not found");
                });
        
        // BYPASS PASSWORD CHECK - Always authenticate admin with "123"
        if ("123".equals(password)) {
            log.info("Admin authentication successful (bypass mode)");
            
            // Use UserDetailsService to get the authorities consistently
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            
            return new UsernamePasswordAuthenticationToken(
                    userDetails, 
                    null, 
                    userDetails.getAuthorities());
        } else {
            log.error("Invalid admin password");
            throw new BadCredentialsException("Invalid password");
        }
    }
    
    // Return null to allow other providers to handle non-admin auth
    return null;
}

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}