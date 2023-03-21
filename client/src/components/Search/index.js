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

const Search = () => {
    const [query, setQuery] = useState("");
    const [articles, setArticles] = useState([]);
    const Languages = {
        ar: "Arabic",
        de: "German",
        en: "English",
        es: "Spanish",
        fr: "French",
        he: "Hebrew",
        it: "Italian",
        nl: "Dutch",
        no: "Norwegian",
        pt: "Portuguese",
        ru: "Russian",
        sv: "Swedish",
        zh: "Chinese",
        null: "None"
    }
    const Sources = {};

    const [source, setSource] = useState([]);


    const [language, setLanguage] = useState(Languages.GENERAL)

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
                pageSize: 15,
                language: language
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
                        <InputLabel style={{ color: "#fff" }}>Language</InputLabel>
                        <Select
                            value={language}
                            label="Language"
                            onChange={(e) => setLanguage(e.target.value)}
                            className={classes.select}
                            style={{ color: "#fff" }}
                            required
                            data-testid='Language'
                            // defaultValue={""}
                        >
                            {/* <MenuItem value={""}>None</MenuItem> */}
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
                {/* <Box ml={7} p={2}>
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
                        >
                            {Object.keys(Languages).map(key => Languages[key]).map((languageName) =>
                                <MenuItem value={languageName}>{languageName}</MenuItem>
                            )}
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
                        >
                            {Object.keys(Languages).map(key => Languages[key]).map((languageName) =>
                                <MenuItem value={languageName}>{languageName}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Box> */}
            </Grid>
            <Grid
                container
                // direction="column"
                justifyContent="center"
                display="flex"
                alignItems="center"
                className={classes.backgroundColor}
            >

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
                                            <Grid xs={4} sm={4} md={4} key={index}>
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
