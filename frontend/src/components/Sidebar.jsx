import {
    Box,
    Typography,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";

import {
    Dashboard,
    Computer,
    Notifications,
    Settings
} from "@mui/icons-material";

import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <Box
            sx={{
                width: 240,
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0,
                backgroundColor: "#111827",
                color: "white",
                paddingTop: 3
            }}
        >
            {/* Logo */}
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 700,
                    padding: "0 24px",
                    marginBottom: 4
                }}
            >
                🛡 SentinelCore
            </Typography>

            {/* Navigation */}
            <List>

                {/* Dashboard */}
                <ListItemButton
                    component={Link}
                    to="/"
                    selected
                    sx={{
                        mx: 1,
                        borderRadius: 2,
                        mb: 1,

                        "&.Mui-selected": {
                            backgroundColor: "#26344d"
                        },

                        "&.Mui-selected:hover": {
                            backgroundColor: "#30415f"
                        },

                        "&:hover": {
                            backgroundColor: "#1f2937"
                        }
                    }}
                >
                    <ListItemIcon sx={{ color: "#60a5fa" }}>
                        <Dashboard />
                    </ListItemIcon>

                    <ListItemText primary="Dashboard" />
                </ListItemButton>

                {/* Assets */}
                <ListItemButton
                    component={Link}
                    to="/assets"
                    sx={{
                        mx: 1,
                        borderRadius: 2,
                        mb: 1,

                        "&:hover": {
                            backgroundColor: "#1f2937"
                        }
                    }}
                >
                    <ListItemIcon sx={{ color: "#9ca3af" }}>
                        <Computer />
                    </ListItemIcon>

                    <ListItemText primary="Assets" />
                </ListItemButton>

                {/* Alerts */}
                <ListItemButton
                    component={Link}
                    to="/alerts"
                    sx={{
                        mx: 1,
                        borderRadius: 2,
                        mb: 1,

                        "&:hover": {
                            backgroundColor: "#1f2937"
                        }
                    }}
                >
                    <ListItemIcon sx={{ color: "#9ca3af" }}>
                        <Notifications />
                    </ListItemIcon>

                    <ListItemText primary="Alerts" />
                </ListItemButton>

                {/* Settings */}
                <ListItemButton
                    sx={{
                        mx: 1,
                        borderRadius: 2,
                        mb: 1,

                        "&:hover": {
                            backgroundColor: "#1f2937"
                        }
                    }}
                >
                    <ListItemIcon sx={{ color: "#9ca3af" }}>
                        <Settings />
                    </ListItemIcon>

                    <ListItemText primary="Settings" />
                </ListItemButton>

            </List>

            {/* System Status */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    right: 20,
                    padding: 2,
                    borderRadius: 2,
                    backgroundColor: "#1f2937"
                }}
            >
                <Typography
                    variant="body2"
                    sx={{ color: "#9ca3af" }}
                >
                    System Status
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: "#4ade80",
                        fontWeight: 600,
                        mt: 0.5
                    }}
                >
                    ● All Systems Operational
                </Typography>
            </Box>

        </Box>
    );
}

export default Sidebar;