
import { Box, Typography } from '@mui/material'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout>
      <Box 
        sx={{
          my: 12,
          mx: 20,
          textAlign: 'center',
          '& h4': {
            my: 2,
            fontWeight: 'bold'
          },
          '@media (max-width: 600px)': {
            mt: 5,
            mx: 5,
            '& h4': {
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }
          }
        }}
      >
        <Typography variant='h4'>Welcome To Plate & Palate</Typography>
        <p>Here every dish tells a story, and every bite is a journey of flavors. At the heart of our philosophy lies the perfect harmony between exquisite plating and the finest flavors, creating an unforgettable dining experience. We believe that great food is more than just a meal—it’s an art form. That’s why our chefs meticulously craft each dish to delight both your taste buds and your eyes. Whether you’re here for a casual gathering, a romantic evening, or a celebration, we strive to make every moment special.</p>
        <br />
        <p>At Plate & Palate, we are passionate about quality and creativity. We carefully source the freshest, locally grown ingredients to craft dishes that are wholesome, flavorful, and artful. Our talented chefs take pride in blending traditional recipes with modern techniques, ensuring a menu that caters to both adventurous and classic tastes.From vibrant appetizers to decadent desserts, every dish is thoughtfully prepared to ignite your palate and satisfy your soul. Beyond the food, our warm and inviting ambiance makes Plate & Palate the perfect spot for meaningful connections and cherished moments.</p>
        <br />
        <p>We are not just a restaurant; we are a destination where flavors tell stories, and every meal becomes a celebration of taste, art, and hospitality. So, sit back, relax, and let us take you on a journey of flavors you’ll remember long after your visit. Experience the essence of dining reimagined—where passion meets perfection, only at Plate & Palate.</p>
      </Box>
    </Layout>
  )
}

export default About
