import React, { useState } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

import { Typography, useRadioGroup } from "@material-ui/core";
import NavBar from '../NavBar';

import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@material-ui/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid, Button, Paper, FormControl, InputLabel, Select, MenuItem, TextField, Box, Card, Alert, Snackbar } from '@mui/material';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "@fontsource/oswald";
import "@fontsource/inter";


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

    root: {
        "& .MuiPaper-root": {
            backgroundColor: "#ffff",
            color: "rgba(0, 0, 0, 0.87)"
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
}));

const ArticleCard = ({ topHeadline }) => {
    const classes = useStyles();
    const [favourite, setFavourite] = React.useState(false);
    const [uuid, setUuid] = useState("");

    onAuthStateChanged(getAuth(), (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            setUuid(user.uid)
            // ...
        } else {
            // User is signed out
            // ...
        }
    });

    const addFavourite = async () => {
        await handleFavouriteClick();
    }
    const handleFavouriteClick = async () => {
        const url = '/api/article/favourite';
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                firebaseUuid: uuid,
                title: topHeadline.title,
                author: topHeadline.author,
                url: topHeadline.url,
                urlToImage: topHeadline.urlToImage,
                description: topHeadline.description,
                publishedAt: topHeadline.publishedAt,
                publisher: topHeadline.source.name
            })
        });

        const body = await response.json();

        if (response.ok) {
            setFavourite(true);
        }
    }

    return (
        <Card variant="outlined" style={{ "width": 400, "height": 700 }} className={classes.topHeadlineCard} color="backgroundColor">
            <div>

                {/* <img src="./placeholderImage.png" width="400"></img> */}
                <img src={topHeadline.urlToImage || "./placeholderImage.png"} width="400" alt={"No Image Found"}></img>

            </div>
            <CardHeader className={classes.header}
                title={topHeadline.title}
                subheader={topHeadline.author + " ● " + topHeadline.publishedAt}
            />
            <CardContent>
                <Typography variant="body2" className={classes.header}>
                    {topHeadline.description}
                </Typography>
            </CardContent>


            <div
                style={{ justifyContent: 'flex-start', marginLeft: 10 }}>
                <Button
                    // color="secondary"
                    variant="outlined"
                    href={topHeadline.url}
                    target="_blank"
                    rel="noreferrer"
                    color="inherit"
                    style={{ cursor: "pointer", float: 'left' }}
                >
                    Learn More
                </Button>
            </div>
            <div
                style={{ justifyContent: 'flex-start', marginLeft: 10 }}>
                <Button
                    variant="outlined"
                    target="_blank"
                    color="inherit"
                    startIcon={<FavoriteIcon />}
                    style={{ marginLeft: '110px' }}
                    onClick={addFavourite}>
                    {favourite ? 'Favourited' : 'Favourite'}
                </Button>
            </div>

        </Card>
    )
}
const Home = () => {
    const classes = useStyles();

    const [topHeadlines, setTopHeadlines] = useState([]);
    const [category, setCategory] = React.useState("");
    const [sortBy, setSortBy] = useState("");
    const [uuid, setUuid] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [snack, setSnack] = useState(false);

    const handleClose = () => {
        setSnack(false)
    }

    onAuthStateChanged(getAuth(), (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            getCategory(user.uid);
            // ...
        } else {
            // User is signed out
            // ...
        }
    });

    //on update of uuid call getCategory


    React.useEffect(() => {
        console.log(category)
        getTopHeadlines();
    }, [category, sortBy])

    const getCategory = (uuid) => {
        callApiGetPreferenceCategory(uuid)
            .then(res => {
                setCategory(res.user_info[0].preference_category)
            })
    }

    //pass uuid 
    const callApiGetPreferenceCategory = async (uuid) => {
        const url = '/api/preferenceCategory';
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                uuid: uuid,
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
                if (res.status === "error") {
                    setErrorMessage(res.message)
                    setSnack(true)
                } else {
                    setTopHeadlines(res.articles)
                }
            })
            .catch((error) => {
                setErrorMessage(error.message)
            })
    }

    const callApiGetTopHeadlines = async () => {
        const url = 'api/news/topHeadlines'

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                category: category,
                pageSize: 15,
                sortBy: sortBy
            })
        });
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    return (
        <div>
            <NavBar
                backgroundColor="secondary"
            ></NavBar>
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
                <Typography variant="h5" color="inherit" noWrap className={classes.subHeading} >
                    Preference category is <b>{category}</b>
                </Typography>
                <Typography style={{ padding: 20 }}></Typography>
                <Grid item
                    justifyContent="center">
                    <Box ml={7} p={2}>
                        <FormControl style={{ "width": 200 }} >
                            <InputLabel style={{ color: "#fff" }}>Sort By</InputLabel>
                            <Select
                                value={sortBy}
                                label="Sort By"
                                onChange={(e) => setSortBy(e.target.value)}
                                className={classes.select}
                                style={{ color: "#fff" }}
                                required
                                data-testid='Sort By'
                                defaultValue={"publishedAt"}
                            >
                                <MenuItem value={"relevancy"}>Relevancy</MenuItem>
                                <MenuItem value={"popularity"}>Popularity</MenuItem>
                                <MenuItem value={"publishedAt"}>Published At</MenuItem>

                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Typography style={{ padding: 20 }}></Typography>


                {
                    topHeadlines?.length > 0 ?

                        <Grid container spacing={{ xs: 10, md: 3 }} columns={{ xs: 5, sm: 8, md: 12 }} alignItems="center" style={{ marginLeft: 50 }}>

                            {topHeadlines.map((topHeadline, index) => {
                                return (
                                    <Grid xs={4} sm={4} md={4} key={index}>
                                        <ArticleCard topHeadline={topHeadline} data-testid='article-card' />
                                        <Typography style={{ padding: 20 }}></Typography>
                                    </Grid>
                                )
                            })}
                        </Grid>
                        : <></>
                }

            </Grid>
            {
                errorMessage !== "" ? <Snackbar open={snack} onClose={handleClose} autoHideDuration={100000}>

                    <Alert severity="error">{errorMessage}</Alert>

                </Snackbar> : <></>
            }

        </div >
    )
}

// const serverURL = "http://ec2-18-216-101-119.us-east-2.compute.amazonaws.com:3054"; //enable for deployed mode; Change PORT to the port number given to you;


const Homes = () => {

    return (
        <MuiThemeProvider theme={theme} >
            <div>
                <CssBaseline />
                <Paper>
                    <Home />
                </Paper>
            </div>
        </MuiThemeProvider >
    );
};

export default Homes;

