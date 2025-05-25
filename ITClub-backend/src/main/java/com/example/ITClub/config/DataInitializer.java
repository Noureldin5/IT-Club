package com.example.ITClub.config;

import com.example.ITClub.model.Role;
import com.example.ITClub.model.User;
import com.example.ITClub.repository.RoleRepository;
import com.example.ITClub.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataInitializer implements CommandLineRunner {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void run(String... args) {
        // Create roles if they don't exist
        createRoleIfNotExists(Role.ERole.ROLE_USER);
        createRoleIfNotExists(Role.ERole.ROLE_ADMIN);
        
        // Only create admin user if it doesn't exist
        if (!userRepository.existsByUsername("admin")) {
            createAdminUser();
        } else {
            log.info("Admin user already exists, skipping creation");
        }
    }

    private void createRoleIfNotExists(Role.ERole roleName) {
        if (roleRepository.findByName(roleName).isEmpty()) {
            Role role = new Role();
            role.setName(roleName);
            roleRepository.save(role);
            log.info("Created role: {}", roleName);
        }
    }

    private void createAdminUser() {
        // Get admin role
        Role adminRole = roleRepository.findByName(Role.ERole.ROLE_ADMIN)
                .orElseThrow(() -> new RuntimeException("Admin role not found"));
        
        // Create a mutable set with the admin role
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        
        // Create new admin user
        User admin = new User();
        admin.setUsername("admin");
        admin.setFullName("Administrator");
        String encodedPassword = passwordEncoder.encode("admin123");
        admin.setPassword(encodedPassword);
        admin.setRoles(adminRoles);
        userRepository.save(admin);
        log.info("Created admin user with BCrypt password");
    }
}