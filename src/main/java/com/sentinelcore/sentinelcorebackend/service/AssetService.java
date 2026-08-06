package com.sentinelcore.sentinelcorebackend.service;

import com.sentinelcore.sentinelcorebackend.dto.AssetDTO;
import com.sentinelcore.sentinelcorebackend.entity.Asset;
import com.sentinelcore.sentinelcorebackend.repository.AssetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AssetService {

    @Autowired
    private AssetRepository assetRepository;

    public List<AssetDTO> getAllAssets() {
        return assetRepository.findAll()
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public AssetDTO getAssetById(Long id) {
        Asset asset = assetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Asset not found"));

        return toDTO(asset);
    }

    // Create new asset
    public AssetDTO createAsset(AssetDTO dto) {

        Asset asset = Asset.builder()
                .assetName(dto.getAssetName())
                .assetType(dto.getAssetType())
                .ipAddress(dto.getIpAddress())
                .status(dto.getStatus())
                .cpuUsage(dto.getCpuUsage())
                .memoryUsage(dto.getMemoryUsage())
                .diskUsage(dto.getDiskUsage())
                .networkUsage(dto.getNetworkUsage())
                .location(dto.getLocation())
                .build();

        Asset savedAsset = assetRepository.save(asset);

        return toDTO(savedAsset);
    }

    private AssetDTO toDTO(Asset asset) {

        AssetDTO dto = new AssetDTO();

        dto.setId(asset.getId());
        dto.setAssetName(asset.getAssetName());
        dto.setAssetType(asset.getAssetType());
        dto.setIpAddress(asset.getIpAddress());
        dto.setStatus(asset.getStatus());
        dto.setCpuUsage(asset.getCpuUsage());
        dto.setMemoryUsage(asset.getMemoryUsage());
        dto.setDiskUsage(asset.getDiskUsage());
        dto.setNetworkUsage(asset.getNetworkUsage());
        dto.setLocation(asset.getLocation());

        return dto;
    }
}