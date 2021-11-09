import { Container, ButtonGroup,Button, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ManagementContainer() {
    const [data, setData] = useState([]);
    const [dataValue, setDataValue] = useState("");
    const handleStudentButtonClick = () => {
        setDataValue("student");
        fetchData("http://localhost:8080/api/students")
    };
    const handleTeacherButtonClick = () => {
        setDataValue("teacher");
        fetchData("http://localhost:8080/api/students");
    };
    const handleCourseButtonClick = () => {
        setDataValue("course");
        fetchData("http://localhost:8080/api/students");
    };

    async function fetchData(link) {
        try{
            const result = await axios.get(link);
            setData(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <Container>
            <Box
            mt={4}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
                >
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button sx={{ backgroundColor: "#1f1f1f"}} onClick={handleStudentButtonClick}>Show Students</Button>
                        <Button sx={{ backgroundColor: "#1f1f1f"}} onClick={handleTeacherButtonClick}>Show Teachers</Button>
                        <Button sx={{ backgroundColor: "#1f1f1f"}} onClick={handleCourseButtonClick}>Show Courses</Button>
                    </ButtonGroup>
                </Box>
            </Box>
            {dataValue === "" && (
                <div></div>
            )}
            {dataValue === "student" && (
                data.map(element => 
                    <Typography key={element.id}>
                        {element.email}
                    </Typography>
                )
            )}
        </Container>
    );
}