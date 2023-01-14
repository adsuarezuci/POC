import React from 'react'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Home } from '@mui/icons-material'
import MailIcon from '@mui/icons-material/Mail'
import { StyleLink, StyleMenuTitleWrapper, StyleMenuWrapper } from './styles'



const SideMenu = () => {
  return (
    <StyleMenuWrapper elevation={10}>
      <StyleMenuTitleWrapper sx={{ height: '50px' }}>
        <Typography variant='h6'>
          Menu  
        </Typography>
      </StyleMenuTitleWrapper>  
      <List>
        <StyleLink to='/'>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home color='secondary' />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
        </StyleLink> 

        <StyleLink to='/inputs'>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon color='secondary' />
              </ListItemIcon>
              <ListItemText primary='Inputs' />
            </ListItemButton>
          </ListItem>
        </StyleLink> 

        <StyleLink to='/containers'>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon color='secondary' />
              </ListItemIcon>
              <ListItemText primary='Containers' />
            </ListItemButton>
          </ListItem>
        </StyleLink>

        <StyleLink to='/iconsbutton'>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon color='secondary' />
              </ListItemIcon>
              <ListItemText primary='Icons-Buttons' />
            </ListItemButton>
          </ListItem>
        </StyleLink>
      </List>      
    </StyleMenuWrapper>
  )
}

export default SideMenu
