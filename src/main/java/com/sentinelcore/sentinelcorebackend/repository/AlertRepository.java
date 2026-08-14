package com.sentinelcore.sentinelcorebackend.repository;

import com.sentinelcore.sentinelcorebackend.entity.Alert;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AlertRepository extends JpaRepository<Alert, Long> {

    List<Alert> findByStatus(String status);
}