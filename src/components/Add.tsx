import { IconButton, Tooltip } from "@mui/material";
import React, { Component } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';

export default class Add extends Component {
    render() {
        return (
            <Tooltip
                title="Add"
                sx={{
                    position: 'fixed',

                }}
            >
                <Fab size="small" color="secondary" aria-label="add">
                    <AddCircleIcon />
                </Fab>
            </Tooltip>
        );
    }
}
