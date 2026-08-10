import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

import { Box, Typography, Paper } from "@mui/material";

function UsageCharts({ assets }) {

    const data = assets.map((asset) => ({
        name: asset.assetName,
        CPU: asset.cpuUsage,
        Memory: asset.memoryUsage,
        Disk: asset.diskUsage
    }));

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    md: "repeat(3, 1fr)"
                },
                gap: 3,
                mt: 4
            }}
        >

            {/* CPU */}
            <Paper
                sx={{
                    p: 3,
                    borderRadius: 3
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        mb: 2,
                        textAlign: "center"
                    }}
                >
                    CPU Usage
                </Typography>

                <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                        data={data}
                        margin={{
                            bottom: 20,
                            left: 5,
                            right: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            dataKey="name"
                            angle={-30}
                            textAnchor="end"
                            height={45}
                            tick={{ fontSize: 12 }}
                        />

                        <YAxis domain={[0, 100]} />

                        <Tooltip />

                        <Bar dataKey="CPU" />
                    </BarChart>
                </ResponsiveContainer>
            </Paper>

            {/* Memory */}
            <Paper
                sx={{
                    p: 3,
                    borderRadius: 3
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        mb: 2,
                        textAlign: "center"
                    }}
                >
                    Memory Usage
                </Typography>

                <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                        data={data}
                        margin={{
                            bottom: 20,
                            left: 5,
                            right: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            dataKey="name"
                            angle={-30}
                            textAnchor="end"
                            height={45}
                            tick={{ fontSize: 12 }}
                        />

                        <YAxis domain={[0, 100]} />

                        <Tooltip />

                        <Bar dataKey="Memory" />
                    </BarChart>
                </ResponsiveContainer>
            </Paper>

            {/* Disk */}
            <Paper
                sx={{
                    p: 3,
                    borderRadius: 3
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        mb: 2,
                        textAlign: "center"
                    }}
                >
                    Disk Usage
                </Typography>

                <ResponsiveContainer width="100%" height={220}>
                    <BarChart
                        data={data}
                        margin={{
                            bottom: 20,
                            left: 5,
                            right: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            dataKey="name"
                            angle={-30}
                            textAnchor="end"
                            height={30}
                            tick={{ fontSize: 12 }}
                        />

                        <YAxis domain={[0, 100]} />

                        <Tooltip />

                        <Bar dataKey="Disk" />
                    </BarChart>
                </ResponsiveContainer>
            </Paper>

        </Box>
    );
}

export default UsageCharts;