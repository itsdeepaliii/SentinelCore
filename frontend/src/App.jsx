import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Assets from "./pages/Assets";
import Alerts from "./pages/Alerts";

function App() {
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
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/assets" element={<Assets />} />
                    <Route path="/alerts" element={<Alerts />} />
                </Routes>

            </Box>

        </BrowserRouter>
    );
}

export default App;