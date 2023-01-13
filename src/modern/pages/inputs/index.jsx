import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Inputs from '../../components/inputs'
import MainLayout from '../../components/layout'
import TitlePage from '../../components/title'
import lazyLegacyRoot from '../../lazyLegacyRoot'

const InputsLegacy = lazyLegacyRoot(() => import('../../../legacy/components/inputs'));

export default function InputsPage() {
  return (
    <MainLayout>
      <TitlePage title='Input Components' />
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Inputs />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputsLegacy />
          </Grid>
        </Grid>
      </Box>
    </MainLayout>
  )
}
