
package com.sentinelcore.sentinelcorebackend.controller;

import com.sentinelcore.sentinelcorebackend.dto.AssetDTO;
import com.sentinelcore.sentinelcorebackend.service.AssetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/assets")
public class AssetController {

    @Autowired
    private AssetService assetService;

    // Get all assets
    @GetMapping
    public List<AssetDTO> getAllAssets() {
        return assetService.getAllAssets();
    }

    // Get asset by ID
    @GetMapping("/{id}")
    public AssetDTO getAssetById(@PathVariable Long id) {
        return assetService.getAssetById(id);

}

    @PostMapping
    public AssetDTO createAsset(@RequestBody AssetDTO assetDTO) {
        return assetService.createAsset(assetDTO);
    }
}