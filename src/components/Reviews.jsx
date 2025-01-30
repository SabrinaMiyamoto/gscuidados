import { Container, Card, CardContent, Typography, Rating, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Mariana Tannus",
    rating: 5,
    comment: `"O melhor cardiologista que já conheci. Salvou minha irmã com 2% de chance de sobreviver de uma embolia pulmonar. Um médico como não existe mais."`,
  },
  {
    name: "Rossano",
    rating: 5,
    comment: `"Muito bom atendimento, ele é dedicado e sempre esclarece todas as dúvidas."`,
  },
  {
    name: "Fernanda Oliveira",
    rating: 5,
    comment: `"Excelente profissional, me senti muito segura com o atendimento dele."`,
  },
  {
    name: "Carlos Mendes",
    rating: 5,
    comment: `"Ótimo médico, muito atencioso e pontual. Recomendo!"`,
  },
];

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Container id='reviews' sx={{ height: "70vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Box sx={{ width: { xs: "100%", md: "50%" }, padding: 3 }}>
        <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: "bold", mb: 4 }}>
          Avaliações
        </Typography>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <Card key={index} sx={{ padding: 3, height: "50vh", display: "flex", flexDirection: "column", justifyContent: "center", boxShadow: 3, borderRadius: 2, backgroundColor: "#fff", transition: "transform 0.3s ease-in-out", '&:hover': { transform: "scale(1.02)" } }}>
              <CardContent>
                <Typography variant="h4" sx={{  fontWeight: "bold", mb: 2 }}>
                  {review.name}
                </Typography>
                <Rating name="read-only" value={5} readOnly sx={{ mb: 2 }} />
                <Typography variant="body2" paragraph sx={{ fontStyle: "italic", mb: 3 }}>
                  {review.comment}
                </Typography>

                {/* Adicionando categorias de avaliação, todas com 5 estrelas */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography variant="body1" >Simpatia:</Typography>
                  <Rating name="simpatia" value={5} readOnly size="small" sx={{ mb: 1 }} />
                  <Typography variant="body1">Atendimento:</Typography>
                  <Rating name="atendimento" value={5} readOnly size="small" sx={{ mb: 1 }} />
                  <Typography variant="body1">Recomendação:</Typography>
                  <Rating name="recomendacao" value={5} readOnly size="small" sx={{ mb: 1 }} />
                  <Typography variant="body1">Pontualidade:</Typography>
                  <Rating name="pontualidade" value={5} readOnly size="small" sx={{ mb: 1 }} />
                </Box>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default Reviews;