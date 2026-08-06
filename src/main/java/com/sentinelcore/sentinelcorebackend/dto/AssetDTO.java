package com.sentinelcore.sentinelcorebackend.dto;

import lombok.Data;

@Data
public class AssetDTO {

    private Long id;
    private String assetName;
    private String assetType;
    private String ipAddress;
    private String status;
    private Double cpuUsage;
    private Double memoryUsage;
    private Double diskUsage;
    private Double networkUsage;
    private String location;

}