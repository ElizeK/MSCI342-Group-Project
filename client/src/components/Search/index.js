import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import history from "../Navigation/history";
import "@fontsource/oswald";
import "@fontsource/inter";
import { Grid, Toolbar, Button, Paper, FormControl, InputLabel, Select, MenuItem, TextField, Box, Card } from '@mui/material';
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
                <Typography className={classes.navbarItem} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News App
                </Typography>
                <Typography style={{ marginRight: 50 }}></Typography>
                <Button
                    color="inherit"
                    onClick={() => history.push('/')}
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

const ArticleCard = ({ article }) => {
    return (
        <Card variant="outlined" style={{ "width": 500 }}>
            <ul>
                <li> <b>Source:</b> {article.source?.name}</li>
                <li> <b>Author: </b>{article.author}</li>
                <li> <b>Title:</b> {article.title}</li>
                <li> <b>Description:</b> {article.description}</li>
                <li> <b>URL:</b> <a>{article.url}</a></li>
                <li> <b>Published at: </b>{article.publishedAt}</li>
                <li> <b>Content:</b> {article.content}</li>
            </ul>
        </Card>
    )
}

const Search = () => {
    const [query, setQuery] = useState("");
    const [articles, setArticles] = useState([]);

    const classes = useStyles();

    const getArticles = () => {
        if (query === "") return

        callApiGetArticles()
            .then(res => {
                console.log("callGetArticles returned: ", res);
                setArticles(res.articles)
            })
    }

    const callApiGetArticles = async () => {
        const url = '/api/news/everything'
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: query,
                pageSize: 15
            })
        });
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    const handleSubmit = async (e) => {
        getArticles()
    }

    return (
        <div>
            <ButtonAppBar
                backgroundColor="primary"
            ></ButtonAppBar>
            <Grid
                container direction="row"
                className={classes.backgroundColor}
            >
                <Grid item style={{ marginTop: 50 }} xs={5}>
                    <Box ml={7} p={2}>
                        <Typography className={classes.heading}>Search</Typography>
                    </Box>

                </Grid>
            </Grid >

            <Grid
                container
                direction="column"
                justifyContent="center"
                className={classes.backgroundColor}
            >
                <Grid item >
                    <Box ml={7} p={2}>
                        <Typography className={classes.subHeading}>Search for articles based on keyword</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Box ml={7} p={2}>
                        <TextField
                            required
                            id="outlined-basic"
                            label="Search"
                            value={query}
                            variant="outlined"
                            className={classes.textField}
                            onChange={(e) => setQuery(e.target.value)}
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                        />
                        <Button variant="contained" style={{ backgroundColor: "#B18CFF" }} onClick={handleSubmit}>Search</Button>
                    </Box>
                    <Box ml={7} p={2}>
                        {
                            articles.length > 0 ?
                                <div>
                                    <Typography className={classes.subHeading}>Results for keyword: {query}</Typography>
                                    {articles.map((article) => {
                                        return (
                                            <ArticleCard article={article} />
                                        )
                                    })}
                                </div>

                                : <></>
                        }
                    </Box>
                </Grid>
            </Grid>
        </div >
    )
}

const Searchs = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <CssBaseline />
                <Paper>
                    <Search />
                </Paper>
            </div>
        </MuiThemeProvider>
    );

};

export default Searchs;