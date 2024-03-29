import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import "@fontsource/oswald";
import "@fontsource/inter";
import { Grid, Button, Paper, FormControl, InputLabel, Select, MenuItem, TextField, Box, Card, Chip } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import NavBar from '../NavBar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CategoryIcon from '@material-ui/icons/Category';
import EmailIcon from '@material-ui/icons/Email';



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
            main: "#712EFF",
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

    ArticleCard: {
        fontFamily: 'Oswald',
        fontStyle: "normal",
        fontWeight: 200,
        fontSize: 20,
        backgroundColor: "#1b1b1b",
        // overflow: "hidden",
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
    subHeader: {
        fontFamily: 'Oswald',
        fontStyle: "normal",
        fontWeight: 200,
        fontSize: 20,
        color: '#712EFF'
    },

    heading: {
        color: "white",
        fontFamily: "Oswald",
        fontSize: 55
    },

    miniHeading: {
        color: "white",
        fontFamily: "Oswald",
        fontSize: 35
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


//select topic preference from drop down options 
const PreferenceSelection = ({ preference, setPreference }) => {
    const classes = useStyles();
    return (

        < Grid item >
            <FormControl style={{ minWidth: 223 }} >
                <InputLabel style={{ color: "#fff" }}>Preference</InputLabel>
                <Select
                    id="dd1"
                    value={preference}
                    label="Preference"
                    // defaultValue={currentPreference}
                    // onChange={(e) => setPreference(e.target.value)}                 
                    onChange={setPreference}

                    className={classes.select}
                    style={{ color: "#fff" }}
                    required
                >

                    <MenuItem value=""></MenuItem>
                    <MenuItem value={'Business'}>Business</MenuItem>
                    <MenuItem value={'Entertainment'}>Entertainment</MenuItem>
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
    // console.log("chose a language successfuly")

    return (

        <Box>


            <FormControl style={{ minWidth: 223 }}>
                <InputLabel style={{ color: "#fff" }}>Language</InputLabel>
                <Select
                    id="dd2"
                    value={language}
                    defaultValue="Default Email"

                    label="Language"
                    onChange={setLanguage}
                    className={classes.select}
                    style={{ color: "#fff" }}
                    required
                >

                    <MenuItem value=""></MenuItem>
                    <MenuItem value={"ar"}>Arabic</MenuItem>
                    <MenuItem value={"de"}>German</MenuItem>
                    <MenuItem value={"en"}>English</MenuItem>
                    <MenuItem value={"es"}>Spanish</MenuItem>
                    <MenuItem value={"fr"}>French</MenuItem>
                    <MenuItem value={"he"}>Hebrew</MenuItem>
                    <MenuItem value={"it"}>Italian</MenuItem>
                    <MenuItem value={"nl"}>Dutch</MenuItem>
                    <MenuItem value={"no"}>Norwegian</MenuItem>
                    <MenuItem value={"pt"}>Portuguese</MenuItem>
                    <MenuItem value={"ru"}>Russian</MenuItem>
                    <MenuItem value={'sv'}>Swedish</MenuItem>
                    <MenuItem value={"zh"}>Chinese</MenuItem>


                </Select>

            </FormControl>

        </Box>
    )

}

const FavouriteArticles = ({ uuid }) => {
    const classes = useStyles();
    const [favArticles, setFavArticles] = useState([]);

    React.useEffect(() => {
        if (uuid !== "") getFavoriteArticles();
    }, [uuid]);

    const getFavoriteArticles = () => {
        callApiFavoriteArticles()
            .then(res => {
                // console.log(res);
                setFavArticles(res.favourited_articles);
                // console.log(favArticles);
            })
    }


    const callApiFavoriteArticles = async () => {
        const url = '/api/viewFavoriteArticles';
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
        // console.log(body);
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    return (
        <div>
            <Grid>
                {favArticles.length > 0 ?
                    <Grid container spacing={{ xs: 10, md: 10 }} columns={{ xs: 12, sm: 12, md: 12 }} alignItems="center" style={{ marginLeft: 50 }}>
                        {favArticles.map((favorite, index) => {
                            return (
                                <Grid xs={3} sm={3} md={3} key={index}>
                                    <FavoriteArticleCard favorite={favorite}></FavoriteArticleCard>
                                    <Box ml={7} p={2}></Box>
                                    <Typography style={{ padding: 20 }}></Typography>
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


const FavoriteArticleCard = ({ favorite }) => {
    const classes = useStyles();

    console.log(JSON.stringify(favorite))

    const publishedAt = new Date(favorite.date_of_publication).toLocaleDateString("en-US")

    return (
        <Card variant="outlined" style={{ "width": 400, "height": 700 }} className={classes.articleCard} color="backgroundColor">
            <div>

                {/* <img src="./placeholderImage.png" width="400"></img> */}
                <img src={favorite.image_url || "./placeholderImage.png"} width="400" alt={"No Image Found"}></img>

            </div>
            <CardHeader className={classes.header}
                title={favorite.title}
                subheader={favorite.author + " ● " + publishedAt}
            />
            <CardContent>
                <Typography variant="body2" className={classes.header}>
                    {favorite.summary}
                </Typography>
            </CardContent>


            <div
                style={{ justifyContent: 'flex-start', marginLeft: 10 }}>
                <Button
                    // color="secondary"
                    variant="outlined"
                    href={favorite.url}
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
                {/* <Button
                variant="outlined"
                target="_blank"
                color="inherit"
                startIcon={<FavoriteIcon />}
                style={{ marginLeft: '110px' }}
                onClick={addFavourite}>
                {favourite ? 'Favourited' : 'Favourite'}
            </Button> */}
            </div>

        </Card>
    )
}


const Profile = () => {
    const classes = useStyles();
    const [preference, setPreference] = useState("");
    const [language, setLanguage] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userData, setUserData] = useState([]);
    const [showSuccess, setShowSuccess] = React.useState(false);

    const [uuid, setUuid] = React.useState("");
    const fetch = require('node-fetch');

    // const [userDataObj, setUserDataObj] = React.useState({});

    // console.log("uid of users is" + uuid);

    onAuthStateChanged(getAuth(), (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // console.log(JSON.stringify(user.uid))
            setUuid(user.uid)
            console.log(uuid)
            // ...
        } else {
            // User is signed out
            // ...
        }
    });

    //on update of uuid call getCategory
    React.useEffect(() => {
        getUserInfo();
    }, [uuid]);
    const handlePreference = (event) => {
        setPreference(event.target.value);

    };

    const handleLanguage = (event) => {
        setLanguage(event.target.value);

    };


    const getUserInfo = () => {
        callApiGetUserInfo()
            .then(res => {

                setPreference(res.user_info[0].preference_category)
                setLanguage(res.user_info[0].user_language)
                setUserEmail(res.user_info[0].email_address)
                // setUsername(res,user_info[0].username)




            })
    }




    const callApiGetUserInfo = async () => {

        const url = '/api/getUserInfo';
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


        // console.log("callApiGetUserInfo ran")
        // console.log(body)
        return body;




    }

    const updateUserInfo = () => {
        callApiUpdateUserInfo()
        setShowSuccess(true);
        //add confirmation  
    }

    const callApiUpdateUserInfo = async () => {
        const url = "/api/updateUserInfo";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                uuid: uuid,
                preference: preference,
                language: language,
            })

        });
        // console.log(preference)
        // console.log(language)

        // console.log("updated information succesffully")

        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

    }

    return (
        <div >
            <NavBar
                backgroundColor="secondary"
            ></NavBar>



            <Grid

                direction="row"
                alignItems="center"
                style={{ minWidth: '250vh' }}
                className={classes.backgroundColor}
            >


                <Grid item  xs={5}>

                    {/* <Box ml={7} p={2}>
                        <AccountCircleIcon sx={{ fontSize: 200 }} 
                            color='primary'
                        ></AccountCircleIcon>
                    </Box> */}

                    <Box ml={7} p={2}>
                        <Typography variant="h3" noWrap className={classes.heading}>
                            My Profile
                        </Typography>
                        <Typography className={classes.subHeading}></Typography>

                    </Box>


                    <Box ml={7} p={2}>


                        <Typography variant="h5" noWrap className={classes.subHeading}>
                            Welcome To Your Settings
                        </Typography>
                    </Box>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Box ml={7} p={2}>
                                    <Typography variant="h4" className={classes.subHeading}>
                                        Profile Information
                                    </Typography>
                                    <Typography style={{ margin: "20px 0" }}></Typography>
                                    <Typography variant="h5" className={classes.subHeading}>
                                        <AccountCircleIcon style={{ marginRight: 10 }} />
                                        User Name:
                                        <Chip color="primary" label={userEmail} />
                                    </Typography>
                                    <Typography style={{ margin: 20 }}></Typography>
                                    <Typography variant="h5" className={classes.subHeading}>
                                        <EmailIcon style={{ marginRight: 10 }} />
                                        Email:
                                        <Chip color="primary" label={userEmail} />
                                    </Typography>
                                    <Typography style={{ margin: 20 }}></Typography>
                                    <Typography variant="h5" className={classes.subHeading}>
                                        <CategoryIcon style={{ marginRight: 10 }} />
                                        Preferred Category:
                                        <Chip color="secondary" label={preference} />
                                    </Typography>
                                    <Typography style={{ margin: 20 }}></Typography>
                                    <Typography variant="h5" className={classes.subHeading}>
                                        <LanguageIcon style={{ marginRight: 10 }} />
                                        Preferred language:
                                        <Chip color="secondary" label={language} />
                                    </Typography>
                                </Box>
                            </Grid>


                            <Grid item xs={4}>
                                <Box ml={2} p={1}>
                                    <PreferenceSelection preference={preference} setPreference={handlePreference} currentPreference={userData.preference_category} />
                                </Box>
                                <Box ml={2} p={1}>
                                    <LanguageSelection language={language} setLanguage={handleLanguage} />
                                </Box>
                                <Box ml={2} p={2}>
                                    <Button id="update-preferences" variant="contained" onClick={updateUserInfo} style={{ backgroundColor: "#B18CFF", height: '55px', width: '200px' }}>Update My Info</Button>
                                    {showSuccess && (
                                        <Alert severity="success" style={{ width: '300px' }}>
                                            <AlertTitle>Success!</AlertTitle>
                                            <strong>Your Settings have been updated </strong>
                                        </Alert>
                                    )}
                                </Box>
                            </Grid>
                        </Grid>



                    </div>

                    <Box ml={7} p={2}>
                        <Typography variant="h3" noWrap className={classes.miniHeading}>
                            Favorited Articles
                        </Typography>
                        <Typography className={classes.subHeading}></Typography>

                    </Box>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }} data-testid="profile-component">
                        <Box ml={7} p={2}>
                            <Typography variant="h5" noWrap className={classes.subHeading}>
                                View your favorited articles here!
                            </Typography>
                        </Box>
                    </div>

                    <Box ml={7} p={7}></Box>
                    <Box p={2}>
                        <FavouriteArticles uuid={uuid}></FavouriteArticles>
                    </Box>


                </Grid>
            </Grid>
        </div>

    )
}

const Profiles = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <CssBaseline />
                <Paper>
                    <Profile />
                </Paper>
            </div>
        </MuiThemeProvider>
    );

};

// Profiles.propTypes = {
//     classes: PropTypes.object.isRequired
// };


export default Profiles;
