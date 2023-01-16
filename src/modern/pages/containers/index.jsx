import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Containers from '../../components/containers'
import MainLayout from '../../components/layout'
import TitlePage from '../../components/title'
import lazyLegacyRoot from '../../lazyLegacyRoot'

const ContainersLegacy = lazyLegacyRoot(() => import('../../../legacy/components/containers'));

const ContainersPage = () => {
  return (
    <MainLayout>
      <TitlePage title='ContainersPages' />
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Containers />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ContainersLegacy />
          </Grid>
        </Grid>
      </Box>
    </MainLayout>
  )
}

export default ContainersPage
