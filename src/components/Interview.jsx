import { Container, Typography, Box, Grid } from "@mui/material";
import { House, Favorite, LocalHospital, DirectionsCar } from '@mui/icons-material';
import Heart from '../assets/img/imgs/img1.jpeg';

const Interview = () => {
  return (
    <Container id='servicos' sx={{ padding: 5, height: '100%' }} disableGutters>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box sx={{ padding: 2 }}>
            <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
              Nossos serviços
            </Typography>

            <Grid container spacing={4}>
              {/* Cuidados Domiciliares */}
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <House sx={{ fontSize: 40, marginRight: 1 }} />
                  <Typography variant="h5">Cuidados Domiciliares</Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  Assistência com tarefas diárias como banho, vestir-se, alimentação e medicação.
                </Typography>
              </Grid>

              {/* Acompanhamento Médico */}
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <Favorite sx={{ fontSize: 40, marginRight: 1 }} />
                  <Typography variant="h5">Acompanhamento Médico</Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  Acompanhamento de consultas, exames e administração de medicamentos.
                </Typography>
              </Grid>

              {/* Cuidados Hospitalares */}
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <LocalHospital sx={{ fontSize: 40, marginRight: 1 }} />
                  <Typography variant="h5">Cuidados Hospitalares</Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  Disponibilizamos cuidadores a realizar acompanhamento hospitalar.
                </Typography>
              </Grid>

              {/* Transporte */}
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <DirectionsCar sx={{ fontSize: 40, marginRight: 1 }} />
                  <Typography variant="h5">Transporte</Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  Auxílio no deslocamento para compromissos e passeios.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Imagem ao lado dos cards */}
        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
        <img
            src={Heart}
            alt="coração"
            style={{
              width: "100%",  // Ajusta a largura para ocupar 100% do grid
              maxWidth: "400px",  // Tamanho máximo para evitar que fique muito grande
              height: "auto",  // Ajusta a altura automaticamente para manter a proporção
              borderRadius: "8px",
              objectFit: "cover",  // Mantém a proporção da imagem sem distorção
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Interview;
