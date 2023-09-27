import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import RightBar from "./components/RightBar";
import Feed from "./components/Feed";
import { Box, Container, Stack } from "@mui/material";

export default class App extends Component {
  render() {
    return (
      <Box>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent={"space-between"}>
          <SideBar />
          <Feed />
          <RightBar />
        </Stack>
      </Box>
    );
  }
}
