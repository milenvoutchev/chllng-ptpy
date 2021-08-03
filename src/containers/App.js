import React from 'react';
import { Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Hero from "../components/Hero";
import RomanNumeralsConverter from "./RomanNumeralsConverter";

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 300,
        marginBottom: '1em',
        paddingBottom: '1em',
    },
}));
export default function App() {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Paper variant="elevation" className={classes.paper}>
                <Hero />
            </Paper>
            <Paper variant="elevation" className={classes.paper}>
                <RomanNumeralsConverter />
            </Paper>
        </Container>
    )
}
