import { Box, Button, Grid, IconButton, Stack, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import DrawerComponent from '../drawer'
import { Delete, Alarm, AddShoppingCart } from '@mui/icons-material'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

const Containers = () => {
  const [value, setValue] = React.useState(0)
  const history = useHistory()

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h6'>Containers Modern With React {React.version}</Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Drawer" {...a11yProps(0)} />
          <Tab label="Links" {...a11yProps(1)} />
          <Tab label="Icon-Button" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DrawerComponent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={3} >
          <Grid item xs={12} sm={6}>
            <Stack
              direction='column'
              gap={1}
            >
              <Link to='/'>Home</Link>
              <Link to="/inputs">Inputs</Link>
              <Link to="/containers">Containers</Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack
              direction='column'
              gap={1}
            >
              <Button onClick={() => history.push('/')}>Home</Button>
              <Button onClick={() => history.push('/inputs')}>Inputs</Button>
              <Button onClick={() => history.push('/containers')}>Containers</Button>
            </Stack>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Stack direction="row" spacing={1}>
          <IconButton aria-label="delete">
            <Delete />
          </IconButton>
          <IconButton aria-label="delete" disabled color="primary">
            <Delete />
          </IconButton>
          <IconButton color="success" aria-label="add an alarm">
            <Alarm />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCart />
          </IconButton>
        </Stack>
      </TabPanel>
    </Box>
  )
}

export default Containers
