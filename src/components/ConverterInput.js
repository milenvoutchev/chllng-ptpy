import React from 'react';
import { Input } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default function ConverterInput({ label, value, onChange, isNumber }) {

    const type = !!isNumber ? "number" : "text";
    const handleChange = (event) => onChange(event.target.value);

    return (
        <React.Fragment>
            <Typography variant="h5" component="h2">
                {label}
            </Typography>
            <div>
                <Input type={type} value={value || ""} onChange={handleChange} />
            </div>
        </React.Fragment>
    )
}
