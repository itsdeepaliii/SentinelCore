package com.sentinelcore.sentinelcorebackend.controller;

import com.sentinelcore.sentinelcorebackend.dto.AlertDTO;
import com.sentinelcore.sentinelcorebackend.service.AlertService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/alerts")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AlertController {

    private final AlertService alertService;

    @GetMapping
    public ResponseEntity<List<AlertDTO>> getAllAlerts() {

        return ResponseEntity.ok(
                alertService.getAllAlerts()
        );
    }

    @GetMapping("/open")
    public ResponseEntity<List<AlertDTO>> getOpenAlerts() {

        return ResponseEntity.ok(
                alertService.getOpenAlerts()
        );
    }

    @PutMapping("/{id}/resolve")
    public ResponseEntity<AlertDTO> resolveAlert(
            @PathVariable Long id
    ) {

        return ResponseEntity.ok(
                alertService.resolveAlert(id)
        );
    }
}