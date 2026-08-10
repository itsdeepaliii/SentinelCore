import { useEffect, useState } from "react";
import { getDashboardSummary, getAllAssets } from "../api/assetApi";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import DashboardCard from "./DashboardCard";
import {
    Computer,
    Speed,
    Memory,
    Warning
} from "@mui/icons-material";
import AssetTable from "./AssetTable";
import UsageCharts from "./UsageCharts";
import { Box } from "@mui/material";

function Dashboard() {

    const [summary, setSummary] = useState(null);
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        getDashboardSummary().then(res => setSummary(res.data));
        getAllAssets().then(res => setAssets(res.data));
    }, []);

    if (!summary) {
        return <p>Loading...</p>;
    }

    return (
        <Grid
            container
            spacing={3}
            sx={{
                padding: 4,
            }}
        >

            <Grid size={3}>
                <DashboardCard
                    title="Total Assets"
                    value={summary.totalAssets}
                    icon={<Computer />}
                    color="#1976d2"
                />
            </Grid>

            <Grid size={3}>
                <DashboardCard
                    title="Uptime"
                    value={`${summary.uptimePercentage.toFixed(2)}%`}
                    icon={<Speed />}
                    color="#2e7d32"
                />
            </Grid>

            <Grid size={3}>
                <DashboardCard
                    title="Avg CPU"
                    value={`${summary.avgCpuUsage.toFixed(1)}%`}
                    icon={<Memory />}
                    color="#ed6c02"
                />
            </Grid>

            <Grid size={3}>
                <DashboardCard
                    title="Critical Alerts"
                    value={summary.criticalAlerts}
                    icon={<Warning />}
                    color="#d32f2f"
                />
            </Grid>
            <Box sx={{ px: 4 }}>
                <UsageCharts assets={assets} />

                <div style={{ padding: "0 32px" }}>
                    <AssetTable assets={assets} />
                </div>
            </Box>

        </Grid>

    );
}

export default Dashboard;