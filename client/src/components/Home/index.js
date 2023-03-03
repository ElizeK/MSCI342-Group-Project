import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { MenuItem, Typography } from "@material-ui/core";
import history from "../Navigation/history";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { green } from '@material-ui/core/colors';
import Paper from "@material-ui/core/Paper";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { makeStyles } from '@material-ui/styles';

import "@fontsource/oswald";
import "@fontsource/inter";
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import {FormControl, InputLabel, Select, TextField, Box } from '@mui/material';
import { LastPageOutlined } from '@material-ui/icons';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


import { deepOrange, deepPurple } from '@mui/material/colors';
import { Article } from '@mui/icons-material';

// // interface ExpandMoreProps extends IconButtonProps {
// //     expand: boolean;
// // }
// // const ExpandMore = styled((props: ExpandMoreProps) => {
// //     const { expand, ...other } = props;
// //     return <IconButton {...other} />;
// // })(({ theme, expand }) => ({
// //     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
// //     marginLeft: 'auto',
// //     transition: theme.transitions.create('transform', {
// //         duration: theme.transitions.duration.shortest,
// //     }),
// // }));

// // const RecipeReviewCard = () => {
// //     const [expanded, setExpanded] = React.useState(false);

// //     const handleExpandClick = () => {
// //         setExpanded(!expanded);
// //     };



// // const serverURL = process.env.DB_URL;
const serverURL = " ";
// // const serverURL = "http://ec2-18-216-101-119.us-east-2.compute.amazonaws.com"

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
// // const classes = useStyles();

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

    button: {
        paddingTop: theme.spacing(5),
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
    ArticleCard: {
        fontFamily: 'Oswald',
        fontStyle: "normal",
        fontWeight: 200,
        fontSize: 20,
        backgroundColor: "#1b1b1b",
        overflow: "hidden",
        color: "#1b1b1b"
        // cursor: "pointer"
    },
    inputLabelRoot: {
        color: "white",
    },

    header: {
        fontFamily: 'Oswald',
        fontStyle: "normal",
        fontWeight: 200,
        fontSize: 20,
        color: '#712EFF'
    },

    card: {
        maxWidth: 345,
        margin: 'auto',
        marginTop: 50,
        marginBottom: 50,
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
    },
    textField: {
        margin: 10,
        width: '80%',
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


const ArticleCard = ({ topHeadline }) => {
    const classes = useStyles();

    return (
        // <Grid container spacing = {2}>
        //     <Grid item xs={4}>
                <Card variant="outlined" style={{ "width": 500 }} className={classes.ArticleCard}>
                    <div>
                        <img src="./placeholderImage.png" width="500" height="200"></img>
                    </div>
                    <CardHeader className={classes.header}
                        avatar={
                            <Avatar sx={{ bgcolor: 'backgroundColor.backgroundColor' }} aria-label="recipe">
                                S
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={topHeadline.title}
                        subheader={topHeadline.source?.name + " ● " + topHeadline.publishedAt}
                    />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" className={classes.header}>
                                This text is placeholder for our description field. The content for this field
                                will be added in Sprint 2.
                            </Typography>
                        </CardContent>
       
                    <ul>
                        {/* <li> <b>Source:</b> {topHeadline.source?.name}</li> */}
                        {/* <li> <b>Author: </b>{topHeadline.author}</li> */}
                        {/* <li> <b>Title:</b> {topHeadline.title}</li> */}
                        {/* <li> <b>Description:</b> {topHeadline.description}</li> */}
                        {/* <li> <b>Published at: </b>{topHeadline.publishedAt}</li> */}
                        {/* <li> <b>URL:</b> {topHeadline.url}</li> */}
                        {/* <li> <b>Content:</b> {topHeadline.content}</li> */}
                        {/* <li> TESTING IMAGE </li> */}
                    <div
                        style={{ justifyContent: 'flex-start' }}>
                        <Button
                            className={classes.button}
                            pt={20}
                            variant="outlined"
                            href={topHeadline.url}
                            target="_blank"
                            rel="noreferrer"
                            color="inherit"
                        style={{ cursor: "pointer", float: 'left', backgroundColor: '#712EFF', color: 'white' }}
                        >
                            Learn More
                        </Button>
                    </div>
                    </ul>
                </Card>
            // </Grid>
        // </Grid>
        
    )
}
const Home = () => {
    const classes = useStyles();

    const [article, setArticle] = useState([]);
    const [expanded, setExpanded] = useState('');
    const [topHeadlines, setTopHeadlines] = useState([]);
    const [userId, setUserId] = useState(1);
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [category, setCategory] = React.useState("");


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    React.useEffect(() => {
        getCategory();
    }, [userId]);

    React.useEffect(() => {
        console.log(category)
        getTopHeadlines();
    }, [category])

    const getCategory = () => {
        callApiGetPreferenceCategory()
            .then(res => {
                // callApiGetArticles(res.user_info) 
                setCategory(res.user_info[0].preference_category)
            })
    }

    const callApiGetPreferenceCategory = async () => {
        const url = '/api/preferenceCategory';
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userID: userId,
                category: category
            })
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    const getTopHeadlines = () => {
        if (category === "") return
        callApiGetTopHeadlines()
            .then(res => {
                console.log("callGetTopHeadlines returned: ", res);
                setTopHeadlines(res.articles)
            })
    }

    const callApiGetTopHeadlines = async () => {
        const url = 'api/news/topHeadlines'

        console.log("CALL TOP HEADLINESSSSSSS")
        console.log(JSON.stringify({
            category: category,
            pageSize: 15
        }))

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                category: category,
                pageSize: 15
            })
        });
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        return body;
    }

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
                style={{ minHeight: '100vh' }}
                className={classes.backgroundColor}>

                <Typography className={classes.heading} >
                    Pulse News Home Page
                </Typography>
                <Typography variant="h5" color="inherit" noWrap className={classes.subHeading}>
                    Preference category is <b>{category}</b>
                </Typography>

                {
                    topHeadlines.length > 0 ?
                        
                    <Grid container spacing = {{xs: 10, md:3}} columns = {{xs: 5, sm: 8, md:12}} alignItems = "center" style = {{marginLeft: 50}}>
                        
                        {topHeadlines.map((topHeadline, index) => {
                            return (
                           
                                <Grid
                                    xs = {2} sm = {4} key = {index}
                                    container spacing={15}
                                    direction="column"
                                    className={classes.backgroundColor}
                                >
                                    <ArticleCard topHeadline={topHeadline} />
                                    <Typography style={{ padding: 30 }}></Typography>
                                </Grid>
                            )
                        })}
                    </Grid>   
                        : <></>
                }              
            </Grid>
        </div>
    )
}

// const serverURL = "http://ec2-18-216-101-119.us-east-2.compute.amazonaws.com:3054"; //enable for deployed mode; Change PORT to the port number given to you;


const Homes = () => {

    return(
            <MuiThemeProvider theme = { theme } >
            <div>
                <CssBaseline />
                <Paper>
                    {/* className={classes.paper}
                    > */}
                    <Home />
                </Paper>

            </div>

            </MuiThemeProvider >
        );
};

export default Homes;

