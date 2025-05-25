// src/main/java/com/example/ITClub/service/UserService.java
package com.example.ITClub.service;

import com.example.ITClub.exception.ResourceNotFoundException;
import com.example.ITClub.model.Role;
import com.example.ITClub.model.User;
import com.example.ITClub.repository.RoleRepository;
import com.example.ITClub.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    
    @Transactional
    public User createAdminUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        
        Role adminRole = roleRepository.findByName(Role.ERole.ROLE_ADMIN)
                .orElseThrow(() -> new ResourceNotFoundException("Admin role not found"));
        
        user.setRoles(Collections.singleton(adminRole));
        
        return userRepository.save(user);
    }
    
    @Transactional
    public User createRegularUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        
        Role userRole = roleRepository.findByName(Role.ERole.ROLE_USER)
                .orElseThrow(() -> new ResourceNotFoundException("User role not found"));
        
        user.setRoles(Collections.singleton(userRole));
        
        return userRepository.save(user);
    }
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
    }
    
    public Optional<User> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
    
    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }
    
    public boolean isUserAdmin(String username) {
        return userRepository.findByUsername(username)
                .map(user -> user.getRoles().stream()
                        .anyMatch(role -> role.getName() == Role.ERole.ROLE_ADMIN))
                .orElse(false);
    }
}