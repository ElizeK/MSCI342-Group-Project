// import React, { Component, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import CssBaseline from "@material-ui/core/CssBaseline";
// import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import history from "../Navigation/history";
// import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@mui/icons-material/Directions';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import { green } from '@material-ui/core/colors';
// import Paper from "@material-ui/core/Paper";
// import FormHelperText from '@material-ui/core/FormHelperText';
// import TextField from '@material-ui/core/TextField';
// import { deepOrange, deepPurple } from '@mui/material/colors';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import ListItemText from '@mui/material/ListItemText';
// import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';

// import { makeStyles } from '@material-ui/core/styles';
// import "@fontsource/oswald";
// import "@fontsource/inter";
// import { LastPageOutlined } from '@material-ui/icons';

// // This theme sets the background color for when you scroll behind the screen
// const theme = createTheme({
//     palette: {
//         type: 'dark',
//         background: {
//             default: "#1b1b1b"
//         },
//         primary: {
//             main: "#FFFFFF",
//         },
//         secondary: {
//             main: "#1b1b1b",
//         },
//     },
// });

// const opacityValue = 1;

// const useStyles = makeStyles((theme) => ({
//     body: {
//         backgroundColor: "#1b1b1b",
//         overflow: "hidden",
//         color: "#1b1b1b"
//     },
//     backgroundColor: {
//         backgroundColor: "#1b1b1b"
//     },
//     paper: {
//         overflow: "hidden",
//     },
//     message: {
//         opacity: opacityValue,
//         maxWidth: 250,
//         paddingBottom: theme.spacing(2),
//     },
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 200,
//     },
//     selectEmpty: {
//         marginTop: theme.spacing(2),
//     },
//     bullet: {
//         display: 'inline-block',
//         margin: '0 2px',
//         transform: 'scale(0.8)',
//     },
//     textField: {
//         "& .MuiInputBase-root": {
//             color: 'white'
//         },
//         "& .MuiOutlinedInput-root": {
//             "& > fieldset": { borderColor: "white" },
//         },
//         "& .MuiInputLabel-root": { color: 'white' },
//         "& .MuiOutlinedInputLabel-root": { color: 'white' },
//         "& .MuiOutlinedInput-root:hover": {
//             "& > fieldset": {
//                 borderColor: "white"
//             }
//         },
//         "& .MuiOutlinedInput-root.Mui-focused": {
//             "& > fieldset": {
//                 borderColor: "white"
//             }
//         }
//     },
//     select: {
//         '&:before': {
//             borderColor: 'white',
//         },
//         '&:after': {
//             borderColor: 'white',
//         },
//         '&:not(.Mui-disabled):hover::before': {
//             borderColor: 'white',
//         },
//         '& .MuiOutlinedInput-notchedOutline': {
//             border: "1px solid white !important"
//         },
//         '& .MuiOutlinedInput-notchedOutline.Mui-focused': {
//             borderColor: "white !important"
//         },
//         '& .MuiSvgIcon-root': {
//             fill: "white !important",
//         }
//     },
//     heading: {
//         color: "white",
//         fontFamily: "Oswald",
//         fontSize: 55
//     },
//     subHeading: {
//         color: "white",
//         fontFamily: "Inter",
//         fontSize: 22,
//         fontStyle: "normal",
//         fontWeight: 300

//     },
//     navbarItem: {
//         fontFamily: 'Inter',
//         fontStyle: "normal",
//         fontWeight: 400,
//         fontSize: 16,
//         cursor: "pointer"
//     },
//     inputLabelRoot: {
//         color: "white",
//     }
// }));

// // let sql = `SELECT * FROM s47sures.movies_genres, s47sures.movies WHERE movies.id = movies_genres.movie_id AND genre = "${selectedGenre}"`;
// // let newsApi = process.env.NEWS_API_KEY;

// // let newsUrl = 'https://newsapi.org/v2/top-headlines?q=Canada&apiKey= "${newsApi}"';
// // "${newsApi}"';

// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('24f5ebf9cc7b40cabd16b6e0c5633d1a');
// // // To query /v2/top-headlines
// // // All options passed to topHeadlines are optional, but you need to include at least one of them
// // newsapi.v2.topHeadlines({
// //     sources: 'bbc-news,the-verge',
// //     q: 'bitcoin',
// //     category: 'business',
// //     language: 'en',
// //     country: 'us'
// // }).then(response => {
// //     console.log(response);
// //     /*
// //       {
// //         status: "ok",
// //         articles: [...]
// //       }
// //     */
// // });
// // // To query /v2/everything
// // // You must include at least one q, source, or domain
// // newsapi.v2.everything({
// //     q: 'bitcoin',
// //     sources: 'bbc-news,the-verge',
// //     domains: 'bbc.co.uk, techcrunch.com',
// //     from: '2017-12-01',
// //     to: '2017-12-12',
// //     language: 'en',
// //     sortBy: 'relevancy',
// //     page: 2
// // }).then(response => {
// //     console.log(response);
// //     /*
// //       {
// //         status: "ok",
// //         articles: [...]
// //       }
// //     */
// // });
// // // To query sources
// // // All options are optional
// // newsapi.v2.sources({
// //     category: 'technology',
// //     language: 'en',
// //     country: 'us'
// // }).then(response => {
// //     console.log(response);
// //     /*
// //       {
// //         status: "ok",
// //         sources: [...]
// //       }
// //     */
// // });

// const SearchBar = ({ keyword, setKeyWord }) => {
//     return (
//         <Grid item>
//             <TextField
//                 id="outlined-basic"
//                 label="Search"
//                 variant="outlined"
//                 value={keyword}
//                 onChange={setKeyWord}
//                 backgroundColor="secondary"
//             />
//             <FormHelperText>What are you looking for?</FormHelperText>
//         </Grid>
//     )
// }


// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//     PaperProps: {
//         style: {
//             maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//             width: 250,
//         },
//     },
// };
// const categories = [
//     'Business',
//     'Art',
//     'Science',
// ];

// const ButtonAppBar = () => {
//     return (
//         <Toolbar>
//             <Typography style={{ marginRight: 10 }}></Typography>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                 News App
//             </Typography>
//             <Typography style={{ marginRight: 50 }}></Typography>
//             <Button
//                 color="inherit"
//                 style={{ cursor: "pointer" }}
//                 onClick={() => history.push('/')}
//             >
//                 Home
//             </Button>
//             <Typography style={{ marginRight: 50 }}></Typography>
//             <Button
//                 color="inherit"
//                 style={{ cursor: "pointer" }}
//                 onClick={() => history.push('/Search')}
//             >
//                 Search
//             </Button>
//             <Typography style={{ marginRight: 50 }}></Typography>
//             <Button
//                 color="inherit"
//                 style={{ cursor: "pointer" }}
//                 onClick={() => history.push('/ThinkPiece')}
//             >
//                 ThinkPiece
//             </Button>
//             <Typography style={{ marginRight: 50 }}></Typography>
//             <Button
//                 color="inherit"
//                 style={{ cursor: "pointer" }}
//                 onClick={() => history.push('/Profile')}
//             >
//                 Profile
//             </Button>
//             <Typography style={{ marginRight: 50 }}></Typography>

//         </Toolbar>
//     );
// }
// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
// }));

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

// const MultipleSelectCheckmarks = () => {
//     const [category, setCategory] = React.useState([]);

//     const handleChange = (event) => {
//         const {
//             target: { value },
//         } = event;
//         setCategory(
//             // On autofill we get a stringified value.
//             typeof value === 'string' ? value.split(',') : value,
//         );
//     };

//     return (
//         <div>
//             <FormControl sx={{ m: 1, width: 300 }}>
//                 <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
//                 <Select
//                     labelId="demo-multiple-checkbox-label"
//                     id="demo-multiple-checkbox"
//                     multiple
//                     value={category}
//                     onChange={handleChange}
//                     input={<OutlinedInput label="Tag" />}
//                     renderValue={(selected) => selected.join(', ')}
//                     MenuProps={MenuProps}
//                 >
//                     {categories.map((category) => (
//                         <MenuItem key={category} value={category}>
//                             <Checkbox checked={category.indexOf(category) > -1} />
//                             <ListItemText primary={category} />
//                         </MenuItem>
//                     ))}
//                 </Select>
//             </FormControl>
//         </div>
//     );
// }
// const RecipeReviewCard = () => {
//     const [expanded, setExpanded] = React.useState(false);

//     const handleExpandClick = () => {
//         setExpanded(!expanded);
//     };

