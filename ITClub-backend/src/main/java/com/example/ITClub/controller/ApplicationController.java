// src/main/java/com/example/ITClub/controller/ApplicationController.java
package com.example.ITClub.controller;

import com.example.ITClub.model.Application;
import com.example.ITClub.service.ApplicationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
@RequiredArgsConstructor
public class ApplicationController {
    
    private final ApplicationService applicationService;
    
    @PostMapping("/submit")
    public ResponseEntity<?> submitApplication(@Valid @RequestBody Application application) {
        if (applicationService.existsByEmail(application.getEmail())) {
            return ResponseEntity.badRequest().body("An application with this email already exists!");
        }
        
        if (applicationService.existsByStudentId(application.getStudentId())) {
            return ResponseEntity.badRequest().body("An application with this student ID already exists!");
        }
        
        Application result = applicationService.submitApplication(application);
        return ResponseEntity.ok(result);
    }
    
    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public List<Application> getAllApplications() {
        return applicationService.getAllApplications();
    }
    
    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public Application getApplicationById(@PathVariable Long id) {
        return applicationService.getApplicationById(id);
    }
    
    @GetMapping("/status/{status}")
    @PreAuthorize("hasRole('ADMIN')")
    public List<Application> getApplicationsByStatus(@PathVariable String status) {
        return applicationService.getApplicationsByStatus(Application.ApplicationStatus.valueOf(status.toUpperCase()));
    }
    
    @PutMapping("/{id}/status")
    @PreAuthorize("hasRole('ADMIN')")
    public Application updateApplicationStatus(
            @PathVariable Long id,
            @RequestParam Application.ApplicationStatus status) {
        return applicationService.updateApplicationStatus(id, status);
    }
}