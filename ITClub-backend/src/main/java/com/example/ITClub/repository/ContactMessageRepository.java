package com.example.ITClub.repository;

import com.example.ITClub.model.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {
    List<ContactMessage> findByReadOrderBySubmissionDateDesc(boolean read);
}