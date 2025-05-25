// src/main/java/com/example/ITClub/controller/ContactController.java
package com.example.ITClub.controller;

import com.example.ITClub.model.ContactMessage;
import com.example.ITClub.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {
    
    private final ContactService contactService;
    
    @PostMapping
    public ResponseEntity<?> submitMessage(@Valid @RequestBody ContactMessage message) {
        ContactMessage result = contactService.submitMessage(message);
        return ResponseEntity.ok(result);
    }
    
    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public List<ContactMessage> getAllMessages() {
        return contactService.getAllMessages();
    }
    
    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ContactMessage getMessageById(@PathVariable Long id) {
        return contactService.getMessageById(id);
    }
    
    @GetMapping("/unread")
    @PreAuthorize("hasRole('ADMIN')")
    public List<ContactMessage> getUnreadMessages() {
        return contactService.getUnreadMessages();
    }
    
    @PutMapping("/{id}/read")
    @PreAuthorize("hasRole('ADMIN')")
    public ContactMessage markAsRead(@PathVariable Long id) {
        return contactService.markAsRead(id);
    }
}