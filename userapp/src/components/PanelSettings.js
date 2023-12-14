import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';


const PanelSettings = () =>{
    const [choice, setChoice] = useState("p1")
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const options = [
        { label: "Panel 1",value: "p1" },
        { label: "Panel 2", value: "p2" },
    ]

    const [age, setAge] = React.useState('');

    const handleChangeAge = (event) => {
      setAge(event.target.value);
    };

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };


    const PrettoSlider = styled(Slider)({
        color: '#52af77',
        height: 8,
        '& .MuiSlider-track': {
          border: 'none',
        },
        '& .MuiSlider-thumb': {
          height: 24,
          width: 24,
          backgroundColor: '#fff',
          border: '2px solid currentColor',
          '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
          },
          '&:before': {
            display: 'none',
          },
        },
        '& .MuiSlider-valueLabel': {
          lineHeight: 1.2,
          fontSize: 12,
          background: 'unset',
          padding: 0,
          width: 32,
          height: 32,
          borderRadius: '50% 50% 50% 0',
          backgroundColor: '#52af77',
          transformOrigin: 'bottom left',
          transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
          '&:before': { display: 'none' },
          '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
          },
          '& > *': {
            transform: 'rotate(45deg)',
          },
        },
      });
    return (
        <div className="w-full h-full">
            <div className="ml-[8.25%]">
                <Dropdown options={options} onSelect={setChoice}/>
            </div>
            <div className="flex justify-around h-full w-full">
                {/* left */}
                <div className="w-1/3 h-5/6 bg-slate-100 shadow-lg m-2 inline-block">
                    <div className="text-green-400 text-2xl m-2 font-bold">Window Settings</div>
                    {/* Pannel thick */}
                    <div className="m-2 text-xl flex mt-4">
                        <p className="pt-[1.5%] mr-[2%]">Pannel Thickness</p>
                        <TextField
                            id="filled-number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            inputProps={{
                                style: { backgroundColor: 'white', fontSize: '20px', paddingTop: '4px', }, // Set your desired background color
                                
                            }}
                            sx={{ 
                                width: '50%',
                                '& input': { textAlign: 'center' },
                                border: '.5px solid gray',
                                
                            }}
                        />
                    </div>

                    {/* Pannel thick */}
                    <div className="m-2 text-xl flex mt-4">
                        <p className="pt-[1.5%] mr-[5%]">Pannel Volume</p>
                        <TextField
                            id="filled-number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            inputProps={{
                                style: { backgroundColor: 'white', fontSize: '20px', paddingTop: '4px', }, // Set your desired background color
                                
                            }}
                            sx={{ 
                                width: '50%',
                                '& input': { textAlign: 'center' },
                                border: '.5px solid gray',
                                
                            }}
                        />
                    </div>

                    {/* Transparency */}
                    <div className="flex justify-center pt-[5%]">
                        <Box sx={{ width: '95%' }}>
                            <Box sx={{ m: 3 }} />
                            <Typography gutterBottom style={{ fontSize: '1.25rem' }}>Transparency</Typography>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                aria-label="pretto slider"
                                defaultValue={20}
                            />
                        </Box>
                    </div>

                    {/* Test */}
                    <div className="flex justify-center pt-[10%]">
                        <Button 
                            variant="contained"
                            sx={{width: '95%', background: '#52af77'}}
                        
                        >Test</Button>
                    </div>

                    {/* Water Level */}
                    <div className="pt-[5%] flex m-2">  
                        <p className="text-xl pt-[.5%] pr-[2%]">Automatic Water Level</p>
                        <Switch
                            {...label}
                            checked={checked}
                            onChange={handleChange}
                            sx={{
                                '&.Mui-checked.MuiSwitch-thumb': {
                                  backgroundColor: '#52af77 !important', // Color of the thumb when selected
                                },
                                '&.Mui-checked.MuiSwitch-track': {
                                  backgroundColor: '#52af77 !important', // Color of the track when selected
                                },
                              }}
                        />
                    </div>
                    
                </div>
                
                {/* right */}
                <div className="w-1/3 h-5/6 bg-slate-100 shadow-lg m-2 inline-block">
                    <div className="text-green-400 text-2xl m-2 font-bold">Manual Settings</div>
                    {/* Media Pump */}
                    <div className="pt-[5%] flex m-2">  
                        <p className="text-xl pt-[.5%] pr-[2%]">Media Pump</p>
                        <Switch
                            {...label}
                            checked={checked}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Algae Pump */}
                    <div className="pt-[5%] flex m-2">  
                        <p className="text-xl pt-[.5%] pr-[3%]">Algae Pump</p>
                        <Switch
                            {...label}
                            checked={checked}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Drain 1 */}
                    <div className="pt-[5%] flex m-2">  
                        <p className="text-xl pt-[.5%] pr-[10.5%]">Drain 1</p>
                        <Switch
                            {...label}
                            checked={checked}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Drain 2 */}
                    <div className="pt-[5%] flex m-2">  
                        <p className="text-xl pt-[.5%] pr-[10.5%]">Drain 2</p>
                        <Switch
                            {...label}
                            checked={checked}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Concentration */}
                    <div className="flex justify-left pl-[2%] pt-[5%]">
                        <p className="text-xl pt-[1.5%] pr-[3%]">Concentration</p>
                        <Box sx={{ width: '50%' }}>
                            <FormControl fullWidth>
                                <Select
                                id="demo-simple-select"
                                value={age}
                                onChange={handleChangeAge}
                                >
                                <MenuItem value={25}>Twenty Five</MenuItem>
                                <MenuItem value={20}>Fifty</MenuItem>
                                <MenuItem value={30}>One Hundred</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default PanelSettings;