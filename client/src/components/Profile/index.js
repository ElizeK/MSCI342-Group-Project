import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import "@fontsource/oswald";
import "@fontsource/inter";
import { Grid, Toolbar, Button, Paper, FormControl, InputLabel, Select, MenuItem, TextField, Box, Card } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import NavBar from '../NavBar';
<<<<<<< Updated upstream
import { Password } from '@mui/icons-material';
=======
import Alert from '@mui/material/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CategoryIcon from '@material-ui/icons/Category';
import EmailIcon from '@material-ui/icons/Email';





>>>>>>> Stashed changes

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


const ArticleCard = ({ article }) => {
    const classes = useStyles();
    return (

        <Card variant="outlined" style={{ "width": 400, "height": 700 }} className={classes.ArticleCard} color="backgroundColor">
            <div>
                {/* <img src="./placeholderImage.png" width="400"></img> */}
                <img src={article.urlToImage} width="400" alt='Image not available'></img>


            </div>
            <CardHeader className={classes.header}
                title={article.title}
                subheader={article.author + " ● " + article.publishedAt}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" className={classes.header}>
                    {article.description}
                </Typography>
            </CardContent>

            <ul>

            </ul>

            <div
                style={{ justifyContent: 'flex-start', marginLeft: 10 }}>
                <Button
                    // color="secondary"
                    variant="outlined"
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    color="inherit"
                    style={{ cursor: "pointer", float: 'left' }}
                >
                    Learn More
                </Button>
            </div>

        </Card>


    )
}



//select topic preference from drop down options 
const PreferenceSelection = ({ preference, setPreference }) => {
    const classes = useStyles();
    console.log("chose a topic successfuly")

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
                    <MenuItem value={'Entertainement'}>Entertainement</MenuItem>
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
    console.log("chose a language successfuly")

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

                    <MenuItem value={""}></MenuItem>
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



const Profile = () => {
    const classes = useStyles();
    const [userEmail, setUserEmail] = React.useState("");
    // const [password, setPassword] = React.useState("");
    const [preference, setPreference] = React.useState("");
    const [language, setLanguage] = React.useState("");

    const [userData, setUserData] = React.useState([]);
    // const [userDataObj, setUserDataObj] = React.useState({});



    const handlePreference = (event) => {
        setPreference(event.target.value);

    };

    const handleLanguage = (event) => {
        setLanguage(event.target.value);

    };

    const handleUpdateButton = (event) => {
        handlePreference();
        handleLanguage();

        console.log("handleUpdateButton ran")


        //add confirmation popup
    }


    React.useEffect(() => {
        console.log("user info api runs")
        getUserInfo();
    }, [])

    const getUserInfo = () => {
        callApiGetUserInfo()
            .then(res => {
                // callApiGetArticles(res.user_info) 
                // setCategory(res.user_info[0].preference_category)


                // setUserEmail(res.user_info[5].user_email)
                // setPreference(res.user_info[5].preference_category)
                // setLanguage(res.user_info[5].user_language)
                // setUserData(res.user_info)


                setUserData(res.user_info[0])
                setPreference(res.user_info[0].preference_category)
                setLanguage(res.user_info[0].user_language)


                // setUserEmail(userData.email_address)
                // setPreference(userData.category_preference)
                // setLanguage(userData.user_language)


            })
    }




    const callApiGetUserInfo = async () => {

        const url = '/api/GetUserInfo';
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userEmail: userEmail,
                preference: preference,
                language: language
            })
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);


        console.log("callApiGetUserInfo ran")
        console.log(body)
        return body;




    }

    const updateUserInfo = () => {
        callApiUpdateUserInfo()
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

                preference: preference,
                language: language,
            })

        });

        console.log("updated information succesffully")

        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

    }

    return (
        <div>
            <NavBar
                backgroundColor="secondary"
            ></NavBar>



            <Grid
                container
                direction="row"
                alignItems="center"
                style={{ minWidth: '250vh' }}
                className={classes.backgroundColor}
            >


                <Grid item xs={5}>

                    <Box ml={7} p={2}>
                        <Typography variant="h3" noWrap className={classes.heading}>
                            My Profile
                        </Typography>
                        <Typography className={classes.subHeading}></Typography>

                    </Box>


                    <Box ml={7} p={2}>
                        <Typography variant="h5" noWrap className={classes.subHeading}>
                            My Settings
                        </Typography>
                    </Box>

<<<<<<< Updated upstream
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                        <Box ml={7} p={2}>
                            <Typography variant="h5" noWrap className={classes.subHeading}>
                                Your email is: {userData.email_address}
                            </Typography>
                        </Box>
                        <Box ml={10} p={2}>
                            <PreferenceSelection preference={preference} setPreference={handlePreference} currentPreference={userData.preference_category} />
                        </Box>
                        <Box ml={7} p={2}>
                            <LanguageSelection language={language} setLanguage={handleLanguage} />
                        </Box>
                        <Box ml={7} p={2}>
                            <Button id="" variant="contained" onClick={() => updateUserInfo()} style={{ backgroundColor: "#B18CFF", width: '200px' }}>Update My Info</Button>
                        </Box>
                    </div>
=======
                    {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}> */}
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

                    {/* </div> */}
>>>>>>> Stashed changes

                </Grid>
            </Grid>
        </div >

    )
}

// class Profiles extends Component {


//     render() {
//         const { classes } = this.props;

//         return (
//             <MuiThemeProvider theme={theme}>
//                 <div >
//                     {/* <CssBaseline /> */}
//                     {/* <Paper */}
//                     {/* className={classes.paper}
//                     > */}
//                     <Profile />
//                     {/* </Paper> */}

//                 </div>

//             </MuiThemeProvider>
//         );
//     }
// }

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
