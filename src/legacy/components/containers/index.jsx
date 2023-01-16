import { AppBar, Tab, Tabs, Typography } from '@material-ui/core'
import React from 'react'

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

const Containers = () => {
  const [value, setValue] = React.useState(0)
  return (
    <div>
      <Typography variant='h6'>Legacy Containers From React {React.version}</Typography>
      <AppBar position="static">
        <Tabs value={value} onChange={(e, value) => setValue(value)}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>Item One</TabContainer>}
      {value === 1 && <TabContainer>Item Two</TabContainer>}
      {value === 2 && <TabContainer>Item Three</TabContainer>}
    </div>
  )
}

export default Containers
