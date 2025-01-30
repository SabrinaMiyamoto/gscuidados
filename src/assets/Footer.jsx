import { Box, Typography,  } from '@mui/material';

const Footer = () => {
  

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 3,
      }}
    >
   
      <Typography variant="body2" sx={{ textAlign: 'center', fontSize: '14px' }}>
        &copy; {new Date().getFullYear()} Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;