import { useState } from "react";
import axios from "axios";
import {
    Box,
    Paper,
    TextField,
    Button,
    Typography,
    Alert
} from "@mui/material";

function Login({ onLogin }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post(
                "http://localhost:8080/api/auth/login",
                {
                    username,
                    password
                }
            );

            const token = response.data.token;

            localStorage.setItem("token", token);

            onLogin(token);

        } catch (error) {
            console.error(error);
            setError("Invalid username or password.");
        }
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#111827"
            }}
        >
            <Paper
                elevation={8}
                sx={{
                    width: 400,
                    padding: 5,
                    borderRadius: 4
                }}
            >

                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        textAlign: "center",
                        mb: 1
                    }}
                >
                    🛡 SentinelCore
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        textAlign: "center",
                        color: "text.secondary",
                        mb: 4
                    }}
                >
                    Infrastructure Monitoring
                </Typography>

                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}

                <Box
                    component="form"
                    onSubmit={handleLogin}
                >

                    <TextField
                        fullWidth
                        label="Username"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                        margin="normal"
                    />

                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        margin="normal"
                    />

                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                            mt: 3,
                            py: 1.5,
                            borderRadius: 2,
                            fontWeight: 600
                        }}
                    >
                        Login
                    </Button>

                </Box>

            </Paper>
        </Box>
    );
}

export default Login;