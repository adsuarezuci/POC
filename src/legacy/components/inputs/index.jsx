import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React,{ useState} from 'react'

const Inputs = () => {
  const [value, setValue] = useState('')
  const [select, setSelect] = useState('')

  const handleSelectChange = (event) => {
    setSelect(event.target.value)
  }
  return (
    <div>
      <Typography variant='h6'>Legacy Inputs From React {React.version}</Typography>
      <Grid container spacing={3} style={{ marginTop: '30px' }}>
        <Grid item xs={12}>
          <TextField
             id="outlined-basic" 
             label="Outlined" 
             variant="outlined" 
             value={value}
             onChange={e => setValue(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={select}
                label="Age"
                onChange={handleSelectChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
    
  )
}

export default Inputs
