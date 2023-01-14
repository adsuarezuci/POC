import React, { useState } from 'react'
import { Card, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, Switch, TextField, Typography } from '@mui/material'

const Inputs = () => {
  const [value, setValue] = useState('')
  const [select, setSelect] = useState('')
  const [boolValue, setBoolean] = useState(false)

  const handleSelectChange = (event) => {
    setSelect(event.target.value)
  }

  return (
    <Card  elevation={5} sx={{ padding: 3 }}>
      <Typography variant='h6'>Inputs Modern With React {React.version}</Typography>
      <Grid container spacing={3} mt={1}>
        <Grid item xs={12}>
          <TextField
             id="outlined-basic-modern" 
             label="Outlined" 
             variant="outlined" 
             value={value}
             onChange={e => setValue(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label-modern">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label-modern"
                id="demo-simple-select-modern"
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
              />
            </Grid>
            <Grid item xs={12} sm={3} >
              <Switch
                checked={boolValue}
                onChange={e => setBoolean(e.target.checked)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label-modern">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label-modern"
                defaultValue="female"
                name="radio-buttons-group-modern"
            >
                <FormControlLabel value="female" control={<Radio/>} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="timeModern"
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
