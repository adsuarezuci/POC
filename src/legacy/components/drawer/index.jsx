import { Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const DrawerComponent = () => {
    const [open, setOpen] = React.useState(false);
    
    const list = () => (
      <div
        style={{ width:  250 }}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
          </ListItem>
          ))}
        </List>
      </div>
    );
  
    return (
        <React.Fragment>
            <Button 
              variant='contained' 
              color='primary'
              onClick={() => setOpen(!open)}
            >
              Open Drawer
            </Button>
            <Drawer
              anchor='left'
              open={open}
              onClose={() => setOpen(false)}
            >
              {list()}
            </Drawer>
          </React.Fragment>
    )
}

export default DrawerComponent
