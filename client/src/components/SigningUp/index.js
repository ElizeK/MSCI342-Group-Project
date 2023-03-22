import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import history from "../Navigation/history";
import "@fontsource/oswald";
import "@fontsource/inter";
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../NavBar';
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid, Button, Paper, FormControl, InputLabel, Select, MenuItem, TextField, Box } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


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

const SigningUp = () => {
    const [userEmail, setUserEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [preference, setPreference] = React.useState("");
    const [language, setLanguage] = React.useState("");
    const [passwordConf, setPasswordConf] = React.useState("");
    const [firebaseUuid, setFirebaseUuid] = React.useState("")

    const handleUserEmail = (event) => {
        setUserEmail(event.target.value);
    };
    const handleUsername = (event) => {
        setUsername(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    
    const handlePreference = (event) => {
        setPreference(event.target.value);

    };

    const handleLanguage = (event) => {
        setLanguage(event.target.value);

    };

    React.useEffect(() =>{
        addUser();
    }, [firebaseUuid] )

    // const handleFirebase = (event) => {
    //     setFirebaseUuid(event.target.value);

    // };


    const classes = useStyles();

    const addUser = async () => {
        const url = "/api/addUser";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                userEmail: userEmail,
                username: username,
                password: password,
                preference: preference,
                language: language,
                firebaseUuid: firebaseUuid
            })

        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
    }

    const handleFirebaseSignup = () => {
        console.log("IN HANDLE FIREBASE SIGNUP")
        createUserWithEmailAndPassword(getAuth(), userEmail, password)
        .then((userCredential) => {
            console.log("SIGN UP SUCCESSFUL")
            // Signed in
            // const user = (userCredential.user)
            setFirebaseUuid(userCredential.user.uid)
            console.log(firebaseUuid + " is firebase useruid")
            console.log(userCredential.user.uid + " is firebase useruid")
             // move addUser call here
    
        })
        .catch((error) => {
            console.log("SIGN UP FAIL")
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + ": " +errorMessage)
        })
    };

    const handleSignUpButton = (event) => {
        console.log("submitted");
        event.preventDefault()
        handleFirebaseSignup();
        addUser();
       console.log(firebaseUuid + "is being added")
        console.log("ADD USER success")
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
                            Sign Up Page
                        </Typography>
                        <Typography className={classes.subHeading}>Create your account below</Typography>
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

                    <Box ml={7} p={2}>
                        <PreferenceSelection preference={preference} setPreference={handlePreference} />
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
                    <Box mt={0} p={2}>
                        <TextField
                            required
                            fullWidth
                            id="tf4"
                            label="Password Confirmation"
                            value={passwordConf}
                            variant="outlined"
                            className={classes.textField}
                            onChange={(e) => setPasswordConf(e.target.value)}
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                        />
                    </Box>
                    <Box mt={0} p={2}>
                        <LanguageSelection value={language} setLanguage={handleLanguage} />
                    </Box>
                    <Box m2={2} p={2} id="buttonBox">
                        <Button id="bt5" variant="contained" onClick={handleSignUpButton} style={{ backgroundColor: "#B18CFF" }}>Sign Up!</Button>
                    </Box>
                </Grid>
            </Grid >
        </div >
    )
}

//select topic preference from drop down options 
const PreferenceSelection = ({ preference, setPreference }) => {
    const classes = useStyles();
    console.log("chose a topic successfuly")
    return (
        < Grid item >
            <FormControl fullWidth>
                <InputLabel style={{ color: "#fff" }}>Preference</InputLabel>
                <Select
                    id="dd1"
                    value={preference}
                    label="Preference"
                    // onChange={(e) => setPreference(e.target.value)}                 
                    onChange={setPreference}
                    className={classes.select}
                    style={{ color: "#fff" }}
                    required
                >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={'Business'}>Business</MenuItem>
                    <MenuItem value={'Entertainement'}>Entertainement</MenuItem>
                    <MenuItem value={'General'}>General</MenuItem>
                    <MenuItem value={'Health'}>Health</MenuItem>
                    <MenuItem value={'Science'}>Science</MenuItem>
                    <MenuItem value={'Sports'}>Sports</MenuItem>
                    <MenuItem value={'Technology'}>Technology</MenuItem>
                </Select>
            </FormControl>
        </Grid >
    )
}


//select topic preference from drop down options 
const LanguageSelection = ({ language, setLanguage, news }) => {
    const classes = useStyles();
    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel style={{ color: "#fff" }}>Language</InputLabel>
                <Select
                    id="dd2"
                    value={language}
                    label="Language"
                    onChange={setLanguage}
                    className={classes.select}
                    style={{ color: "#fff" }}
                    required
                >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={'ar'}>Arabic</MenuItem>
                    <MenuItem value={'de'}>German</MenuItem>
                    <MenuItem value={'en'}>English</MenuItem>
                    <MenuItem value={'es'}>Spanish</MenuItem>
                    <MenuItem value={'fr'}>French</MenuItem>
                    <MenuItem value={'it'}>Italian</MenuItem>
                    <MenuItem value={'ru'}>Russian</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

const serverURL = "http://ec2-18-216-101-119.us-east-2.compute.amazonaws.com:3054"; //enable for deployed mode; Change PORT to the port number given to you;



class SigningUps extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         userID: 1,
    //         mode: 0
    //     }
    // };
    // componentDidMount() {
    //     //this.loadUserSettings();
    // }

    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
            <div>
                <CssBaseline />
                <Paper>
                    <SigningUp />
                </Paper>
            </div>
        </MuiThemeProvider>
        );
    }
}

SigningUps.propTypes = {
    classes: PropTypes.object.isRequired
};

export default SigningUps;
