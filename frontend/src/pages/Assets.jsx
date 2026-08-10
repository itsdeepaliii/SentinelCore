import { useEffect, useState } from "react";
import {
    Box,
    Typography,
    CircularProgress,
    TextField,
    MenuItem
} from "@mui/material";

import { getAllAssets } from "../api/assetApi";
import AssetTable from "../components/AssetTable";

function Assets() {

    const [assets, setAssets] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("ALL");

    useEffect(() => {
        getAllAssets()
            .then((response) => {
                setAssets(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching assets:", error);
                setLoading(false);
            });
    }, []);

    const filteredAssets = assets.filter((asset) => {

        const matchesSearch =
            asset.assetName
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            asset.assetType
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === "ALL" ||
            asset.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    return (
        <Box sx={{ padding: 4 }}>

            {/* Page Title */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 700,
                    mb: 1
                }}
            >
                Assets
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    color: "#9ca3af",
                    mb: 3
                }}
            >
                Monitor and manage your infrastructure assets.
            </Typography>

            {/* Search and Filter */}
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    mb: 3
                }}
            >

                <TextField
                    label="Search assets"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    size="small"
                    sx={{
                        width: 300,
                        "& .MuiInputLabel-root": {
                            color: "#9ca3af"
                        },
                        "& .MuiInputBase-input": {
                            color: "white"
                        }
                    }}
                />

                <TextField
                    select
                    label="Status"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    size="small"
                    sx={{
                        width: 180,
                        "& .MuiInputLabel-root": {
                            color: "#9ca3af"
                        },
                        "& .MuiInputBase-input": {
                            color: "white"
                        }
                    }}
                >
                    <MenuItem value="ALL">All Status</MenuItem>
                    <MenuItem value="ONLINE">Online</MenuItem>
                    <MenuItem value="WARNING">Warning</MenuItem>
                    <MenuItem value="CRITICAL">Critical</MenuItem>
                    <MenuItem value="Active">Active</MenuItem>
                </TextField>

            </Box>

            {/* Asset Table */}
            {loading ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 5
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <AssetTable assets={filteredAssets} />
            )}

        </Box>
    );
}

export default Assets;