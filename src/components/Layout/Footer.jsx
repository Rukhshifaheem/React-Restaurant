import { Box, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
      <Box sx={{textAlign:'center', bgcolor:'#1A1A19', color:'white', p:3}}>
        <Box sx={{my:3, '& svg': {
                fontSize: '60px',
                cursor: 'pointer',
                mr: 2,
            },
            '& svg:hover': {
                color: 'goldenrod',
                transform: 'rotate(360deg)',
                transition: 'all 2s',
            }
        }}>
            <InstagramIcon />
            <XIcon />
            <GitHubIcon />
            <YouTubeIcon />
        </Box>
        <Typography 
            variant="h5" 
            sx={{
                '@media (max-width: 600px)':{
                    fontSize: '1rem',
                }
            }}
        >
            All Rights Reserved &copy; My Restaurant
        </Typography>
      </Box>
    </>
  )
}

export default Footer
