import React from "react";
import { Container, Grid, Card, CardContent, CardActions, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import StudentList from "./StudentList";

function ManagementCards() {

    const boxRowStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    };

    return (
        <Grid mt={2} container spacing={2}>
            <Grid item xs={12}>
                <Card raised={true} sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Box sx={boxRowStyle}>
                            <PersonIcon />
                            <Typography sx={{ marginTop: "5px", fontSize: 18, fontWeight: "bold" }} gutterBottom>
                            Students
                            </Typography>
                        </Box>
                        <Typography sx={{ mb: 1 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" fullWidth>
                            <Link to="/students/add" style={{ textDecoration: "none", color: "inherit" }}>
                                Add Student
                            </Link>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}

export default function ManagementContainer() {
    return (
        <>
            <Container maxWidth={"xs"}>
                <ManagementCards />
            </Container>
            <StudentList />
        </>
        
    );
}