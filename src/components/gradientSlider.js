'use client';

import { useState, useEffect } from "react";
import { Slider } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledThumb = styled("span")(({ theme }) => ({
   width: 40,
   height: 40,
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   fontSize: "1.5rem",
}));


const GradientSlider = () => {
   const [value, setValue] = useState(5);
   const [isClient, setIsClient] = useState(false);
   // const [emoji, setEmoji] = useState("🤩");
   const getEmoji = () => {
      if (value === 1) return ("😡"); // Angry
      else if (value === 2) return ("😐"); // Neutral
      else if (value === 3) return ("🙂"); // Slightly happy
      else if (value === 4) return ("😊"); // Happy
      else return ("🤩"); // Excited
   };

   useEffect(() => {
      setIsClient(true);
   }, []);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };


   if (!isClient) return null; // Avoid rendering on the server
   return (
      <div className="w-full flex justify-center">
         <div className="relative w-full">
            {/* <div className="absolute top-1/2 z-50 left-0 w-full h-2 rounded-full" style={gradientBackground}></div> */}
            <div className="mt-2 text-3xl">
               {/* {getEmoji(value)} */}
               <Slider
                  value={value}
                  onChange={handleChange}
                  aria-label="Gradient Slider"
                  min={1}
                  max={5}
                  sx={{
                     '& .MuiSlider-rail': {
                        // width: 20,
                        height: 10,
                        background: 'none',
                        transform: "translateY(100%)",
                        // border: '2px solid black',
                     },
                     '& .MuiSlider-track': {
                        // width: 20,
                        // height: 0,
                        background: 'none',
                        // transform: "translateY(-50%)",
                        border: 'none',
                     },
                     '& .MuiSlider-thumb': {
                        width: 40,
                        height: 40,
                        backgroundColor: 'transparent',
                        border: 'none',
                        fontSize: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                     },
                  }}
                  slots={{
                     thumb: () => <>{getEmoji()}</>,
                  }}
               />
            </div>
            <div className="mt-2 text-3xl">
               {/* {getEmoji(value)} */}
               <Slider
                  value={value}
                  onChange={handleChange}
                  aria-label="Gradient Slider"
                  min={1}
                  max={5}
                  sx={{
                     '& .MuiSlider-rail': {
                        // width: 20,
                        height: 10,
                        background: 'linear-gradient(to right, red, orange, yellow, green)',
                        // transform: "translateY(-50%)",
                        // border: '2px solid black',
                     },
                     '& .MuiSlider-track': {
                        // width: 20,
                        // height: 0,
                        background: 'none',
                        // transform: "translateY(-50%)",
                        border: 'none',
                     },
                     '& .MuiSlider-thumb': {
                        backgroundColor: 'transparent',
                        border: 'none',
                        fontSize: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                     },
                  }}
               // slots={{
               //    thumb: (props) => <StyledThumb {...props}>{getEmoji}</StyledThumb>,
               // }}
               />
            </div>
            {/* {value} */}
         </div>
      </div>
   );
};

export default GradientSlider;