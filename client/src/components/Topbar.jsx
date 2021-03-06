import React from "react";
import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

export default function Topbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#1f1f1f" }} >
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                        <PersonIcon />
                    </Link>
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Student Management
                </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}