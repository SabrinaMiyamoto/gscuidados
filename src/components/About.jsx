import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const cardData = [
  {
    title: "Missão",
    content:
      "Ser uma referência em cuidados domiciliares, com compromisso na excelência do cuidado, oferecendo serviços humanizados e capacitados.",
  },
  {
    title: "Valores",
    content:
      "Eficiência, fazer sempre muito bem feito. Comprometimento, paixão por cuidar.",
  },
  {
    title: "Visão",
    content:
      "Gerar impacto no cuidado seguro e afetivo, proporcionando melhor experiência do cliente.",
  },
];

const About = () => {
  return (
    <Box id='about' display="flex" justifyContent="center" mt={4} height={'100%'} px={'0.5rem'} sx={{padding:'2rem', backgroundColor:'#86b5ce'}}>
      <Grid container spacing={3} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <motion.div
              initial={{ opacity: 0, x: -50 }} // Começar da esquerda
              whileInView={{ opacity: 1, x: 0 }} // Vai para a posição original
              transition={{ duration: 0.6, delay: index * 1 }} // Intervalo de 1s para cada animação
              viewport={{ once: true }} // Animação acontece apenas uma vez ao entrar na tela
            >
              <Card sx={{ height: "46vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: 2, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" display={'flex'} justifyContent={"center"} gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body1" textAlign="center">{card.content}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
