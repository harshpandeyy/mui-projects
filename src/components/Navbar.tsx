import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    styled,
} from "@mui/material";
import React, { Component } from "react";
import PetsIcon from "@mui/icons-material/Pets";
import { Mail } from "@mui/icons-material";
import { InputBase } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: '#6c757d'
});

const Search = styled("div")(({ theme }) => ({
    display: "flex",
    width: "40%",
    padding: 2,
    borderRadius: theme.shape.borderRadius,
    backgroundColor:'#eee'
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up('xs')]: {
        display: 'none'
    }
}));

export default class Navbar extends Component {
    state: {
        open: boolean;
    }
    constructor(props: any) {
        super(props);
        this.state = {
            open: false
        };
    }

    render() {
        return (
            <AppBar position="sticky">
                <StyledToolbar>
                    <Typography
                        variant="h6"
                        sx={{ display: { xs: "none", sm: "block" } }}
                    >
                        TinDog
                    </Typography>
                    <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />

                    <Search>
                        <InputBase placeholder="Search" />
                    </Search>
                    <Icons>
                        <Badge badgeContent={4} color="error">
                            <Mail />
                        </Badge>
                        <Badge badgeContent={2} color="error">
                            <NotificationsIcon />
                        </Badge>
                        <Avatar
                            sx={{ width: 25, height: 25 }}
                            alt="Unsplash image"
                            onClick={(e) => this.setState({ open: true })}
                            src="https://images.unsplash.com/photo-1539208053872-3abdcead5fe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1113&q=80"
                        />
                        <Typography>Harsh</Typography>

                    </Icons>
                    <UserBox onClick={(e) => this.setState({ open: true })}>
                        <Avatar
                            sx={{ width: 25, height: 25 }}
                            alt="Unsplash image"
                            src="https://images.unsplash.com/photo-1539208053872-3abdcead5fe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1113&q=80"
                        />

                    </UserBox>
                </StyledToolbar>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    // anchorEl={anchorEl}
                    open={this.state.open}
                    onClose={(e) => this.setState({ open: false })}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </AppBar>
        );
    }
}
