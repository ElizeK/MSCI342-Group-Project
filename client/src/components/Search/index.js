import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import "@fontsource/oswald";
import "@fontsource/inter";
import { Grid, Button, Paper, FormControl, InputLabel, Select, MenuItem, TextField, Box, Card } from '@mui/material';
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import NavBar from '../NavBar';
import FavoriteIcon from '@mui/icons-material/Favorite';




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
    const [articleId, setArticleId] = useState(1);
    const [favourite, setFavourite] = React.useState(false);
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [articleUrl, setUrl] = useState('');
    const [date, setDate] = useState('');
    const addFavourite = async () => {
        await handleFavouriteClick();
    }
    const handleFavouriteClick = async () => {
        const url = '/api/article/favourite';
        console.log(url)
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                articleId: articleId,
                title: title,
                author: author,
                articleUrl: articleUrl,
                // publishedAt: date
            })
        });
        console.log(response)
        const body = await response.json();
        console.log(body);
        if (response.ok) {
            setFavourite(true);
            // setArticleId(articleId + 1);
        }
    }
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
                <Typography variant="body2"  className={classes.header}>
                    {article.description}
                </Typography>
            </CardContent>


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

const Search = () => {
    const classes = useStyles();

    const [query, setQuery] = useState("");
    const [articles, setArticles] = useState([]);
    const [source, setSource] = useState("");
    const [language, setLanguage] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [totalResults, setTotalResults] = useState(0);


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
                pageSize: 100,
                language: language,
                source: source,
                sortBy: sortBy,
                totalResults: totalResults
            })
        });
        console.log(query + " " + language + " " + source + " " + sortBy);
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    const handleSubmit = async (e) => {
        setQuery(query.replaceAll(' ', '-'))
        getArticles()

    }

    return (
        <div data-testid='search' >
            <NavBar
                backgroundColor="primary"
            ></NavBar>
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

            </Grid>
            <Grid
                container
                // direction="column"
                justifyContent="center"
                className={classes.backgroundColor}
            >
                <Grid item
                    justifyContent="center"

                >
                    <Box ml={7} p={2}>
                        <Stack direction="row" spacing={2}>
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
                                data-testid='searchbox'
                            />
                            <Box p={2}></Box>
                            <Button variant="contained" style={{ backgroundColor: "#B18CFF" }} onClick={handleSubmit}>Search</Button>

                        </Stack>
                    </Box>
                </Grid>
            </Grid>

            <Grid
                container
                direction="row"
                justifyContent="center"
                className={classes.backgroundColor}
            >
                <Box ml={7} p={2}>
                    <FormControl style={{ "width": 200 }} >
                        <InputLabel style={{ color: "#fff" }}>Source</InputLabel>
                        <Select
                            value={source}
                            label="News Source"
                            onChange={(e) => setSource(e.target.value)}
                            className={classes.select}
                            style={{ color: "#fff" }}
                            required
                            data-testid='Source'
                            defaultValue={""}
                        >
                            <MenuItem value={""}>None</MenuItem>
                            <MenuItem value={"abc-news"}>ABC News</MenuItem>
                            <MenuItem value={"abc-news-au"}>ABC News Australia</MenuItem>
                            <MenuItem value={"aftenposten"}>Aftenposten</MenuItem>
                            <MenuItem value={"al-jazeera-english"}>Al Jazeera English</MenuItem>
                            <MenuItem value={"ansa"}>ANSA.it</MenuItem>
                            <MenuItem value={"argaam"}>Argaam</MenuItem>
                            <MenuItem value={"ars-technica"}>Ars Technica</MenuItem>
                            <MenuItem value={"ary-news"}>Ary News</MenuItem>
                            <MenuItem value={"associated-press"}>Associated Press</MenuItem>
                            <MenuItem value={"australian-financial-review"}>Australian Financial Review</MenuItem>
                            <MenuItem value={"axios"}>Axios</MenuItem>
                            <MenuItem value={'bbc-news'}>BBC News</MenuItem>
                            <MenuItem value={"bbc-sport"}>BBC Sport</MenuItem>
                            <MenuItem value={"bild"}>Bild</MenuItem>
                            <MenuItem value={"blasting-news-br"}>Blasting News (BR)</MenuItem>
                            <MenuItem value={"bleacher-report"}>Bleacher Report</MenuItem>
                            <MenuItem value={"bloomberg"}>Bloomberg</MenuItem>
                            <MenuItem value={'business-insider'}>Business Insider</MenuItem>
                            <MenuItem value={"business-insider-uk"}>Business Insider (UK)</MenuItem>
                            <MenuItem value={"buzzfeed"}>Buzzfeed</MenuItem>
                            <MenuItem value={"cbc-news"}>CBC News</MenuItem>
                            <MenuItem value={"cbs-news"}>CBS news</MenuItem>
                            <MenuItem value={"cnn"}>CNN</MenuItem>
                            <MenuItem value={'cnn-es'}>CNN Spanish</MenuItem>
                            <MenuItem value={"crypto-coins-news"}>Crypto Coins News</MenuItem>
                            <MenuItem value={"engadget"}>Engadget</MenuItem>
                            <MenuItem value={"entertainment-weekly"}>Entertainment Weekly</MenuItem>
                            <MenuItem value={"espn"}>ESPN</MenuItem>
                            <MenuItem value={"espn-cric-info"}>ESPN Cric Info</MenuItem>
                            <MenuItem value={'financial-post'}>Financial Post</MenuItem>
                            <MenuItem value={"focus"}>Focus</MenuItem>
                            <MenuItem value={"football-italia"}>Football Italia</MenuItem>
                            <MenuItem value={"fortune"}>Fortune</MenuItem>
                            <MenuItem value={'four-four-two'}>FourFourTwo</MenuItem>
                            <MenuItem value={"fox-news"}>Fox News</MenuItem>
                            <MenuItem value={"fox-sports"}>Fox Sports</MenuItem>
                            <MenuItem value={"google-news"}>Google News</MenuItem>
                            <MenuItem value={"google-news-ca"}>Google News (Canada)</MenuItem>
                            <MenuItem value={"google-news-uk"}>Google News (UK)</MenuItem>
                            <MenuItem value={'hacker-news'}>Hacker News</MenuItem>
                            <MenuItem value={"ign"}>IGN</MenuItem>
                            <MenuItem value={"independent"}>Independent</MenuItem>
                            <MenuItem value={"le-monde"}>Le Monde</MenuItem>
                            <MenuItem value={'medical-news-today'}>Medical News Today</MenuItem>
                            <MenuItem value={"mtv-news"}>MTV News</MenuItem>
                            <MenuItem value={"mtv-news-uk"}>MTV News (UK)</MenuItem>
                            <MenuItem value={"national-geographic"}>National Geographic</MenuItem>
                            <MenuItem value={"national-review"}>National Review</MenuItem>
                            <MenuItem value={"nbc-news"}>NBC News</MenuItem>
                            <MenuItem value={'new-scientist'}>New Scientist</MenuItem>
                            <MenuItem value={"news-com-au"}>News.com.au</MenuItem>
                            <MenuItem value={'new-york-magazine'}>New York Magazine</MenuItem>
                            <MenuItem value={"next-big-future"}>Next Big Future</MenuItem>
                            <MenuItem value={"nfl-news"}>NFL News</MenuItem>
                            <MenuItem value={"nhl-news"}>NHL News</MenuItem>
                            <MenuItem value={"polygon"}>Polygon</MenuItem>
                            <MenuItem value={"recode"}>Recode</MenuItem>
                            <MenuItem value={'reddit-r-all'}>Reddit /r/all</MenuItem>
                            <MenuItem value={"reuters"}>Reuters</MenuItem>
                            <MenuItem value={'talksport'}>TalkSport</MenuItem>
                            <MenuItem value={"techcrunch"}>TechCrunch</MenuItem>
                            <MenuItem value={"techcrunch-cn"}>TechCrunch (CN)</MenuItem>
                            <MenuItem value={"techradar"}>TechRadar</MenuItem>
                            <MenuItem value={"the-globe-and-mail"}>The Globe And Mail</MenuItem>
                            <MenuItem value={"the-hindu"}>The Hindu</MenuItem>
                            <MenuItem value={'the-huffington-post'}>The Huffington Post</MenuItem>
                            <MenuItem value={"the-irish-times"}>The Irish Times</MenuItem>
                            <MenuItem value={'the-verge'}>The Verge</MenuItem>
                            <MenuItem value={"the-wall-street-journal"}>The Wall Street Journal</MenuItem>
                            <MenuItem value={'the-washington-post'}>The Washington Post</MenuItem>
                            <MenuItem value={"the-washington-times"}>The Washington Times</MenuItem>
                            <MenuItem value={"time"}>Time</MenuItem>
                            <MenuItem value={"usa-today"}>USA Today</MenuItem>
                            <MenuItem value={"wired"}>Wired</MenuItem>
                            <MenuItem value={"wired-de"}>Wired.de</MenuItem>
                            
                        </Select>
                    </FormControl>
                </Box>
                <Box ml={7} p={2}>
                    <FormControl style={{ "width": 200 }} >
                        <InputLabel style={{ color: "#fff" }}>Language</InputLabel>
                        <Select
                            value={language}
                            label="Language"
                            onChange={(e) => setLanguage(e.target.value)}
                            className={classes.select}
                            style={{ color: "#fff" }}
                            required
                            data-testid='Language'
                            defaultValue={""}
                        >
                            <MenuItem value={""}>None</MenuItem>
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
            {/* <Grid
                container
                // direction="column"
                justifyContent="center"
                className={classes.backgroundColor}
            >
                <Grid item >
                    <Box ml={7} p={2}>
                        <Typography className={classes.subHeading}>{totalResults} Results</Typography>
                    </Box>
                </Grid>

            </Grid> */}
            {console.log(totalResults)}
            <Grid
                container
                // direction="column"
                justifyContent="center"
                display="flex"
                alignItems="center"
                className={classes.backgroundColor}
            >
                <Box ml={7} p={2}>
                        <Typography className={classes.subHeading}>{articles.length} Results</Typography>
                    </Box>

                <Grid item>

                    {
                        articles.length > 0 ?
                            <div>

                                <Typography style={{ padding: 20 }} className={classes.subHeading}>Results for keyword: {query}</Typography>
                                <Typography style={{ margin: 20 }}></Typography>
                                <Grid
                                    container spacing={{ xs: 1, md: 1 }} columns={{ xs: 5, sm: 8, md: 12 }} justifyContent="center"
                                    display="flex"
                                    alignItems="center"
                                    style={{ marginLeft: 20 }}
                                >

                                    {articles.map((article, index) => {
                                        return (
                                            <Grid sm={4} md={4} key={index}>
                                                <ArticleCard article={article} />
                                                <Typography style={{ padding: 20 }}></Typography>
                                            </Grid>

                                        )

                                    })}
                                </Grid>

                            </div>

                            : <></>
                    }
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
