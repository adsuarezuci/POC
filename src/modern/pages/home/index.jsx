import { Box, styled } from '@mui/material'
import React from 'react'
import MainLayout from '../../components/layout'
import TitlePage from '../../components/title'

const StyleWelcomeTextWrapper = styled(Box)(({ theme }) => ({
  padding: 1,
}))

export default function HomePage() {
  return (
    <MainLayout>
      <TitlePage title='Welcome to Gradual Upgrade of project Merge-TelaClaims' />
      <StyleWelcomeTextWrapper>
        In this project we try to use 2 versions of React with Material-UI in each one. 
        Using all posible components to see how it works in both inside projects 
      </StyleWelcomeTextWrapper>
    </MainLayout>
  )
}
