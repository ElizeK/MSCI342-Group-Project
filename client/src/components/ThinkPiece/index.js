import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import history from "../Navigation/history";

import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { green } from '@material-ui/core/colors';
import Paper from "@material-ui/core/Paper";

const ButtonAppBar = () => {
    return (
        <div>
            <Toolbar>
                <Typography style={{ marginRight: 10 }}></Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News App
            </Typography>
                <Typography style={{ marginRight: 50 }}></Typography>
                <Button
                    color="inherit"
                    style={{ cursor: "pointer" }}
                    onClick={() => history.push('/')}
                >
                    Home
            </Button>
                <Typography style={{ marginRight: 50 }}></Typography>
                <Button
                    color="inherit"
                    style={{ cursor: "pointer" }}
                    onClick={() => history.push('/Search')}
                >
                    Search
            </Button>
                <Typography style={{ marginRight: 50 }}></Typography>
                <Button
                    color="inherit"
                    style={{ cursor: "pointer" }}
                    onClick={() => history.push('/ThinkPiece')}
                >
                    ThinkPiece
            </Button>
                <Typography style={{ marginRight: 50 }}></Typography>
                <Button
                    color="inherit"
                    style={{ cursor: "pointer" }}
                    onClick={() => history.push('/Profile')}
                >
                    Profile
            </Button>
                <Typography style={{ marginRight: 50 }}></Typography>
            </Toolbar>
        </div>

    );
}

const ThinkPiece = () => {
    return (
        <div>
            <ButtonAppBar
                backgroundColor="secondary"
            ></ButtonAppBar>
            <Grid
                container
                spacing={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{ minHeight: '100vh' }}>

                <Typography variant="h3" color="inherit" noWrap>
                    ThinkPiece
                </Typography>
                <Typography style={{ margin: 30 }}></Typography>


            </Grid>

        </div>
    )
}

const opacityValue = 0.7;

const theme = createTheme({
    palette: {
        type: 'dark',
        background: {
            default: "#b552f7"
        },
        primary: {
            main: "#52F7B4",
        },
        secondary: {
            main: "#b552f7",
        },
    },
});

const styles = theme => ({
    root: {
        body: {
            backgroundColor: "#AFE1AF",
            opacity: opacityValue,
            overflow: "hidden",
            color: green[400],
            '&$checked': {
                color: green[600],
            },
        },
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

});

const ThinkPieces = (props) => {

    const [userId, setUserId] = useState(1);
    const [mode, setMode] = useState(0)

    return (
        <MuiThemeProvider theme={theme}>
            <div className={props.classes.root}>
                <CssBaseline />
                <Paper
                    className={props.classes.paper}
                >
                    <ThinkPiece />
                </Paper>

            </div>
        </MuiThemeProvider>
    );
}

ThinkPieces.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ThinkPieces);