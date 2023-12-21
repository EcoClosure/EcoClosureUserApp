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

    const [nutrition, setNutrition] = React.useState('');
    const [p1Drain, setp1Drain] = React.useState('')
    const [p2Drain, setp2Drain] = React.useState('')
    const [concentration, setConcentration] = React.useState('')

    const handlenutrition = (event) => {
      setNutrition(event.target.value);
    };

    const handlep1Drain = (event) => {
        setp1Drain(event.target.value);
    };

    const handlep2Drain = (event) => {
        setp2Drain(event.target.value);
    };

    const handleconcentration = (event) => {
        setConcentration(event.target.value);
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
                        <p className="text-xl pt-[2%] pr-[2%]">Auto Nutrition</p>
                        <Box sx={{ width: '50%' }}>
                            <FormControl fullWidth>
                                <Select
                                id="demo-simple-select"
                                value={nutrition}
                                onChange={handlenutrition}
                                >
                                <MenuItem value={25}>Once per week</MenuItem>
                                <MenuItem value={20}>Once per two weeks</MenuItem>
                                <MenuItem value={30}>Once per month</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                    {/* Drain Panel 1 */}
                    <div className="pt-[5%] flex m-2">  
                        <p className="text-xl pt-[2%] pr-[4%]">Panel 1 Drain</p>
                        <Box sx={{ width: '50%' }}>
                            <FormControl fullWidth>
                                <Select
                                id="demo-simple-select"
                                value={p1Drain}
                                onChange={handlep1Drain}
                                >
                                <MenuItem value={25}>Drain 100%</MenuItem>
                                <MenuItem value={20}>Drain 50%</MenuItem>
                                <MenuItem value={30}>Drain 25%</MenuItem>
                                <MenuItem value={0}>No Drain</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                    {/* Drain 2 */}
                    <div className="pt-[5%] flex m-2">  
                        <p className="text-xl pt-[2%] pr-[4%]">Panel 2 Drain</p>
                        <Box sx={{ width: '50%' }}>
                            <FormControl fullWidth>
                                <Select
                                id="demo-simple-select"
                                value={p2Drain}
                                onChange={handlep2Drain}
                                >
                                <MenuItem value={25}>Drain 100%</MenuItem>
                                <MenuItem value={20}>Drain 50%</MenuItem>
                                <MenuItem value={30}>Drain 25%</MenuItem>
                                <MenuItem value={0}>No Drain</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                    {/* Concentration */}
                    <div className="flex justify-left pl-[2%] pt-[5%]">
                        <p className="text-xl pb-[.5%] pr-[2%]">
                            <span>Auto Harvest </span>
                            <br/>
                            <span>Concentration</span>
                        </p>
                        
                        <Box sx={{ width: '50%' }}>
                            <FormControl fullWidth>
                                <Select
                                id="demo-simple-select"
                                value={concentration}
                                onChange={handleconcentration}
                                >
                                <MenuItem value={25}>25%</MenuItem>
                                <MenuItem value={50}>50%</MenuItem>
                                <MenuItem value={100}>100%</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>

                    <div className="flex justify-center pt-[5%]">
                        <Button 
                            variant="contained"
                            sx={{width: '95%', background: '#52af77'}}
                        
                        >Submit</Button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default PanelSettings;