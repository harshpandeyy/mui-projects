import React, { Component } from 'react'
import Post from './Post'
import { Box } from '@mui/material'

export default class Feed extends Component {
  render() {
    return (
        <Box flex={3} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </Box>
   
    )
  }
}
