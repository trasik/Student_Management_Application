import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Avatar, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useParams } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import axios from "axios";

export default function AddStudents(props) {

    const [editData, setEditData] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [zipCode, setZipCode] = useState(0);
    const [classStanding, setClassStanding] = useState("");
    const studentID = useParams();

    useEffect(() => {
    }, [editData, firstName]);

    useEffect(() => {
        const retrieveStudentByID = async () => {
            try {
                const data = await axios.get(`http://localhost:8080/api/students/${studentID.id}`);
                setEditData(data.data);
            } catch (error) {
                console.error(error);
            }
        };
        retrieveStudentByID();
    },[studentID.id]);

    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);
    const handleAddressChange = (e) => setAddress(e.target.value);
    const handleStateChange = (e) => setState(e.target.value);
    const handleCountryChange = (e) => setCountry(e.target.value);
    const handleZipCodeChange = (e) => setZipCode(e.target.value);
    const handleClassStandingChange = (e) => setClassStanding(e.target.value);

    const handleStudentEdit = async (e) => {
        e.preventDefault();
        try {
            const student = {
                firstName: (firstName === "" ? editData.firstName: firstName),
                lastName: (lastName === "" ? editData.lastName: lastName),
                email: (email === "" ? editData.email: email),
                gender: (gender === "" ? editData.gender: gender),
                address: (address === "" ? editData.address: address),
                state: (state === "" ? editData.state: state),
                country: (country === "" ? editData.country: country),
                zipCode: (zipCode === 0 ? editData.zipCode: Number(zipCode)),
                classStanding: (classStanding === "" ? editData.classStanding: classStanding),
            }
            await axios.put(`http://localhost:8080/api/students/${studentID.id}`, student);
        } catch (error) {
            console.error(error);
        }
    }

    const boxColumnStyle = {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    return (
        <div>
            <Container sx={{ marginBottom: 5 }}component="main" maxWidth="md">
                <Box sx={boxColumnStyle}>
                    <Avatar sx={{ m: 1, backgroundColor: "#1f1f1f" }}>
                        <PersonIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Students
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleStudentEdit} sx={{ mt: 3 }}>
                        {(editData.length === 0) ? <div></div> :
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    defaultValue={editData.firstName}
                                    onChange={handleFirstNameChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    defaultValue={editData.lastName}
                                    onChange={handleLastNameChange}
                                    autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    defaultValue={editData.email}
                                    onChange={handleEmailChange}
                                    autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="gender-label">Gender</InputLabel>
                                        <Select
                                        labelId="gender-label"
                                        id="gender-select"
                                        defaultValue={editData.gender  || ""}
                                        label="Gender"
                                        onChange={handleGenderChange}
                                        >
                                            <MenuItem value={""}>None</MenuItem>
                                            <MenuItem value={"Male"}>Male</MenuItem>
                                            <MenuItem value={"Female"}>Female</MenuItem>
                                            <MenuItem value={"Other"}>Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="address"
                                    label="Address"
                                    name="address"
                                    defaultValue={editData.address}
                                    onChange={handleAddressChange}
                                    autoComplete="address"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="state-label">State</InputLabel>
                                        <Select
                                        labelId="state-label"
                                        id="state-select"
                                        defaultValue={editData.state  || ""}
                                        label="State"
                                        onChange={handleStateChange}
                                        >
                                            <MenuItem value={""}>None</MenuItem>
                                            <MenuItem value="Alabama">AL</MenuItem>
                                            <MenuItem value="Alaska">AK</MenuItem>
                                            <MenuItem value="American Samoa">AS</MenuItem>
                                            <MenuItem value="Arizona">AZ</MenuItem>
                                            <MenuItem value="Arkansas">AR</MenuItem>
                                            <MenuItem value="California">CA</MenuItem>
                                            <MenuItem value="Colorado">CO</MenuItem>
                                            <MenuItem value="Connecticut">CT</MenuItem>
                                            <MenuItem value="Delaware">DE</MenuItem>
                                            <MenuItem value="District Of Columbia">DC</MenuItem>
                                            <MenuItem value="Federated States Of Micronesia">FM</MenuItem>
                                            <MenuItem value="Florida">FL</MenuItem>
                                            <MenuItem value="Georgia">GA</MenuItem>
                                            <MenuItem value="Guam">GU</MenuItem>
                                            <MenuItem value="Hawaii">HI</MenuItem>
                                            <MenuItem value="Idaho">ID</MenuItem>
                                            <MenuItem value="Illinois">IL</MenuItem>
                                            <MenuItem value="Indiana">IN</MenuItem>
                                            <MenuItem value="Iowa">IA</MenuItem>
                                            <MenuItem value="Kansas">KS</MenuItem>
                                            <MenuItem value="Kentucky">KY</MenuItem>
                                            <MenuItem value="Louisiana">LA</MenuItem>
                                            <MenuItem value="Maine">ME</MenuItem>
                                            <MenuItem value="Marshall Islands">MH</MenuItem>
                                            <MenuItem value="Maryland">MD</MenuItem>
                                            <MenuItem value="Massachusetts">MA</MenuItem>
                                            <MenuItem value="Michigan">MI</MenuItem>
                                            <MenuItem value="Minnesota">MN</MenuItem>
                                            <MenuItem value="Mississippi">MS</MenuItem>
                                            <MenuItem value="Missouri">MO</MenuItem>
                                            <MenuItem value="Montana">MT</MenuItem>
                                            <MenuItem value="Nebraska">NE</MenuItem>
                                            <MenuItem value="Nevada">NV</MenuItem>
                                            <MenuItem value="New Hampshire">NH</MenuItem>
                                            <MenuItem value="New Jersey">NJ</MenuItem>
                                            <MenuItem value="New Mexico">NM</MenuItem>
                                            <MenuItem value="New York">NY</MenuItem>
                                            <MenuItem value="North Carolina">NC</MenuItem>
                                            <MenuItem value="North Dakota">ND</MenuItem>
                                            <MenuItem value="Northern Mariana Islands">MP</MenuItem>
                                            <MenuItem value="Ohio">OH</MenuItem>
                                            <MenuItem value="Oklahoma">OK</MenuItem>
                                            <MenuItem value="Oregon">OR</MenuItem>
                                            <MenuItem value="Palau">PW</MenuItem>
                                            <MenuItem value="Pennsylvania">PA</MenuItem>
                                            <MenuItem value="Puerto Rico">PR</MenuItem>
                                            <MenuItem value="Rhode Island">RI</MenuItem>
                                            <MenuItem value="South Carolina">SC</MenuItem>
                                            <MenuItem value="South Dakota">SD</MenuItem>
                                            <MenuItem value="Tennessee">TN</MenuItem>
                                            <MenuItem value="Texas">TX</MenuItem>
                                            <MenuItem value="Utah">UT</MenuItem>
                                            <MenuItem value="Vermont">VT</MenuItem>
                                            <MenuItem value="Virgin Islands">VI</MenuItem>
                                            <MenuItem value="Virginia">VA</MenuItem>
                                            <MenuItem value="Washington">WA</MenuItem>
                                            <MenuItem value="West Virginia">WV</MenuItem>
                                            <MenuItem value="Wisconsin">WI</MenuItem>
                                            <MenuItem value="Wyoming">WY</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="country"
                                    label="Country"
                                    name="country"
                                    defaultValue={editData.country}
                                    onChange={handleCountryChange}
                                    autoComplete="country"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="zipCode"
                                    type="number"
                                    label="Zip Code"
                                    name="zipCode"
                                    defaultValue={editData.zipCode}
                                    onChange={handleZipCodeChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="classStanding"
                                    label="Class Standing"
                                    name="classStanding"
                                    defaultValue={editData.classStanding}
                                    onChange={handleClassStandingChange}
                                    />
                                </Grid>
                            </Grid>
                        }
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                            Edit Student
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}