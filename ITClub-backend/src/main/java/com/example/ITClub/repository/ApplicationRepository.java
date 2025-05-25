// src/main/java/com/example/ITClub/repository/ApplicationRepository.java
package com.example.ITClub.repository;

import com.example.ITClub.model.Application;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
    List<Application> findByStatus(Application.ApplicationStatus status);
    Boolean existsByEmail(String email);
    Boolean existsByStudentId(String studentId);
}