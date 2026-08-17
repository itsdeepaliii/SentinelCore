package com.sentinelcore.sentinelcorebackend.service;

import com.sentinelcore.sentinelcorebackend.dto.AlertDTO;
import com.sentinelcore.sentinelcorebackend.entity.Alert;
import com.sentinelcore.sentinelcorebackend.entity.Asset;
import com.sentinelcore.sentinelcorebackend.repository.AlertRepository;
import com.sentinelcore.sentinelcorebackend.repository.AssetRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AlertService {

    private final AlertRepository alertRepository;
    private final AssetRepository assetRepository;


    // CREATE ALERT
    public AlertDTO createAlert(
            Long assetId,
            String severity,
            String message
    ) {

        Asset asset = assetRepository.findById(assetId)
                .orElseThrow(() ->
                        new RuntimeException("Asset not found")
                );

        Alert alert = Alert.builder()
                .asset(asset)
                .assetName(asset.getAssetName())
                .severity(severity)
                .message(message)
                .status("OPEN")
                .createdAt(LocalDateTime.now())
                .build();

        Alert savedAlert =
                alertRepository.save(alert);

        return convertToDTO(savedAlert);
    }


    // GET ALL ALERTS
    public List<AlertDTO> getAllAlerts() {

        return alertRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .toList();
    }


    // GET OPEN ALERTS
    public List<AlertDTO> getOpenAlerts() {

        return alertRepository.findByStatus("OPEN")
                .stream()
                .map(this::convertToDTO)
                .toList();
    }


    // RESOLVE ALERT
    public AlertDTO resolveAlert(Long id) {

        Alert alert = alertRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Alert not found")
                );

        alert.setStatus("RESOLVED");
        alert.setResolvedAt(LocalDateTime.now());

        Alert resolvedAlert =
                alertRepository.save(alert);

        return convertToDTO(resolvedAlert);
    }


    // CONVERT ENTITY → DTO
    private AlertDTO convertToDTO(Alert alert) {

        return AlertDTO.builder()
                .id(alert.getId())

                .assetId(
                        alert.getAsset().getId()
                )

                .assetName(
                        alert.getAsset().getAssetName()
                )

                .severity(alert.getSeverity())

                .message(alert.getMessage())

                .status(alert.getStatus())

                .createdAt(alert.getCreatedAt())

                .resolvedAt(alert.getResolvedAt())

                .build();
    }
}