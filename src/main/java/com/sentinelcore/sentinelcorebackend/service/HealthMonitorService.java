package com.sentinelcore.sentinelcorebackend.service;

import com.sentinelcore.sentinelcorebackend.entity.Asset;
import com.sentinelcore.sentinelcorebackend.repository.AssetRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HealthMonitorService {

    private final AssetRepository assetRepository;
    private final AlertService alertService;

    private static final double CPU_CRITICAL_THRESHOLD = 90.0;
    private static final double MEMORY_WARNING_THRESHOLD = 80.0;

    @Scheduled(fixedRate = 60000)
    public void checkAssetHealth() {

        List<Asset> assets = assetRepository.findAll();

        for (Asset asset : assets) {

            // CPU critical
            if (asset.getCpuUsage() != null &&
                    asset.getCpuUsage() >= CPU_CRITICAL_THRESHOLD) {

                asset.setStatus("CRITICAL");

                createAlertIfNeeded(
                        asset,
                        "CRITICAL",
                        "CPU usage critical: "
                                + asset.getCpuUsage() + "%"
                );

            }

            // Memory warning
            else if (asset.getMemoryUsage() != null &&
                    asset.getMemoryUsage() >= MEMORY_WARNING_THRESHOLD) {

                asset.setStatus("WARNING");

                createAlertIfNeeded(
                        asset,
                        "MEDIUM",
                        "Memory usage high: "
                                + asset.getMemoryUsage() + "%"
                );

            }

            // Healthy
            else {
                asset.setStatus("ONLINE");
            }

            assetRepository.save(asset);
        }
    }

    private void createAlertIfNeeded(
            Asset asset,
            String severity,
            String message
    ) {

        boolean alreadyOpen = alertService
                .getOpenAlerts()
                .stream()
                .anyMatch(alert ->
                        alert.getAssetId().equals(asset.getId())
                                && alert.getSeverity().equals(severity)
                );

        if (!alreadyOpen) {
            alertService.createAlert(
                    asset.getId(),
                    severity,
                    message
            );
        }
    }
}