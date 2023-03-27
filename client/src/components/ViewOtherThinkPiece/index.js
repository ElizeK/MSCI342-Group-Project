import React, { useState } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { Grid, Button, Paper, FormControl, InputLabel, Select, MenuItem, TextField, Box, Card, Alert, Snackbar } from '@mui/material';
import { Typography } from "@material-ui/core";
import NavBar from '../NavBar';

import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@material-ui/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

import { getAuth, onAuthStateChanged } from "firebase/auth";


import "@fontsource/oswald";
import "@fontsource/inter";

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
    header: {
        fontFamily: 'Oswald',
        fontStyle: "normal",
        fontWeight: 200,
        fontSize: 20,
        color: '#712EFF'
    },
}));

const ThinkPieceCard = ({ thinkpiece }) => {
    const classes = useStyles();

    return (
        <Card variant="outlined" style={{ "width": 400, "height": 400 }} className={classes.ArticleCard} color="backgroundColor">
            <CardHeader
                className={classes.header}
                title={thinkpiece.title}
                subheader={thinkpiece.topic}
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary" className={classes.header}>
                    {thinkpiece.summary}
                    {thinkpiece.content}
                </Typography>
            </CardContent>

            <div
                style={{ justifyContent: 'flex-start', marginLeft: 10 }}>
                <IconButton href={thinkpiece.url}>
                    <Link />
                </IconButton>

            </div>

        </Card>
    )
}

const ViewOtherThinkPiece = () => {
    const classes = useStyles();
    const [publicThinkpieces, setPublicThinkpieces] = React.useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    const [uuid, setUuid] = useState("");

    onAuthStateChanged(getAuth(), (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            // check if we already have public thinkpieces for this user
            if (user.uid !== uuid) {
                console.log("UUID is: " + user.uid)
                getOtherThinkPiece(user.uid)
                setUuid(user.uid)
            }
            // ...
        } else {
            // User is signed out
            // ...
        }
    });

    React.useEffect(() => {
        getOtherThinkPiece(uuid);
    }, [category, uuid])

    // const getThinkPiece = () => {
    //     callApiSearchThinkPiece()
    //         .then(res => {
    //             setCategory(res.think_pieces);
    //         })
    // }

    // const callApiSearchThinkPiece = async () => {
    //     const url = '/api/searchThinkPiece'
    //     const response = await fetch(url, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "applciation/json",
    //         },
    //         body: JSON.stringify({
    //             category: category,
    //         })

    //     });

    // }


    const getOtherThinkPiece = (uuid) => {
        callApiViewOtherThinkPieces(uuid)
            .then(res => {
                console.log("public thinkpieces: " + JSON.stringify(res.think_pieces))
                setPublicThinkpieces(res.think_pieces);
            })
    }

    const callApiViewOtherThinkPieces = async (uuid) => {
        const url = '/api/viewOtherThinkPieces';
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                uuid: uuid,
                category: category,
            })
        });
        const body = await response.json();
        console.log(body);
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
                    View Public Think Pieces!
                </Typography>

                <Box ml={7} p={2}>
                    <FormControl style={{ "width": 200 }} >
                        <InputLabel style={{ color: "#fff" }}>Category</InputLabel>
                        <Select
                            value={category}
                            label="Search Thinkpiece"
                            onChange={(e) => setCategory(e.target.value)}
                            className={classes.select}
                            style={{ color: "#fff" }}
                            required
                            data-testid='Category'
                            defaultValue={""}
                        >
                            <MenuItem value={""}>None</MenuItem>
                            <MenuItem value={"business"}>Business</MenuItem>
                            <MenuItem value={"entertainment"}>Entertainment</MenuItem>
                            <MenuItem value={"general"}>General</MenuItem>
                            <MenuItem value={"health"}>Health</MenuItem>
                            <MenuItem value={"science"}>Science</MenuItem>
                            <MenuItem value={"sports"}>Sports</MenuItem>
                            <MenuItem value={"technology"}>Technology</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box ml={7} p={2}>
                    <Typography className={classes.subHeading}>{publicThinkpieces?.length} Results</Typography>
                </Box>
                <Box mt={2} ></Box>
                <Grid container spacing={{ xs: 10, md: 3 }} columns={{ xs: 5, sm: 8, md: 12 }} alignItems="center" style={{ marginLeft: 50 }}>

                    {
                        publicThinkpieces.length > 0 ?
                            publicThinkpieces.map((thinkpiece, index) => {
                                return (
                                    <Grid xs={4} sm={4} md={4} key={index}>
                                        <ThinkPieceCard thinkpiece={thinkpiece}></ThinkPieceCard>
                                        <Typography style={{ padding: 20 }}></Typography>
                                    </Grid>
                                )
                            })
                            : <></>
                    }
                </Grid>
            </Grid>
        </div >
    )
}

const ViewOtherThinkPieces = () => {

    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <CssBaseline />
                <Paper>
                    <ViewOtherThinkPiece />
                </Paper>
            </div>
        </MuiThemeProvider>
    );

};

export default ViewOtherThinkPieces;