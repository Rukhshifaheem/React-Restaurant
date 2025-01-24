
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import Layout from '../components/Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        my: 5,
        mx: 10,
        textAlign: 'center',
        '& h4': {
          my: 2,
          fontWeight: 'bold'
        },
        '@media (max-width: 600px)': {
            mt: 5,
            mx: 8,
            '& h4': {
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }
          }
      }}>
        <Typography variant='h4'>Contact Plate & Palate</Typography>
        <p>We’d love to hear from you! Whether you have a question, need assistance with a reservation, or simply want to share your experience, we’re here to help. At Plate & Palate, connecting with our guests is just as important as serving them exceptional food.</p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "700px",
          ml: 17,
          "@media (max-width:600px)": {
            width: "300px",
            ml: 7,
           },
          }}
      >
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell 
                sx={{ 
                  bgcolor: "black", 
                  color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color: 'red', pt: 1}} />0800-56565 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@plate&palate.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 111-849-849
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
