import { Container, Typography, Box, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Contact = () => {
  return (
    <Container id="contact" disableGutters sx={{ height: '100%', backgroundColor:'#aabec2' }}>

      {/* Título e seta para subir */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, marginBottom: 3, py:2 }}>
        <Typography variant="h4">Endereço de Atendimento</Typography>
        <IconButton
          onClick={() => window.scrollTo(0, 0)}
          color="primary"
          sx={{
            fontSize: 30,
            backgroundColor: "#e9eef7",
            '&:hover': {
              backgroundColor: 'primary.dark',
            }
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "row",
          gap: 5,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap", 
        }}
      >
        {/* Box da primeira localização */}
        <Box sx={{ marginTop: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOnIcon color="primary" />
            <Typography variant="h4">Consultório Médico</Typography>
          </Box>

          {/* Mapa com texto sobreposto */}
          <Box sx={{ position: "relative", width: 400, height: 300 }}>
            {/* iFrame do Google Maps para a primeira localização */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.984801579182!2d-46.33436852374848!3d-23.96097757639678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce030e79a3b2ef%3A0x4572795d697df00b!2sR.%20Goi%C3%A1s%2C%20225%20-%20Boqueir%C3%A3o%2C%20Santos%20-%20SP%2C%2011050-101!5e0!3m2!1spt-BR!2sbr!4v1738241531255!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Texto sobreposto */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: 2,
              }}
            >
              <Typography variant="h6">Consultório Médico</Typography>
              <Typography variant="body2">Rua Goiás - 225, Cj. 51</Typography>
              <Typography variant="body2">Gonzaga - Santos/SP</Typography>
              <Typography variant="body2">Telefone: (13) 3284-8971</Typography>
              <Typography variant="body2">
                <a
                  href="https://www.google.com/maps/place/R.+Goi%C3%A1s,+225+-+Boqueir%C3%A3o,+Santos+-+SP,+11050-101"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#13c21c", textDecoration: "none", fontWeight: "400" }}
                >
                  Ver mais no mapa
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Box da segunda localização */}
        <Box sx={{ marginTop: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOnIcon color="primary" />
            <Typography variant="h4">Hospital Ana Costa</Typography>
          </Box>

          {/* Mapa com texto sobreposto */}
          <Box sx={{ position: "relative", width: 400, height: 300 }}>
            {/* iFrame do Google Maps para a segunda localização */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.0881630838967!2d-46.33613492374882!3d-23.95732237626023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce03a3fe60145b%3A0x84abe2a98126981d!2sHospital%20Ana%20Costa!5e0!3m2!1spt-BR!2sbr!4v1738243254061!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Texto sobreposto */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: 2,
              }}
            >
              <Typography variant="h6">Hospital Ana Costa</Typography>
              <Typography variant="body2">R. Pedro Américo, 60</Typography>
              <Typography variant="body2">Campo Grande - Santos/SP</Typography>
              <Typography variant="body2">Telefone: (13) 3228-9000</Typography>
              <Typography variant="body2">
                <a
                  href="https://www.google.com/maps/place/Hospital+Ana+Costa/@-23.95732237626023,-46.33613492374882,17z/data=!3m1!4b1!4m8!3m7!1s0x94ce03a3fe60145b%3A0x84abe2a98126981d!8m2!3d-23.957322!4d-46.334134!9m1!1b1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#13c21c", textDecoration: "none", fontWeight: "400" }}
                >
                  Ver mais no mapa
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
