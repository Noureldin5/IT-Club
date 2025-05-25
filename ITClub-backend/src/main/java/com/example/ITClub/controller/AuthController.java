package com.example.ITClub.controller;

import com.example.ITClub.model.User;
import com.example.ITClub.payload.request.LoginRequest;
import com.example.ITClub.payload.request.RegisterRequest;
import com.example.ITClub.payload.response.JwtResponse;
import com.example.ITClub.payload.response.MessageResponse;
import com.example.ITClub.security.JwtTokenProvider;
import com.example.ITClub.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        // Authenticate the user
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                loginRequest.getUsername(),
                loginRequest.getPassword()
            )
        );

        // Set authentication in context
        SecurityContextHolder.getContext().setAuthentication(authentication);
        
        // Generate JWT token
        String jwt = jwtTokenProvider.generateToken(authentication);
        
        // Get user details
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        
        // Check if user is admin
        boolean isAdmin = userService.isUserAdmin(userDetails.getUsername());
        
        // Get user's full name
        Optional<User> userOpt = userService.getUserByUsername(userDetails.getUsername());
        String fullName = userOpt.map(User::getFullName).orElse("");
        
        // Return response with token and user info
        return ResponseEntity.ok(new JwtResponse(
            jwt, 
            userDetails.getUsername(),
            fullName,
            isAdmin
        ));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest registerRequest) {
        // Check if username already exists
        if (userService.existsByUsername(registerRequest.getUsername())) {
            return ResponseEntity
                .badRequest()
                .body(new MessageResponse("Error: Username is already taken!"));
        }
        
        // Create new user
        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setPassword(registerRequest.getPassword());
        user.setFullName(registerRequest.getFullName());
        
        // Save user with appropriate role
        User savedUser;
        if (registerRequest.isAdmin()) {
            savedUser = userService.createAdminUser(user);
        } else {
            savedUser = userService.createRegularUser(user);
        }
        
        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
}