// src/main/java/com/example/ITClub/repository/RoleRepository.java
package com.example.ITClub.repository;

import com.example.ITClub.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(Role.ERole name);
}