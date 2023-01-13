import { Box, Card, styled } from "@mui/material"
import { Link } from "react-router-dom"

export const StyleMenuTitleWrapper = styled(Box)(({theme}) => ({
    height: '50px',
    width: '100%',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }))
export const StyleMenuWrapper = styled(Card)(({theme}) => ({
    height: '100%', 
    width: '200px',
    position: 'fixed',
    left: 0 ,
    top: 0,
    gap: 0,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    borderRadius: '0px'
  }))

export const StyleLink = styled(Link)(({theme}) => ({
  color: theme.palette.secondary.main,
  textDecoration: 'none'
}))