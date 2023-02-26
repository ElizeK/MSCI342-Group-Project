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

import { deepOrange, deepPurple } from '@mui/material/colors';
import { Article } from '@mui/icons-material';

// interface ExpandMoreProps extends IconButtonProps {
//     expand: boolean;
// }
// const ExpandMore = styled((props: ExpandMoreProps) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
// }));

// const RecipeReviewCard = () => {
//     const [expanded, setExpanded] = React.useState(false);

//     const handleExpandClick = () => {
//         setExpanded(!expanded);
//     };



// const serverURL = process.env.DB_URL;
const serverURL = " ";
// const serverURL = "http://ec2-18-216-101-119.us-east-2.compute.amazonaws.com"

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


const ArticleCard = ({topHeadline}) => {
    return (
        <Card variant="outlined">
            <ul>
                <li> <b>Source:</b> {topHeadline.source?.name}</li>
                <li> <b>Author: </b>{topHeadline.author}</li>
                <li> <b>Title:</b> {topHeadline.title}</li>
                <li> <b>Description:</b> {topHeadline.description}</li>
                <li> <b>URL:</b> {topHeadline.url}</li>
                <li> <b>Published at: </b>{topHeadline.publishedAt}</li>
                <li> <b>Content:</b> {topHeadline.content}</li>
            </ul>
        </Card>
    )
}
const Home = () => {
    
    const [article, setArticle] = useState([]);
    const [expanded, setExpanded] = useState('');
    const [topHeadlines, setTopHeadlines] = useState([]);
    const [userId, setUserId] = useState(1);
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [category, setCategory] = React.useState("");

    React.useEffect(() => {
        getCategory();
        getTopHeadlines();
    }, [userId]);

    const getCategory = () => {
        const result = callApiGetPreferenceCategory()
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
        console.log("Category: ", body);
        return body;
    }

    const getTopHeadlines = () => {
        const result = callApiGetTopHeadlines()   
            .then(res => {
            console.log("callGetTopHeadlines returned: ", res);
            setTopHeadlines(res)
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
                language: "en",
                category: category
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
                style={{ minHeight: '100vh' }}>

                <Typography variant="h3" color="inherit" noWrap>
                    Pulse News Home Page
                </Typography>
                <Typography variant="h3" color="inherit" noWrap>
                    Preference category is {category !== "" ? category : ""}
                </Typography>
                {
                    topHeadlines.length > 0 ?
                    topHeadlines.map((topHeadline) => {
                        return (
                  <ArticleCard topHeadline={topHeadline}/>
                
                        )
                    })
                   : <></>
                }
                <Typography style={{ margin: 30 }}></Typography>
            </Grid>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="/static/images/cards/paella.jpg"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This is test card content.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    {/* <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore> */}
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                            large plate and set aside, leaving chicken and chorizo in the pan. Add
                            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                            stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and
                            peppers, and cook without stirring, until most of the liquid is absorbed,
                            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                            mussels, tucking them down into the rice, and cook again without
                            stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don&apos;t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>        
        </div>
    )
}

// const serverURL = "http://ec2-18-216-101-119.us-east-2.compute.amazonaws.com:3054"; //enable for deployed mode; Change PORT to the port number given to you;

const opacityValue = 0.7;

const theme = createTheme({
    // palette: {
    //     type: 'dark',
    //     background: {
    //         default: "#b552f7"
    //     },
    //     primary: {
    //         main: "#52F7B4",
    //     },
    //     secondary: {
    //         main: "#b552f7",
    //     },
    // },
});
const styles = theme => ({
    // root: {
    //     body: {
    //         backgroundColor: "#AFE1AF",
    //         opacity: opacityValue,
    //         overflow: "hidden",
    //         color: green[400],
    //         '&$checked': {
    //             color: green[600],
    //         },
    //     },
    // },
    // paper: {
    //     overflow: "hidden",
    // },
    // message: {
    //     opacity: opacityValue,
    //     maxWidth: 250,
    //     paddingBottom: theme.spacing(2),
    // },
    // formControl: {
    //     margin: theme.spacing(1),
    //     minWidth: 200,
    // },
    // selectEmpty: {
    //     marginTop: theme.spacing(2),
    // },
    // bullet: {
    //     display: 'inline-block',
    //     margin: '0 2px',
    //     transform: 'scale(0.8)',
    // },

});
class Homes extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         userID: 1,
    //         mode: 0
    //     }
    // };
    // componentDidMount() {
    //     //this.loadUserSettings();
    // }

    render() {
        const { classes } = this.props;

        return (
            // <MuiThemeProvider theme={theme}>
                <div className={classes.root}>
                    {/* <CssBaseline /> */}
                    {/* <Paper */}
                        {/* className={classes.paper}
                    > */}
                        <Home />
                    {/* </Paper> */}

                </div>

            // </MuiThemeProvider>
        );
    }
}

Homes.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Homes);