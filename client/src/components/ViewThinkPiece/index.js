import React, { useState } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import {Grid, FormControl, InputLabel, Select, TextField, MenuItem, Box} from '@mui/material';
import { Typography } from "@material-ui/core";
import NavBar from '../NavBar';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import LinkIcon from '@mui/icons-material/Link';

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

    const Categories = {
        BUSINESS: "Business",
        ENTERTAINMENT: "Entertainment",
        GENERAL: "General",
        HEALTH: "Health",
        SCIENCE: "Science",
        SPORTS: "Sports",
        TECHNOLOGY: "Technology"
    }
    
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(thinkpiece.title)
    const [summary, setSummary] = useState(thinkpiece.summary)
    const [topic, setTopic] = useState(thinkpiece.topic)
    const [url, setUrl] = useState(thinkpiece.url)
    const [content, setContent] = useState(thinkpiece.content)
    const [uuid, setUuid] = useState("");

    const updateThinkPiece = () => {
        callApiUpdateThinkPiece()       
        setEdit(false)
    }

    const callApiUpdateThinkPiece = async () => {
        const url = "/api/updateThinkPiece";
        const response = await fetch (url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json,"
            },
            body: JSON.stringify({
                uuid: uuid,
                title: title,
                summary: summary,
                topic: topic,
                content: content,
                url: url,      
            })
        })
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
    }

    return (
        <div>
            {
                        (edit) ?
                        <Grid 
                           container
                           direction = "column"
                           item xs = {10}
                        >
                            <Grid item style={{ marginTop: 50 }} xs={5}>
                                <Box ml={7} p={2}>
                                    <TextField 
                                       id="outlined-basic" 
                                       label="Title" 
                                       variant="outlined"
                                       value={title}
                                       className={classes.textField} 
                                       onChange={(e) => setTitle(e.target.value)}
                                    />   
                                </Box>
               
                                <Box ml={7} p={2}>
                                    <TextField 
                                       id="outlined-basic" 
                                       label="Summary" 
                                       variant="outlined"
                                       value={summary}
                                       className={classes.textField} 
                                       onChange={(e) => setSummary(e.target.value)}
                                    /> 
                                </Box>
               
                                <Box ml={7} p={2}>
                                    <FormControl fullWidth>
                                        <InputLabel style={{ color: "#fff" }}>Topic</InputLabel>
                                        <Select
                                               value={topic}
                                               onChange={(e) => setTopic(e.target.value)}
                                               label="Topic"
                                               variant="outlined"
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
                                       id="outlined-basic" 
                                       label="Content" 
                                       variant="outlined"
                                       multiline
                                       rows={10}
                                       value={content}
                                       onChange={(e) => setContent(e.target.value)}
                                       className={classes.textField} 
                                    /> 
                                </Box>
               
               
                                <Box ml={7} p={2}>
                                <Typography>
                                    <TextField 
                                       id="outlined-basic" 
                                       label="Url" 
                                       variant="outlined"
                                       value={url}
                                       onChange={(e) => setUrl(e.target.value)}
                                       className={classes.textField} 
                                    /> 
                                </Typography>
                                </Box>
               
                            <Box m2={2} p={2}>
                                <Button id="save-edits" variant="contained" onClick={updateThinkPiece} style={{ backgroundColor: "#B18CFF" }}> Save Edits </Button>
                            </Box>
                            </Grid>
                         
                        </Grid>
                        :
                        <Card variant="outlined" style={{ "width": 400, "height": 400 }} className={classes.ArticleCard} color="backgroundColor">
                            <CardHeader
                               className={classes.header}
                               title={title}
                               subheader={topic}
                            />
               
                            <CardContent>
                                <Typography variant="body2" color="text.secondary" className={classes.header}>
                                   {summary}
                                   {content}
                                </Typography>
                            </CardContent>
               
                            <div
                               style={{ justifyContent: 'flex-start', marginLeft: 10 }}>
                                <IconButton href={url} target="_blank" rel="noreferrer">
                                   <LinkIcon />
                                   {/* <Link /> */}
                                </IconButton>
               
                            </div>
               
                            <Button onClick={() => setEdit(true)}>
                               Edit think piece
                            </Button>
               
                        </Card>
            }
        </div>
    )
}

