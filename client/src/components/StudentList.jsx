import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Box, Typography, Grid, Card, CardContent, CardActions, Button } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";

export default function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        retrieveStudents();
    }, []);

    const retrieveStudents = async () => {
        try {
            const data = await axios.get("http://localhost:8080/api/students");
            setStudents(data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleStudentDelete = async (id) => {
        try{
            await axios.delete(`http://localhost:8080/api/students/${id}`);
        } catch (e) {
            console.error(e);
        }
        retrieveStudents();
    }

    const boxColumnStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const boxRowStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    };

    return (
        <Container sx={{ marginBottom: 5}}>
            <Box mt={4} sx={boxColumnStyle}>
                <Box sx={boxRowStyle}>
                    <Typography variant={"h4"}>
                        Students
                    </Typography>
                </Box>
            </Box>
            <Grid mt={2} container spacing={2}>
            { students.length === 0 && (
                <div></div>
            )}
            { students.length > 0 && (
                students.map(student =>
                <Grid key={student.id} item xs={12}>
                    <Card raised={true}>
                        <CardContent>
                            <Box sx={boxRowStyle}>
                                <PersonIcon />
                                <Typography sx={{ marginTop: "5px", fontSize: 18 }} gutterBottom>
                                {student.firstName} {student.lastName}
                                </Typography>
                            </Box>
                            <Grid mt={2} container spacing={0} >
                                <Grid item xs={12}>
                                    <Box sx={boxColumnStyle}>
                                        <Box sx={boxRowStyle}>
                                            <Typography sx={{ fontSize: 16, fontWeight: "bold" }} gutterBottom>
                                            Email:&nbsp;
                                            </Typography>
                                            <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            {student.email}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={boxColumnStyle}>
                                        <Box sx={boxRowStyle}>
                                            <Typography sx={{ fontSize: 16, fontWeight: "bold" }} gutterBottom>
                                            Gender:&nbsp;
                                            </Typography>
                                            <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            {student.gender}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={boxColumnStyle}>
                                        <Box sx={boxRowStyle}>
                                            <Typography sx={{ fontSize: 16, fontWeight: "bold" }} gutterBottom>
                                            Address:&nbsp;
                                            </Typography>
                                            <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            {student.address}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={boxColumnStyle}>
                                        <Box sx={boxRowStyle}>
                                            <Typography sx={{ fontSize: 16, fontWeight: "bold" }} gutterBottom>
                                            State:&nbsp;
                                            </Typography>
                                            <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            {student.state}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={boxColumnStyle}>
                                        <Box sx={boxRowStyle}>
                                            <Typography sx={{ fontSize: 16, fontWeight: "bold" }} gutterBottom>
                                            Country:&nbsp;
                                            </Typography>
                                            <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            {student.country}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={boxColumnStyle}>
                                        <Box sx={boxRowStyle}>
                                            <Typography sx={{ fontSize: 16, fontWeight: "bold" }} gutterBottom>
                                            Zip Code:&nbsp;
                                            </Typography>
                                            <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            {Number(student.zipCode)}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={boxColumnStyle}>
                                        <Box sx={boxRowStyle}>
                                            <Typography sx={{ fontSize: 16, fontWeight: "bold" }} gutterBottom>
                                            Class Standing:&nbsp;
                                            </Typography>
                                            <Typography sx={{ fontSize: 16 }} gutterBottom>
                                            {student.classStanding}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Button size="small" fullWidth>
                                <Link to={`/students/edit/${student.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                    Edit Student
                                </Link>
                            </Button>
                            <Button size="small" fullWidth onClick={() => handleStudentDelete(student.id)} color="error">Delete Student</Button>     
                        </CardActions>
                    </Card>
                </Grid>
                )
            )}
            </Grid>
        </Container>
    );
}