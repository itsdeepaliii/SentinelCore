import { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Paper,
    Chip,
    Button,
    CircularProgress,
    Alert as MuiAlert
} from "@mui/material";

import { getOpenAlerts, resolveAlert } from "../api/alertApi";

function Alerts() {

    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const loadAlerts = async () => {

        try {
            setLoading(true);
            setError("");

            const response = await getOpenAlerts();

            setAlerts(response.data);

        } catch (error) {

            console.error("Failed to load alerts:", error);

            setError("Failed to load alerts.");

        } finally {

            setLoading(false);
        }
    };

    useEffect(() => {
        loadAlerts();
    }, []);

    const handleResolve = async (id) => {

        try {

            await resolveAlert(id);

            // Reload alerts after resolving
            loadAlerts();

        } catch (error) {

            console.error("Failed to resolve alert:", error);

            setError("Failed to resolve alert.");

        }
    };

    const getSeverityColor = (severity) => {

        switch (severity) {

            case "CRITICAL":
                return "error";

            case "MEDIUM":
                return "warning";

            case "LOW":
                return "info";

            default:
                return "default";
        }
    };

    return (
        <Box
            sx={{
                padding: 4
            }}
        >

            <Typography
                variant="h3"
                sx={{
                    fontWeight: 700,
                    mb: 1
                }}
            >
                Alerts
            </Typography>

            <Typography
                variant="h6"
                sx={{
                    color: "text.secondary",
                    mb: 4
                }}
            >
                Monitor and manage infrastructure alerts.
            </Typography>

            {error && (
                <MuiAlert
                    severity="error"
                    sx={{ mb: 3 }}
                >
                    {error}
                </MuiAlert>
            )}

            {loading ? (

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 6
                    }}
                >
                    <CircularProgress />
                </Box>

            ) : alerts.length === 0 ? (

                <Paper
                    sx={{
                        padding: 4,
                        borderRadius: 3,
                        textAlign: "center"
                    }}
                >
                    <Typography
                        variant="h6"
                        color="text.secondary"
                    >
                        No open alerts
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{ mt: 1 }}
                    >
                        All monitored assets are operating normally.
                    </Typography>
                </Paper>

            ) : (

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2
                    }}
                >

                    {alerts.map((alert) => (

                        <Paper
                            key={alert.id}
                            sx={{
                                padding: 3,
                                borderRadius: 3
                            }}
                        >

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    gap: 2
                                }}
                            >

                                <Box>

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600
                                        }}
                                    >
                                        {alert.assetName}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            mt: 1
                                        }}
                                    >
                                        {alert.message}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mt: 1 }}
                                    >
                                        Created:{" "}
                                        {new Date(
                                            alert.createdAt
                                        ).toLocaleString()}
                                    </Typography>

                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2
                                    }}
                                >

                                    <Chip
                                        label={alert.severity}
                                        color={getSeverityColor(
                                            alert.severity
                                        )}
                                    />

                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={() =>
                                            handleResolve(alert.id)
                                        }
                                    >
                                        Resolve
                                    </Button>

                                </Box>

                            </Box>

                        </Paper>

                    ))}

                </Box>

            )}

        </Box>
    );
}

export default Alerts;