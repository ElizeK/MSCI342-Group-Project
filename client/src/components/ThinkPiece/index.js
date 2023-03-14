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
                    onClick={() => history.push('/')
                    }
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


const ThinkPiece = () => {
    const Categories = {
        BUSINESS: "Business",
        ENTERTAINMENT: "Entertainment",
        GENERAL: "General",
        HEALTH: "Health",
        SCIENCE: "Science",
        SPORTS: "Sports",
        TECHNOLOGY: "Technology"
    }

    const [topic, setTopic] = useState(Categories.GENERAL);
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [url, setUrl] = useState("");
    const [content, setContent] = useState("");

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault()
        submitThinkpiece()
    }

    const submitThinkpiece = async () => {
        const url = "/api/thinkpieces";

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: 1,
                title: title,
                content: content,
                summary: summary,
                topic: topic,
                url: url
            })
        });

        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        //set back to original states when submitted 
        setTopic(Categories.GENERAL);
        setContent("");
        setSummary("");
        setUrl("");
        setTitle("");

        return body;
    }

    return (

        <div data-testid="think-piece-component">
            <ButtonAppBar
                backgroundColor="secondary"
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
                        <Typography className={classes.heading}>Think Piece</Typography>
                        <Typography className={classes.subHeading}>Write your own piece based on news you've read</Typography>
                    </Box>
                    <Box ml={7} p={2}>
                        <TextField
                            required
                            fullWidth
                            id="outlined-basic"
                            label="Title"
                            value={title}
                            variant="outlined"
                            className={classes.textField}
                            onChange={(e) => setTitle(e.target.value)}
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                            data-testid='Title'
                        />
                    </Box>
                    <Box ml={7} p={2}>
                        <TextField
                            required
                            fullWidth
                            id="outlined-multiline-required"
                            label="Summary"
                            multiline
                            maxRows={4}
                            value={summary}
                            className={classes.textField}
                            onChange={(e) => setSummary(e.target.value)}
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                            data-testid='Summary'
                        />
                    </Box>
                    <Box ml={7} p={2}>
                        <FormControl fullWidth>
                            <InputLabel style={{ color: "#fff" }}>Topic</InputLabel>
                            <Select
                                value={topic}
                                label="Topic"
                                onChange={(e) => setTopic(e.target.value)}
                                className={classes.select}
                                style={{ color: "#fff" }}
                                required
                                data-testid='Topic'

                            >
                                {
                                    Object.keys(Categories).map(key => Categories[key]).map((categoryName) =>
                                        <MenuItem value={categoryName}>{categoryName}</MenuItem>
                                    )
                                }
                            </Select>
                        </FormControl>
                    </Box>
                    <Box ml={7} p={2}>
                        <TextField
                            required
                            fullWidth
                            id="outlined-required"
                            label="Article URL"
                            value={url}
                            className={classes.textField}
                            onChange={(e) => setUrl(e.target.value)}
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                            data-testid='URL'
                        />
                    </Box>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item direction="column" xs={4.5} style={{ marginTop: 50 }}>
                    <Box mt={22.5} p={2}>
                        <TextField
                            required
                            fullWidth
                            id="outlined-multiline-static"
                            label="Body"
                            multiline
                            rows={10}
                            value={content}
                            className={classes.textField}
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                            data-testid='Content'
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </Box>
                    <Box m2={2} p={2}>
                        <Button id="submit-button" variant="contained" onClick={handleSubmit} style={{ backgroundColor: "#B18CFF" }} data-testid='Submit'>Submit</Button>
                    </Box>
                </Grid>

            </Grid >
        </div >
    )
}

const ThinkPieces = () => {

    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <CssBaseline />
                <Paper>
                    <ThinkPiece />
                </Paper>
            </div>
        </MuiThemeProvider>
    );
}

ThinkPieces.propTypes = {
    classes: PropTypes.object.isRequired
};

export default ThinkPieces;