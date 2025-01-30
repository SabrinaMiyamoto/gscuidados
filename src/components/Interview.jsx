import { Container, Typography, Box } from "@mui/material";
import Heart from '../assets/img/heart.jpeg'


const Interview = () => {
  return (
    <Container id='interview' sx={{ padding:5, backgroundColor: "#aabec2", display:'flex', flexDirection:'row-reverse'}} disableGutters>
      <Box sx={{ padding:2 } }>
      <Typography variant="h4" gutterBottom>
        Destaque da Entrevista
      </Typography>
      <Typography variant="body1" paragraph>
          O Dr. Mauro Hideyuki Miyamoto foi pioneiro em discutir como o exercício físico pode melhorar a saúde do coração. Em seu trabalho de conclusão de curso, ele foi entrevistado sobre este tema inovador. Embora a entrevista não esteja disponível online, o conteúdo continua relevante e é uma das bases para sua atuação na cardiologia.
        </Typography>
      </Box>
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={Heart}
            alt="coração"
            style={{
              width: "30vw",
              height: "24vh",
              borderRadius: "8px", 
            }}
          />
        </Box>
    </Container>
  );
};

export default Interview;
