import React, { useState } from 'react'
import { 
  Card, 
  Checkbox, 
  FormControl, 
  FormControlLabel, 
  FormLabel, Grid, InputLabel, 
  MenuItem, Radio, RadioGroup, Select, Slider, Switch, 
  TextField, Typography } from '@mui/material'
import { connect } from 'react-redux'
import { changeValueInput, changeSelectInput, changeBoolInput, changeSlideInput } from '../../redux/inputs'

const Inputs = ({
  value,
  select,
  boolValue,
  slideValue,
  setValue,
  setSelect,
  setBoolean,
  setSlide
}) => {
  const handleSelectChange = (event) => {
    setSelect(event.target.value)
  }

  return (
    <Card  elevation={5} sx={{ padding: 3 }}>
      <Typography variant='h6'>Modern Inputs With React {React.version}</Typography>
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
              <MenuItem value="10">Ten</MenuItem>
              <MenuItem value="20">Twenty</MenuItem>
              <MenuItem value="30">Thirty</MenuItem>
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
                defaultValue=''
                value={select}
                name="radio-buttons-group-modern"
                onChange={handleSelectChange}
            >
              <FormControlLabel value="10" control={<Radio/>} label="Ten" />
              <FormControlLabel value="20" control={<Radio />} label="Twenty" />
              <FormControlLabel value="30" control={<Radio />} label="Thirty" />
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
        <Grid item xs={12}>
          <Slider 
            value={slideValue}
            aria-label="Default" 
            valueLabelDisplay="auto" 
            onChange={(e) => setSlide(e.target.value)}
          />
        </Grid>
      </Grid>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    value: state.inputs.value,
    select: state.inputs.select,
    boolValue: state.inputs.boolValue,
    slideValue: state.inputs.slideValue
  }
}
const mapDispatchToProps = {
  setValue: changeValueInput,
  setBoolean: changeBoolInput,
  setSelect: changeSelectInput,
  setSlide: changeSlideInput
}

export default connect(mapStateToProps, mapDispatchToProps)(Inputs)
