import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import history from "../Navigation/history";
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { green } from '@material-ui/core/colors';
import Paper from "@material-ui/core/Paper";

import { deepOrange, deepPurple } from '@mui/material/colors';



const SearchBar = () => {
    return (
        <Paper
            component="form"
            sx={{ p: "1px 4px", display: "flex", alignItems: "center", width: 600 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="What are you looking for?"
                inputProps={{ "aria-label": "What are you looking for?" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
    );
}

const ButtonAppBar = () => {
    return (
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
    );
}


const Search = () => {
    const [keyword, setKeyWord] = useState("")


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
                    Search Page
                </Typography>

                <Typography style={{ margin: 30 }}></Typography>
                <Grid Item>
                    <SearchBar
                    justifyContent="center"
                    alignItems="center"
                        backgroundColor="secondary"
                    ></SearchBar>
                </Grid>

            </Grid>


        </div>
    )
}

const serverURL = "http://ec2-18-216-101-119.us-east-2.compute.amazonaws.com:3054"; //enable for deployed mode; Change PORT to the port number given to you;

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
            opacity: opacityValue,
            overflow: "hidden",
            color: green[400],
            '&$checked': {
                color: green[600],
            },
        },
    },
    palette: {
        secondary: {
            main: '#E33E7F'
        }
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
class Searchs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: 1,
            mode: 0
        }
    };
    componentDidMount() {
        //this.loadUserSettings();
    }

    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.root}>
                    <CssBaseline />
                    <Paper
                        className={classes.paper}
                    >
                        <Search />
                    </Paper>

                </div>

            </MuiThemeProvider>
        );
    }
}

Searchs.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Searchs);