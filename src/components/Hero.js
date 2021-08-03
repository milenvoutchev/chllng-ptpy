import Typography from "@material-ui/core/Typography";
import React from "react";

export default function Hero() {
    return (
        <React.Fragment>
            <Typography component="h1" variant="h4">
                Roman Numerals Converter
            </Typography>
            <Typography align="center">
                Enter the Roman numeral or number and press the Convert button:
            </Typography>
        </React.Fragment>
    )
}
