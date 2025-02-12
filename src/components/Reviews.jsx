import { Container, Card, CardContent, Typography, Rating, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Maria, 78 anos",
    rating: 5,
    comment: `"Minha cuidadora é atenciosa e carinhosa. Ela me ajuda a me sentir segura e independente em minha própria casa.""`,
  },
  {
    name: "José, 82 anos",
    rating: 5,
    comment: `"A equipe da GS Agência é profissional e confiável. Eu me sinto muito bem cuidado e valorizado."`,
  },
  {
    name: "Ana, 75 anos",
    rating: 5,
    comment: `"Minha família e eu estamos muito satisfeitos com os serviços prestados. Nosso cuidador se tornou parte da nossa família."`,
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
    <Container id='reviews' sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center",  backgroundColor:'#86b5ce'}}>
      <Box sx={{ width: { xs: "100%", md: "50%" }, padding: 3 }}>
        <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: "bold", mb: 4 }}>
          Avaliações
        </Typography>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <Card key={index} sx={{ padding: 3, height: "520px", display: "flex", flexDirection: "column", justifyContent: "center", boxShadow: 3, borderRadius: 2, backgroundColor: "#fff", transition: "transform 0.3s ease-in-out", '&:hover': { transform: "scale(1.02)" } }}>
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
                  <Typography variant="body1">Gentileza:</Typography>
                  <Rating name="gentileza" value={5} readOnly size="small" sx={{ mb: 1 }} />
                  <Typography variant="body1">Recomendação:</Typography>
                  <Rating name="recomendacao" value={5} readOnly size="small" sx={{ mb: 1 }} />
                  <Typography variant="body1">Confiabilidade:</Typography>
                  <Rating name="confiabilidade" value={5} readOnly size="small" sx={{ mb: 1 }} />
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