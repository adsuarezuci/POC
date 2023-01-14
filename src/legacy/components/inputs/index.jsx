import { Card, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Switch, TextField, Typography } from '@material-ui/core'
import React,{ useState} from 'react'

const Inputs = () => {
  const [value, setValue] = useState('')
  const [select, setSelect] = useState('')
  const [boolValue, setBoolean] = useState(false)


  const handleSelectChange = (event) => {
    setSelect(event.target.value)
  }
  return (
    <Card elevation={5} style={{ padding: 24 }}>
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
        
        <Grid item xs={12} >
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Checkbox
                checked={boolValue}
                onChange={(_, checked) => setBoolean(checked)}
                color='primary'
              />
            </Grid>
            <Grid item xs={12} sm={3} >
              <Switch
                checked={boolValue}
                onChange={e => setBoolean(e.target.checked)}
                color='primary'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                
            >
                <FormControlLabel value="female" control={<Radio color='primary' />} label="Female" />
                <FormControlLabel value="male" control={<Radio color='primary' />} label="Male" />
                <FormControlLabel value="other" control={<Radio color='primary' />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="time"
            label="Alarm clock"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </Grid>
      </Grid>
    </Card>
    
  )
}

export default Inputs
