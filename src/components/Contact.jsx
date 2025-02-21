import { Container, Typography, Box, IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Logo from '../assets/img/imgs/logogsss.png';

const Contact = () => {
  // Função para abrir o WhatsApp
  const openWhatsApp = () => {
    window.open("https://wa.me/5548996172582", "_blank");
  };

  return (
    <Container id="contact" disableGutters sx={{ height: '100%', py: 4, px: 0.5 }}>
      {/* Título e seta para subir */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, marginBottom: 3, py: 2 }}>
        <Typography variant="h4">Contatos</Typography>
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

      {/* Conteúdo principal: Logo e Contatos */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: 2,
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        {/* Logo (Lado Esquerdo) */}
        <Box
          component="img"
          src={Logo}
          alt="Logo da GS Agência de Cuidados de Idosos"
          sx={{
            width: { xs: '150px', sm: '200px', md: '250px' },
            height: 'auto',
          }}
        />

        {/* Opções de Contato (Lado Direito) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          {/* Telefone com ícone do WhatsApp */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <WhatsAppIcon color="primary" />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Telefone
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ cursor: 'pointer' }} onClick={openWhatsApp}>
            (48) 99617-2582
          </Typography>

          {/* Instagram com ícone */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <InstagramIcon color="primary" />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Instagram
            </Typography>
          </Box>
          <Typography variant="body1">
            <a
              href="https://www.instagram.com/cuidadosgs/?igsh=YmdvaTdiOGsxYm0z"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              @cuidadosgs
            </a>
          </Typography>

          {/* Endereço com ícone */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOnIcon color="primary" />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Endereço
            </Typography>
          </Box>
          <Typography variant="body1">
            AV Paulo Robertovidal, 1455, Bela Vista, Palhoça, SC
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;