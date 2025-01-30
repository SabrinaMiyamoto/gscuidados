import { Box, Typography, Button } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import TransitionImage from "../assets/img/estetoscopio.jpeg";

const Hero = () => {
  // Função para rolar a página até a seção "about"
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" }); // Rola suavemente
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
      {/* Nome do Médico */}
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
          fontWeight: "regular",
          mb: 2,
        }}
      >
        Dr. Mauro Hideyuki Miyamoto
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
        {/* Especialidade em duas linhas */}
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
            color: "primary.main",
            lineHeight: "1.5", 
          }}
        >
          Cardiologista e Intensivista com <br />
          mais de 30 anos de experiência.
        </Typography>

        {/* Botão de ação */}
        <Button
          variant="outlined"
          color="primary"
          size="large"
          endIcon={<ArrowDownwardIcon />}
          onClick={scrollToAbout} // Adiciona a função ao clique do botão
          sx={{
            borderRadius: "8px", 
            textTransform: "none",
            fontSize: "1rem",
            px: 4,
            py: 1.5,
            "&:hover": { backgroundColor: "secondary.main" },
          }}
        >
          Saiba mais
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