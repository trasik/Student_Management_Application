import React, { useState } from "react";
import axios from "axios";
import { Container, Grid, Card, CardContent, CardActions, Typography, 
        Button, Modal, Box, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function ManagementCards() {
    const [openStudentModal, setOpenStudentModal] = useState(false);
    const [openTeacherModal, setOpenTeacherModal] = useState(false);
    const [openCourseModal, setOpenCourseModal] = useState(false);
    const[gender, setGender] = useState("");
    const handleOpenStudent = () => setOpenStudentModal(true);
    const handleCloseStudent = () => setOpenStudentModal(false);
    const handleOpenTeacher = () => setOpenTeacherModal(true);
    const handleCloseTeacher = () => setOpenTeacherModal(false);
    const handleOpenCourse = () => setOpenCourseModal(true);
    const handleCloseCourse = () => setOpenCourseModal(false);
    const handleGenderChange = (e) => setGender(e.target.value);

    const handleStudentSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const student = {
            firstName: data.get('first_name'),
            lastName: data.get('last_name'),
            email: data.get('email'),
            gender: gender
        };

        try {
            await axios.post("http://localhost:8080/api/students", student);
        } catch (e) {
            console.error(e);
        }
      };
    
    return (
        <Container>
            <Grid mt={2} container spacing={2}>
                <Grid item xs={4}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                            >
                                <EmojiPeopleIcon />
                                <Typography sx={{ marginTop: "5px", fontSize: 18 }} gutterBottom>
                                Students
                                </Typography>
                            </Box>
                            <Typography sx={{ mb: 1 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" fullWidth onClick={handleOpenStudent}>Add Student</Button>
                            <Modal
                            open={openStudentModal}
                            onClose={handleCloseStudent}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            >
                            <Box sx={{position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: '#ffffff',
                            borderRadius: '5px',
                            boxShadow: 24,
                            p: 4,}}>
                                <Box component="form" onSubmit={handleStudentSubmit} noValidate sx={{ mt: 1 }}>
                                    <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="first_name"
                                    label="First Name"
                                    name="first_name"
                                    autoFocus
                                    />
                                    <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="last_name"
                                    label="Last Name"
                                    name="last_name"
                                    />
                                    <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    />
                                    <FormControl margin="normal" fullWidth>
                                        <InputLabel id="gender-label">Gender</InputLabel>
                                        <Select
                                        labelId="gender-label"
                                        id="gender"
                                        value={gender}
                                        label="Gender"
                                        onChange={handleGenderChange}
                                        >
                                        <MenuItem value={"Male"}>Male</MenuItem>
                                        <MenuItem value={"Female"}>Female</MenuItem>
                                        <MenuItem value={"Other"}>Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    >
                                    Add Student
                                    </Button>
                                </Box>
                            </Box>
                            </Modal>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                            >
                                <EmojiPeopleIcon />
                                <Typography sx={{ marginTop: "5px", fontSize: 18 }} gutterBottom>
                                Teachers
                                </Typography>
                            </Box>
                            <Typography sx={{ mb: 1 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" fullWidth onClick={handleOpenTeacher}>Add Teacher</Button>
                            <Modal
                            open={openTeacherModal}
                            onClose={handleCloseTeacher}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            >
                            <Box sx={{position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: '#1f1f1f',
                            color: '#ffffff',
                            borderRadius: '5px',
                            boxShadow: 24,
                            p: 4,}}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Teacher
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                            </Box>
                        </Modal>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                            >
                                <MenuBookIcon />
                                <Typography sx={{ marginTop: "5px", fontSize: 18 }} gutterBottom>
                                Courses
                                </Typography>
                            </Box>
                            <Typography sx={{ mb: 1 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" fullWidth onClick={handleOpenCourse}>Add Course</Button>
                            <Modal
                            open={openCourseModal}
                            onClose={handleCloseCourse}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            >
                            <Box sx={{position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: '#1f1f1f',
                            color: '#ffffff',
                            borderRadius: '5px',
                            boxShadow: 24,
                            p: 4,}}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Course
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                            </Box>
                        </Modal>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}