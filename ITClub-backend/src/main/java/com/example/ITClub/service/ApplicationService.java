// src/main/java/com/example/ITClub/service/ApplicationService.java
package com.example.ITClub.service;

import com.example.ITClub.exception.ResourceNotFoundException;
import com.example.ITClub.model.Application;
import com.example.ITClub.repository.ApplicationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ApplicationService {
    
    private final ApplicationRepository applicationRepository;
    
    public Application submitApplication(Application application) {
        return applicationRepository.save(application);
    }
    
    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }
    
    public Application getApplicationById(Long id) {
        return applicationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Application not found with id: " + id));
    }
    
    public List<Application> getApplicationsByStatus(Application.ApplicationStatus status) {
        return applicationRepository.findByStatus(status);
    }
    
    @Transactional
    public Application updateApplicationStatus(Long id, Application.ApplicationStatus status) {
        Application application = getApplicationById(id);
        application.setStatus(status);
        return applicationRepository.save(application);
    }
    
    public boolean existsByEmail(String email) {
        return applicationRepository.existsByEmail(email);
    }
    
    public boolean existsByStudentId(String studentId) {
        return applicationRepository.existsByStudentId(studentId);
    }
}