const EditThinkPiece = ( {thinkpiece} ) => {
    const classes = useStyles();

    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(thinkpiece.title)
    const [summary, setSummary] = useState(thinkpiece.summary)
    const [topic, setTopic] = useState(thinkpiece.topic)
    const [url, setUrl] = useState(thinkpiece.url)
    const [content, setContent] = useState(thinkpiece.content)
    const [uuid, setUuid] = useState("");

    const updateThinkPiece = () => {
        callApiUpdateThinkPiece()       
    }

    const callApiUpdateThinkPiece = async () => {
        const url = "/api/updateThinkPiece";
        const response = await fetch (url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json,"
            },
            body: JSON.stringify({
                uuid: uuid,
                title: title,
                summary: summary,
                topic: topic,
                content: content,
                url: url,      
            })
        })
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
    }

    return (
        <Grid 
            container
            direction = "column"
            item xs = {4}
        >
            <Grid item style={{ marginTop: 50 }} xs={5}>
                <Box ml={7} p={2}>
                <Typography variant = "h5" className={classes.subHeading}>
                    Title: 
                    <TextField 
                        id="outlined-basic" 
                        label="Outlined" 
                        variant="outlined"
                        value={title}
                        className={classes.textField} 
                        onChange={(e) => setTitle(e.target.value)}
                    />   
                </Typography>
                </Box>

                <Box ml={7} p={2}>
                <Typography>
                    Summary: 
                    <TextField 
                        id="outlined-basic" 
                        label="Outlined" 
                        variant="outlined"
                        value={summary}
                        className={classes.textField} 
                        onChange={(e) => setSummary(e.target.value)}
                    /> 
                </Typography>
                </Box>

                <Box ml={7} p={2}>
                <Typography>
                    Topic: 
                    <FormControl>
                        <Select
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                label="Topic"
                                className={classes.select}
                                style={{ color: "#fff" }}
                                required
                                data-testid='Topic'

                        > 
                        </Select>
                    </FormControl>
                </Typography>
                </Box>

                <Box ml={7} p={2}>
                <Typography>
                    Content: 
                    <TextField 
                        id="outlined-basic" 
                        label="Outlined" 
                        variant="outlined"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className={classes.textField} 
                    /> 
                </Typography>
                </Box>


                <Box ml={7} p={2}>
                <Typography>
                    Url: 
                    <TextField 
                        id="outlined-basic" 
                        label="Outlined" 
                        variant="outlined"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className={classes.textField} 
                    /> 
                </Typography>
                </Box>

            <Box m2={2} p={2}>
                <Button 
                id="save-edits" 
                variant="contained" 
                onClick={updateThinkPiece} 
                style={{ backgroundColor: "#B18CFF" }} 
                classes={classes.buttonGroup}
                
                > Save Edits 
                </Button>
            </Box>
            </Grid>
          
        </Grid>
        
        
    )

}

const ViewThinkPiece = () => {
    const classes = useStyles();

    const [userId, setUserId] = React.useState(1);
    // const [title, setTitle] = React.useState('');
    // const [content, setContent] = React.useState('');
    // const [summary, setSummary] = React.useState('');
    // const [topic, setTopic] = React.useState('');
    // const [url, setUrl] = React.useState('');
    const [view, setView] = React.useState([]);
    const [uuid, setUuid] = useState("");

    // console.log("uid of users is" + uuid);

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


    React.useEffect(() => {
        getThinkPiece();
    }, [uuid]);

    const getThinkPiece = () => {
        callApiViewThinkPieces()
            .then(res => {
                // console.log(res);
                setView(res.think_pieces);
            })
    }
    
    // const handleEdit = () => {
    //     setEdit(true);
    // }

    

    const callApiViewThinkPieces = async () => {
        const url = '/api/viewThinkPiece';
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                uuid: uuid,
            })
            // body: JSON.stringify({
            // userID: userId,
            // title: title,
            // content: content,
            // summary: symmary,
            // topic: topic,
            // url: url     

        });
        const body = await response.json();
        // console.log(body);
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    return (
        <div>
            <NavBar
                backgroundColor="secondary"
            ></NavBar>
            {/* {view.map(thinkpiece => (
                <div key = {thinkpiece.id}>
                    <li>
                        {thinkpiece.title}
                        {thinkpiece.content}
                        {thinkpiece.summary}
                        {thinkpiece.topic}
                        {thinkpiece.url}
                    </li>
                </div>
            ))} */}
            <Grid
                container
                spacing={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{ minHeight: '100vh' }}
                className={classes.backgroundColor}>

                <Typography className={classes.heading} >
                    View Your Think Pieces!
                </Typography>

              <Box  m2={2} p={2}></Box>

                    <Grid container spacing={{ xs: 10, md: 3 }} columns={{ xs: 5, sm: 8, md: 12 }} alignItems="center" style={{ marginLeft: 50 }}>

                        {view.map((thinkpiece, index) => {
                                return (
                                    <Grid xs={4} sm={4} md={4} key={index}>
                                        <ThinkPieceCard thinkpiece={thinkpiece}></ThinkPieceCard>
                                        <Typography style={{ padding: 20 }}></Typography>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    {/* : <></> */}
        
            </Grid>
        </div >
    )
}

const ViewThinkPieces = () => {

    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <CssBaseline />
                <Paper>
                    <ViewThinkPiece />
                </Paper>
            </div>
        </MuiThemeProvider>
    );

};

export default ViewThinkPieces;