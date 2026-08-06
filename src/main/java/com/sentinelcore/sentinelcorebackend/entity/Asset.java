package com.sentinelcore.sentinelcorebackend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "assets")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Asset {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "asset_name", nullable = false)
    private String assetName;

    @Column(name = "asset_type", nullable = false)
    private String assetType;

    @Column(name = "ip_address", nullable = false, unique = true)
    private String ipAddress;

    private String status;

    @Column(name = "cpu_usage")
    private Double cpuUsage;

    @Column(name = "memory_usage")
    private Double memoryUsage;

    @Column(name = "disk_usage")
    private Double diskUsage;

    @Column(name = "network_usage")
    private Double networkUsage;

    private String location;

    @Column(name = "created_date")
    private LocalDateTime createdDate;

    @PrePersist
    public void onCreate() {
        this.createdDate = LocalDateTime.now();
    }
}