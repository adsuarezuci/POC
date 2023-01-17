import { AppBar, Button, Grid, IconButton, Tab, Tabs, Typography } from '@material-ui/core'
import React from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom';
import DrawerComponent from '../drawer';
import { AddShoppingCart, Alarm, Delete,  } from '@material-ui/icons'

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

const Containers = () => {
  const [value, setValue] = React.useState(0)
  const location = useLocation()
  const history = useHistory()
  console.log(React.version+' history',history)
  return (
    <div>
      <Typography variant='h6'>Legacy Containers From React {React.version}</Typography>
      <AppBar position="static">
        <Tabs value={value} onChange={(e, value) => setValue(value)}>
            <Tab label="Drawer" />
            <Tab label="Links" />
            <Tab label="Icon-Button" />
        </Tabs>
      </AppBar>
      {value === 0 && (
        <TabContainer>
          <DrawerComponent />
        </TabContainer>
      )}
      {value === 1 && (
        <TabContainer>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  fontSize: '1rem'
                }}
              >
                <Link to="/">Home</Link>
                <Link to="/inputs">Inputs</Link>
                <Link to="/containers">Containers</Link>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  fontSize: '1rem'
                }}
              >
                <Button onClick={() => history.push('/')}>Home</Button>
                <Button onClick={() => window.location.assign('/inputs')}>Inputs</Button>
                <Button onClick={() => history.push('/containers')}>Containers</Button>
              </div>
            </Grid>
          </Grid>
          
        </TabContainer>
      )}
      {value === 2 && (
        <TabContainer>
          <div >
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
          </div>
        </TabContainer>
      )}
    </div>
  )
}

export default Containers
