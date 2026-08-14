import { useState } from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

import Assets from "./pages/Assets";
import Alerts from "./pages/Alerts";

function App() {

    const [token, setToken] = useState(
        localStorage.getItem("token")
    );

    const handleLogin = (newToken) => {
        setToken(newToken);
    };

    // If the user is not logged in, show Login page
    if (!token) {
        return <Login onLogin={handleLogin} />;
    }

    return (
        <BrowserRouter>

            <Sidebar />

            <Box
                sx={{
                    marginLeft: "240px",
                    minHeight: "100vh"
                }}
            >
                <Navbar />

                <Routes>

                    <Route
                        path="/"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/assets"
                        element={<Assets />}
                    />

                    <Route
                        path="/alerts"
                        element={<Alerts />}
                    />

                </Routes>

            </Box>

        </BrowserRouter>
    );
}

export default App;