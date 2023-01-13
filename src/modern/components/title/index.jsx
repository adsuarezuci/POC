import { Typography } from '@mui/material'
import React, { Fragment } from 'react'

const TitlePage = ({ title }) => {
  return (
    <Fragment>
      <Typography mb={2} variant='h4'>
        {title}
      </Typography>
    </Fragment>
  )
}

export default TitlePage
