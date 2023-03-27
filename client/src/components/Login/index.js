import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { Typography, Snackbar } from "@material-ui/core";
import "@fontsource/oswald";
import "@fontsource/inter";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Paper, TextField, Box } from '@mui/material';
import NavBarSignedOut from '../NavBarSignedOut';
import history from "../Navigation/history";
import auth from "../Firebase/firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Alert from '@material-ui/lab/Alert'


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
    const [password, setPassword] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("error");
    const [snack, setSnack] = React.useState(false)

    const classes = useStyles();

    const handleFirebaseLogin = () => {
        signInWithEmailAndPassword(getAuth(), userEmail, password)
            .then((userCredential) => {
                console.log("LOG IN SUCCESFUL")
                // Signed in 
                const user = userCredential.user
                history.push('/')
            })
            .catch((error) => {
                console.log("LOG IN FAIL")
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode + ": " + errorMessage)
                setErrorMessage(errorMessage)
                setSnack(true)
            })
    }

    const handleLogin = (event) => {
        if (password.length < 6 || userEmail.length == 0) {
            setErrorMessage("Fill in all fields in form correctly")
            setSnack(true)
        }

        else {
            event.preventDefault()
            handleFirebaseLogin()
        }
    };

    const handleClose = () => {
        setSnack(false)
    }

    return (
        <div data-testid="login-component">
            <NavBarSignedOut
                backgroundColor="secondary"
            ></NavBarSignedOut>
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
                            data-testid='Email'
                        />
                    </Box>
                    <Box ml={7} p={2}>
                        <TextField
                            required
                            fullWidth
                            id="tf3"
                            label="Password"
                            value={password}
                            type="password"
                            variant="outlined"
                            className={classes.textField}
                            onChange={(e) => setPassword(e.target.value)}
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                            data-testid='Password'
                        />
                    </Box>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item direction="column" xs={5} style={{ marginTop: 50 }}>
                    <Box m2={2} p={2} id="buttonBox">
                        <Button id="bt5" variant="contained" onClick={handleLogin} style={{ backgroundColor: "#B18CFF" }}>Login!</Button>
                    </Box>

                </Grid>
            </Grid >
            <Snackbar open={snack} onClose={handleClose} autoHideDuration={100000}>

                <Alert severity="error">{errorMessage}</Alert>

            </Snackbar>
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
    classes: PropTypes.object
};

export default Logins;
