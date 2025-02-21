import { Box, Typography, Button } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Logo from '../assets/img/imgs/logogsss.png'
import TransitionImage from "../assets/img/imgs/img11.jpg"

const Hero = () => {
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("interview");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box id='Hero'
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      {/* logo */}
      <Box
      component='img'
      src={Logo}
      alt="Logo da GS Agência de idosos"
      sx={{
        width: {xs: '100px', sm:'150px', md:'200px'},
        height:'auto',
        mb:2 
      }}>

      </Box>
      {/* Nome do Médico */}
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
          fontWeight: "regular",
          mb: 2,
        }}
      >
        Gs Agência de Cuidadores de Idosos
      </Typography>

      {/* Seção de Especialidade e Botão */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, 
          justifyContent: "space-around", 
          alignItems: "center",
          gap: { xs: 2, sm: "8rem" }, 
          width: "100%",
          padding: "1rem", 
        }}
      >
        {/* Especialidade  */}
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
            color: "primary.main",
            lineHeight: "1.5", 
          }}
        >
          Cuidados personalizado e compassivo para os <br></br>
          seus entes queridos, com uma
          <br></br>equipe de profissionais
          altamente treinada.
        </Typography>

        {/* Botão de ação */}
        <Button
          variant="outlined"
          color="primary"
          size="large"
          endIcon={<ArrowDownwardIcon />}
          onClick={scrollToAbout} 
          sx={{
            borderRadius: "8px", 
            textTransform: "none",
            fontSize: "1rem",
            px: 4,
            py: 1.5,
            "&:hover": { backgroundColor: "secondary.main" },
          }}
        >
          Nossos Serviços
        </Button>
      </Box>

      {/* Imagem de transição */}
      <Box
        component="img"
        src={TransitionImage}
        alt="Transição para a próxima seção"
        sx={{
          width: "100%",
          height: "38vh",
          objectFit: "cover",
          backgroundPosition: "bottom",
          mt: 4,
        }}
      />
    </Box>
  );
};

export default Hero;