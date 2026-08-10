import { useEffect, useState } from "react";
import {
    Box,
    Typography,
    CircularProgress,
    Card,
    CardContent,
    Chip
} from "@mui/material";

import { getAllAssets } from "../api/assetApi";

function Alerts() {

    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllAssets()
            .then((response) => {

                const alertAssets = response.data.filter(
                    (asset) =>
                        asset.status === "WARNING" ||
                        asset.status === "CRITICAL"
                );

                setAlerts(alertAssets);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching alerts:", error);
                setLoading(false);
            });
    }, []);

    return (
        <Box sx={{ padding: 4 }}>

            <Typography
                variant="h4"
                sx={{
                    fontWeight: 700,
                    mb: 1
                }}
            >
                Alerts
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    color: "#9ca3af",
                    mb: 3
                }}
            >
                Monitor assets that require attention.
            </Typography>

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
                <Box
                    sx={{
                        display: "grid",
                        gap: 2
                    }}
                >
                    {alerts.length === 0 ? (
                        <Typography sx={{ color: "#9ca3af" }}>
                            No active alerts.
                        </Typography>
                    ) : (
                        alerts.map((asset) => (
                            <Card
                                key={asset.id}
                                sx={{
                                    borderRadius: 3,
                                    borderLeft: `5px solid ${
                                        asset.status === "CRITICAL"
                                            ? "#d32f2f"
                                            : "#ed6c02"
                                    }`,
                                    boxShadow:
                                        "0 4px 15px rgba(0,0,0,0.08)"
                                }}
                            >
                                <CardContent>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        }}
                                    >
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                sx={{ fontWeight: 600 }}
                                            >
                                                {asset.assetName}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "#9ca3af",
                                                    mt: 0.5
                                                }}
                                            >
                                                {asset.assetType} •{" "}
                                                {asset.ipAddress}
                                            </Typography>
                                        </Box>

                                        <Chip
                                            label={asset.status}
                                            color={
                                                asset.status === "CRITICAL"
                                                    ? "error"
                                                    : "warning"
                                            }
                                        />
                                    </Box>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 4,
                                            mt: 2
                                        }}
                                    >
                                        <Typography variant="body2">
                                            CPU: {asset.cpuUsage}%
                                        </Typography>

                                        <Typography variant="body2">
                                            Memory: {asset.memoryUsage}%
                                        </Typography>

                                        <Typography variant="body2">
                                            Disk: {asset.diskUsage}%
                                        </Typography>

                                        <Typography variant="body2">
                                            Network: {asset.networkUsage}%
                                        </Typography>
                                    </Box>

                                </CardContent>
                            </Card>
                        ))
                    )}
                </Box>
            )}

        </Box>
    );
}

export default Alerts;