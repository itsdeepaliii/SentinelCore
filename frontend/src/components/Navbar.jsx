import { AppBar, Toolbar, Typography, Box } from "@mui/material";

function Navbar() {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                backgroundColor: "#151922",
                borderBottom: "1px solid #2a2f3a"
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>

                <Box>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 600 }}
                    >
                        Infrastructure Monitoring
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{ color: "#9ca3af" }}
                    >
                        Real-time system overview
                    </Typography>
                </Box>

                <Typography
                    variant="body2"
                    sx={{ color: "#9ca3af" }}
                >
                    SentinelCore
                </Typography>

            </Toolbar>
        </AppBar>
    );
}

export default Navbar;