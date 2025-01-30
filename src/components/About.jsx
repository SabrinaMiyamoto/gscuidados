import { Typography, Box } from "@mui/material";
import Mauro from '../assets/img/mauro.png';

const About = () => {
  return (
    <Box id='about'
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, 
        alignItems: { xs: "center", sm: "flex-end" }, 
        justifyContent: "space-between", 
        gap: { xs: 2, sm: 4 }, 
        width: "100%", 
        height: {sx:'103vh', sm:"59vh"}, 
        boxSizing: "border-box", 
        padding: 0, 
        margin: 0, 
      }}
    >
      {/* Texto */}
      <Box
        sx={{
          width: { xs: "100%", sm: "50%" }, 
          boxSizing: "border-box",
          padding: 0,
          margin: 0,
        }}
      >
        <Typography variant="h4" sx={{ margin: 1 }}>
          Sobre o Dr. Mauro 
        </Typography>
        <Typography variant="body1" sx={{ margin: 1, textAlign: "left" }}>
        Cardiologista formado pela renomada Escola Paulista de Medicina, atualmente conhecida como UNIFESP, Mauro é um pioneiro nos estudos sobre os benefícios dos exercícios físicos para a saúde cardiovascular. Seu trabalho inovador recebeu reconhecimento internacional e ele já foi entrevistado por sua contribuição exemplar à área.
        </Typography>
        <Typography variant="body1" sx={{ margin: 1, textAlign: "left" }}>
        Seus pacientes o descrevem como um profissional dedicado, atencioso e persistente, que se destaca por sua excelência no cuidado ao paciente.
        </Typography>
      </Box>

      {/* Imagem */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", 
          alignItems: "center", 
          boxSizing: "border-box", 
          padding: 0,
          margin: 0, 
        }}
      >
        <img
          src={Mauro}
          alt="Dr. Mauro"
          style={{
            width: "28rem",
            height: "59vh",
            maxWidth: "100%",
          }}
        />
      </Box>
    </Box>
  );
};

export default About;