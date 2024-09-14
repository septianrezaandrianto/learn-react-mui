import { Typography } from '@mui/material'
import React from 'react'
const TypographyLearn = () => {
    return (
        <div>
            <Typography>
                Ini text pertama
            </Typography>

            <Typography 
                variant='h3' 
                sx={{
                    textAlign : 'center',
                    color : 'red',
                    mt: 5, 
                    mb: 3,
                    border : '2px solid'
                }}
            >
                Ini text kedua
            </Typography>

            <Typography 
                variant='body1' 
                sx ={{
                    fontFamily : '"Segoe UI Symbol"',
                    fontSize : '18px',
                    fontStyle : 'italic'
                }}
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s......
            </Typography>
        </div>
    )
}
export default TypographyLearn