//     return (
//         <Card sx={{ maxWidth: 345 }} backgroundColor='secondary'>
//             <CardHeader
//                 avatar={
//                     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//                         R
//                     </Avatar>
//                 }
//                 // action={
//                 //     <IconButton aria-label="settings">
//                 //         <MoreVertIcon />
//                 //     </IconButton>
//                 // }
//                 title="Title of News Article"
//                 subheader="Date"
//             />
//             <CardMedia
//                 component="img"
//                 height="194"
//                 image="/client/public/news.jpeg"
//                 alt="News Image"
//             />
//             <CardContent>
//                 <Typography variant="body2" color="text.secondary">
//                     This is where the news description will go. It includes a sentence or 2.
//                 </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//                 <IconButton aria-label="add to favorites">
//                     <FavoriteIcon />
//                 </IconButton>
//                 <IconButton aria-label="share">
//                     <ShareIcon />
//                 </IconButton>
//                 <ExpandMore
//                     expand={expanded}
//                     onClick={handleExpandClick}
//                     aria-expanded={expanded}
//                     aria-label="show more"
//                 >
//                     <ExpandMoreIcon />
//                 </ExpandMore>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//                 <CardContent>
//                     {/* <Typography paragraph>Method:</Typography>
//                     <Typography paragraph>
//                         Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//                         aside for 10 minutes.
//                     </Typography>
//                     <Typography paragraph>
//                         Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//                         medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//                         occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
//                         large plate and set aside, leaving chicken and chorizo in the pan. Add
//                         pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
//                         stirring often until thickened and fragrant, about 10 minutes. Add
//                         saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//                     </Typography>
//                     <Typography paragraph>
//                         Add rice and stir very gently to distribute. Top with artichokes and
//                         peppers, and cook without stirring, until most of the liquid is absorbed,
//                         15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
//                         mussels, tucking them down into the rice, and cook again without
//                         stirring, until mussels have opened and rice is just tender, 5 to 7
//                         minutes more. (Discard any mussels that don&apos;t open.)
//                     </Typography>
//                     <Typography>
//                         Set aside off of the heat to let rest for 10 minutes, and then serve.
//                     </Typography> */}
//                 </CardContent>
//             </Collapse>
//         </Card>
//     );
// }


// const Search = () => {
//     const [keyword, setKeyWord] = useState("")
//     // const [actorName, setActorName] = useState("")
//     const handleSearchChange = (event) => {
//         setKeyWord(event.target.value);
//     }


//     return (
//         <div>
//             <ButtonAppBar></ButtonAppBar>

//             <Grid
//                 container spacing={10}

//                 direction="column"
//                 justifyContent="center"
//                 alignItems="center"
//                 style={{ minHeight: '100vh' }}>
//                 {/* <Grid Item
//                     container spacing={2}>
//                     <RecipeReviewCard></RecipeReviewCard>
//                     {/* <SearchBar
//                         // justifyContent="center"
//                         // alignItems="center"
//                         backgroundColor="secondary"
//                         keyword={keyword}
//                         setKeyWord={setKeyWord}
//                     ></SearchBar> */}
//                 {/* </Grid> */}

//                 {/* <Grid Item xs={1} md={1} >
//                     <Item color="primary"></Item>
//                 </Grid> */}

//                 <Grid Item alignItems='center'>
//                     <SearchBar
//                         // justifyContent="center"
//                         // alignItems="center"
//                         keyword={keyword}
//                         setKeyWord={handleSearchChange}
//                     ></SearchBar>
//                 </Grid>
//                 <Typography style={{ margin: 30 }}></Typography>

//                 <Grid
//                     container spacing={150}
//                     justifyContent="center"
//                     alignItems="center">

//                     <Grid Item>
//                         <RecipeReviewCard></RecipeReviewCard>
//                     </Grid>
//                     <Grid Item xs={1}>
//                         <Item color="primary"></Item>
//                     </Grid>
//                     <Grid Item>
//                         <RecipeReviewCard></RecipeReviewCard>
//                     </Grid>
//                     <Grid Item xs={1}>
//                         <Item color="primary"></Item>
//                     </Grid>
//                     <Grid Item>
//                         <RecipeReviewCard></RecipeReviewCard>
//                     </Grid>
//                 </Grid>
//             </Grid>
//             {/* <Grid
//                 container
//                 spacing={3}
//                 direction="column"
//                 // justifyContent="center"
//                 // alignItems="center"
//                 style={{ minHeight: '100vh' }}>
//                 <Grid Item
//                 justifyContent="flex-start">
//                     <Typography variant="h3" color="inherit" noWrap>
//                         Search Page
//                     </Typography>
//                 </Grid>
//                 <Typography style={{ margin: 30 }}></Typography>
//                 <Grid Item>
//                     <SearchBar
//                         justifyContent="center"
//                         alignItems="center"
//                         backgroundColor="secondary"
//                     ></SearchBar>
//                 </Grid>

