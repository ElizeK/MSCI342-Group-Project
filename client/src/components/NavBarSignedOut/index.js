import React from 'react';
import { Typography } from "@material-ui/core";
import history from "../Navigation/history";
import "@fontsource/oswald";
import "@fontsource/inter";
import { Toolbar, Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, FormControl, InputLabel, Select, MenuItem, TextField, Box, Menu } from '@mui/material';
import { createTheme } from "@material-ui/core/styles";

const opacityValue = 1;
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
const NavBarSignedOut = () => {
    const useStyles = makeStyles(() => ({
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

    const classes = useStyles();

    const [chosenOption, setChosenOption] = React.useState('');

    const handleChosenOption = (e) => {
        setChosenOption(e.target.value);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div data-testid="NavBar">
            <Toolbar>
                <Typography style={{ marginRight: 10 }}></Typography>
                <Button
                    color="inherit"
                    onClick={() => history.push('/Landing')}
                >
                    <Typography className={classes.navbarItem} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Pulse News
                    </Typography>
                </Button>
                <Typography style={{ marginRight: 50 }}></Typography>

            </Toolbar>
        </div>

    );
}

export default NavBarSignedOut;