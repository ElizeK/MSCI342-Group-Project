import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import history from "../Navigation/history";
import "@fontsource/oswald";
import "@fontsource/inter";
import { Grid, Toolbar, Button, Paper, FormControl, InputLabel, Select, MenuItem, TextField, Box } from '@mui/material';
import { LastPageOutlined } from '@material-ui/icons';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
// import news from "./news.png";








// This theme sets the background color for when you scroll behind the screen
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

const ButtonAppBar = () => {
    const classes = useStyles();
    return (
        <div>
            <Toolbar>
                <Typography style={{ marginRight: 10 }}></Typography>
                <Button
                    color="inherit"
                    onClick={() => history.push('/Landing')}
                >
                    <Typography className={classes.navbarItem} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Pulse News
                    </Typography>
                </Button>
                <Typography style={{ marginRight: 50 }}></Typography>
                <Button
                    color="inherit"
                    onClick={() => history.push('/Home')}
                >
                    <Typography className={classes.navbarItem}>Home</Typography>
                </Button>
                <Typography style={{ marginRight: 50 }}></Typography>
                <Button
                    color="inherit"
                    style={{ cursor: "pointer" }}
                    onClick={() => history.push('/Search')}
                >
                    <Typography className={classes.navbarItem}>Search</Typography>
                </Button>
                <Typography style={{ marginRight: 50 }}></Typography>
                <Button
                    color="inherit"
                    style={{ cursor: "pointer" }}
                    onClick={() => history.push('/ThinkPiece')}
                >
                    <Typography className={classes.navbarItem}>Thinkpiece</Typography>
                </Button>
                <Typography style={{ marginRight: 50 }}></Typography>
                <Button
                    color="inherit"
                    style={{ cursor: "pointer" }}
                    onClick={() => history.push('/Profile')}
                >
                    <Typography className={classes.navbarItem}>Profile</Typography>
                </Button>

            </Toolbar>
        </div>

    );
}
const SignUpBar = () => {
    const classes = useStyles();
    return (
        <div>
            <Box display="flex" justifyContent="space-between">

                <Button
                    variant="contained"
                    // color="inherit"
                    style={{ backgroundColor: "#B18CFF", minWidth: '100px', minHeight: '40px' }}
                    onClick={() => history.push('/SigningUp')}
                >
                    <Typography className={classes.navbarItem}>Sign Up</Typography>
                </Button>
                <Button
                    variant="contained"
                    // color="inherit"
                    style={{ backgroundColor: "#B18CFF", minWidth: '100px', minHeight: '40px' }}
                    onClick={() => history.push('/SigningUp')}
                >
                    <Typography className={classes.navbarItem}>Login</Typography>
                </Button>
            </Box>
        </div>

    );
}


const Landing = () => {



    const classes = useStyles();



    return (
        <div>
            <ButtonAppBar
                backgroundColor="primary"
            ></ButtonAppBar>

            <Grid
                container
                direction="row"
                // justifyContent="center"
                style={{ minHeight: '100vh' }}
                className={classes.backgroundColor}
            >
                <Grid item style={{ marginTop: 50 }} xs={5}>
                    <Box ml={7} p={2}>
                        <Typography className={classes.heading}>Pulse News</Typography>
                        <Typography className={classes.subHeading}>Its hard to find reliable news, let us help. With curated suggestions based on your likes we’ll provide you with the most recent and relevant news </Typography>
                    </Box>
                    <Box ml={7} p={2}>

                    </Box>
                    <Box ml={7} p={2}>
                        <SignUpBar></SignUpBar>
                    </Box>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item direction="column" xs={4.5} style={{ marginTop: 50 }}>
                    <Box m2={3} p={2}>
                    <img src = "./news.png" width="400" height="500"></img>

                    </Box>
                </Grid>

            </Grid >
        </div >
    )
}

const Landings = () => {

    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <CssBaseline />
                <Paper>
                    <Landing />
                </Paper>
            </div>
        </MuiThemeProvider>
    );

};

export default Landings;
