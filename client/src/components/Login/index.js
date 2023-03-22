import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import "@fontsource/oswald";
import "@fontsource/inter";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Paper, TextField, Box } from '@mui/material';
import NavBar from '../NavBar';
import history from "../Navigation/history";



const theme = createTheme({
    palette: {
        type: 'dark',
        background: {
            default: "#1b1b1b"
        },
        primary: {
            main: "#FFFFFF",
        },
        secondary: {
            main: "#1b1b1b",
        },
    },
});

const opacityValue = 1;

const useStyles = makeStyles((theme) => ({
    body: {
        backgroundColor: "#1b1b1b",
        overflow: "hidden",
        color: "#1b1b1b"
    },
    backgroundColor: {
        backgroundColor: "#1b1b1b"
    },
    paper: {
        overflow: "hidden",
    },
    message: {
        opacity: opacityValue,
        maxWidth: 250,
        paddingBottom: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    textField: {
        "& .MuiInputBase-root": {
            color: 'white'
        },
        "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "white" },
        },
        "& .MuiInputLabel-root": { color: 'white' },
        "& .MuiOutlinedInputLabel-root": { color: 'white' },
        "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
                borderColor: "white"
            }
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
                borderColor: "white"
            }
        }
    },
    select: {
        '&:before': {
            borderColor: 'white',
        },
        '&:after': {
            borderColor: 'white',
        },
        '&:not(.Mui-disabled):hover::before': {
            borderColor: 'white',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: "1px solid white !important"
        },
        '& .MuiOutlinedInput-notchedOutline.Mui-focused': {
            borderColor: "white !important"
        },
        '& .MuiSvgIcon-root': {
            fill: "white !important",
        }
    },
    heading: {
        color: "white",
        fontFamily: "Oswald",
        fontSize: 55
    },
    subHeading: {
        color: "white",
        fontFamily: "Inter",
        fontSize: 22,
        fontStyle: "normal",
        fontWeight: 300

    },
    navbarItem: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 16,
        cursor: "pointer"
    },
    inputLabelRoot: {
        color: "white",
    }
}));

const Login = () => {

    const [userEmail, setUserEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    

    const handleUserEmail = (event) => {
        setUserEmail(event.target.value);

    };

    const handleUsername = (event) => {
        setUsername(event.target.value);

    };

    const handlePassword = (event) => {
        setPassword(event.target.value);

    };


    const classes = useStyles();



    // const addUser = async () => {
    //     const url = "/api/addUser";
    //     // console.log(url);

    //     const response = await fetch(url, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",

    //         },
    //         body: JSON.stringify({
    //             userEmail: userEmail,
    //             username: username,
    //             password: password,
    //             preference: preference,
    //             language: language
    //         })


    //     });

    //     const body = await response.json();
    //     if (response.status !== 200) throw Error(body.message);
    // }

    const handleSignUpButton = (event) => {
        console.log("submitted");

        event.preventDefault()
        //addUser();
        history.push('/')

    };


    return (
        <div>
            <NavBar
                backgroundColor="secondary"
            ></NavBar>

            <Grid
                container
                direction="row"
                alignItems="center"
                style={{ minWidth: '100vh' }}
                className={classes.backgroundColor}
            >


                <Grid item style={{ marginTop: 50 }} xs={5}>

                    <Box ml={7} p={2}>
                        <Typography variant="h4" noWrap className={classes.heading}>
                            Login Page
                        </Typography>
                        <Typography className={classes.subHeading}>Log into your account</Typography>
                    </Box>

                    <Box ml={7} p={2}>
                        <TextField
                            required
                            fullWidth
                            id="tf1"
                            label="Email"
                            value={userEmail}
                            variant="outlined"
                            className={classes.textField}
                            onChange={(e) => setUserEmail(e.target.value)}
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                        />
                    </Box>
                    <Box ml={7} p={2}>
                        <TextField
                            required
                            fullWidth
                            id="tf3"
                            label="Password"
                            value={password}
                            variant="outlined"
                            className={classes.textField}
                            onChange={(e) => setPassword(e.target.value)}
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                        />
                    </Box>

                    

                </Grid>

                <Grid item xs={1}></Grid>

                <Grid item direction="column" xs={5} style={{ marginTop: 50 }}>


                    <Box mt={25.5} p={2}>
                        <TextField
                            required
                            fullWidth
                            id="tf2"
                            label="Username"
                            value={username}
                            variant="outlined"
                            className={classes.textField}
                            onChange={(e) => setUsername(e.target.value)}
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                        />
                    </Box>


                    <Box m2={2} p={2} id="buttonBox">
                        <Button id="bt5" variant="contained" onClick = {handleSignUpButton} style={{ backgroundColor: "#B18CFF" }}>Login!</Button>
                    </Box>


                </Grid>




            </Grid >



        </div >

    )
}






//select topic preference from drop down options 


const serverURL = "http://ec2-18-216-101-119.us-east-2.compute.amazonaws.com:3054"; //enable for deployed mode; Change PORT to the port number given to you;




const Logins = () => {

    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <CssBaseline />
                <Paper>
                    <Login />
                </Paper>
            </div>
        </MuiThemeProvider>
    );
}

Logins.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Logins;
