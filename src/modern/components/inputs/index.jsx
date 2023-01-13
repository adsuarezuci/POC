import React, { useState } from 'react'
import { Checkbox, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, Switch, TextField, Typography } from '@mui/material'

const Inputs = () => {
  const [value, setValue] = useState('')
  const [select, setSelect] = useState('')
  const [boolValue, setBoolean] = useState(false)

  const handleSelectChange = (event) => {
    setSelect(event.target.value)
  }

  return (
    <Stack>
      <Typography variant='h6'>Inputs Modern With React {React.version}</Typography>
      <Grid container spacing={3} mt={1}>
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
        <Grid item xs={12} sm={4} md={2}>
          <Switch
            checked={boolValue}
            onChange={e => setBoolean(e.target.checked)}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Checkbox
            checked={boolValue}
            onChange={(_, checked) => setBoolean(checked)}
          />
        </Grid>
        <Grid item xs={12}>
        <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
        >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        </FormControl>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Inputs
