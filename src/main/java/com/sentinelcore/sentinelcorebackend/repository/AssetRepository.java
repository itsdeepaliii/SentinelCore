package com.sentinelcore.sentinelcorebackend.repository;
import java.util.List;
import com.sentinelcore.sentinelcorebackend.entity.Asset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssetRepository extends JpaRepository<Asset, Long> {
    List<Asset> findByStatus(String status);

    List<Asset> findByAssetType(String assetType);

}