// src/main/java/com/example/ITClub/service/ContactService.java
package com.example.ITClub.service;

import com.example.ITClub.exception.ResourceNotFoundException;
import com.example.ITClub.model.ContactMessage;
import com.example.ITClub.repository.ContactMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactService {
    
    private final ContactMessageRepository contactMessageRepository;
    
    public ContactMessage submitMessage(ContactMessage message) {
        return contactMessageRepository.save(message);
    }
    
    public List<ContactMessage> getAllMessages() {
        return contactMessageRepository.findAll();
    }
    
    public ContactMessage getMessageById(Long id) {
        return contactMessageRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Message not found with id: " + id));
    }
    
    public List<ContactMessage> getUnreadMessages() {
        return contactMessageRepository.findByReadOrderBySubmissionDateDesc(false);
    }
    
    @Transactional
    public ContactMessage markAsRead(Long id) {
        ContactMessage message = getMessageById(id);
        message.setRead(true);
        return contactMessageRepository.save(message);
    }
}