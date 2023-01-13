import { Box, Stack, styled } from '@mui/material'
import React, { Fragment } from 'react'
import SideMenu from '../sideMenu'

const StyleChildrenWrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  backgroundColor: theme.palette.secondary.main,
  margin: '50px',
  paddingLeft: '200px'
}))

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Stack
        display='flex'
        direction='row'
        gap={0}
      >
        <SideMenu />
        <StyleChildrenWrapper>
          {children}
        </StyleChildrenWrapper>
      </Stack>
    </Fragment>
  )
}

export default MainLayout