//             </Grid> */}


//         </div>
//         // RecipeReviewCard();
//     )
// }

// const serverURL = "http://ec2-18-216-101-119.us-east-2.compute.amazonaws.com:3054"; //enable for deployed mode; Change PORT to the port number given to you;

// // const opacityValue = 0.7;

// // const theme = createTheme({
// //     palette: {
// //         type: 'dark',
// //         background: {
// //             default: "#000000"
// //         },
// //         primary: {
// //             main: "#000000",
// //         },
// //         secondary: {
// //             main: "#b552f7",
// //         },
// //     },
// // });
// const styles = theme => ({
//     // root: {
//     //     body: {
//     //         opacity: opacityValue,
//     //         overflow: "hidden",
//     //         color: green[400],
//     //         '&$checked': {
//     //             color: green[600],
//     //         },
//     //     },
//     // },
//     // palette: {
//     //     secondary: {
//     //         main: '#E33E7F'
//     //     }
//     // },
//     // paper: {
//     //     overflow: "hidden",
//     // },
//     // message: {
//     //     opacity: opacityValue,
//     //     maxWidth: 250,
//     //     paddingBottom: theme.spacing(2),
//     // },
//     // formControl: {
//     //     margin: theme.spacing(1),
//     //     minWidth: 200,
//     // },
//     // selectEmpty: {
//     //     marginTop: theme.spacing(2),
//     // },
//     // bullet: {
//     //     display: 'inline-block',
//     //     margin: '0 2px',
//     //     transform: 'scale(0.8)',
//     // },


// });
// class Searchs extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             userID: 1,
//             mode: 0
//         }
//     };
//     componentDidMount() {
//         //this.loadUserSettings();
//     }

//     render() {
//         const { classes } = this.props;

//         return (
//             <MuiThemeProvider >
//                 <div className={classes.root}>
//                     <CssBaseline />
//                     <Paper
//                         className={classes.paper}
//                     >
//                         <Search />
//                     </Paper>

//                 </div>

//             </MuiThemeProvider>
//         );
//     }
// }

// Searchs.propTypes = {
//     classes: PropTypes.object.isRequired
// };

// export default Searchs;


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


const Search = () => {
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
        submitSearch()
    }

    const submitSearch = async () => {
        const url = "/api/Searchs";

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
        <div>
            <ButtonAppBar
                backgroundColor="primary"
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
                        <Typography className={classes.heading}>Search</Typography>
                    </Box>

                </Grid>
            </Grid >

            <Grid
                container
                direction="column"
                justifyContent="center"
                // style={{ minHeight: '100vh' }}
                className={classes.backgroundColor}
            >
                <Grid Item>
                    <Typography className={classes.subHeading}>Search for articles based on keyword</Typography>

                </Grid>
                <Grid Item>
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
                        />
                    </Box>
                </Grid>

            </Grid>




            {/* <Box ml={7} p={2}>
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
                        />
                    </Box> */}
            {/* <Box ml={7} p={2}>
                        <FormControl fullWidth>
                            <InputLabel style={{ color: "#fff" }}>Topics</InputLabel>
                            <Select
                                value={topic}
                                label="Topic"
                                onChange={(e) => setTopic(e.target.value)}
                                className={classes.select}
                                style={{ color: "#fff" }}
                                required
                            >
                                {
                                    Object.keys(Categories).map(key => Categories[key]).map((categoryName) =>
                                        <MenuItem value={categoryName}>{categoryName}</MenuItem>
                                    )
                                }
                            </Select>
                        </FormControl>
                    </Box> */}
            {/* <Box ml={7} p={2}>
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
                        />
                    </Box> */}
            {/* <Grid item xs={1}></Grid> */}
            {/* <Grid item direction="column" xs={4.5} style={{ marginTop: 50 }}>
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
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </Box>
                    <Box m2={2} p={2}>
                        <Button variant="contained" onClick={handleSubmit} style={{ backgroundColor: "#B18CFF" }}>Submit</Button>
                    </Box>
                </Grid> */}

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