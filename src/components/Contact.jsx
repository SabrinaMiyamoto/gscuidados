import { Container, Typography, Box, IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Logo from '../assets/img/imgs/logogsss.png';

const Contact = () => {
  return (
    <Container id="contact" disableGutters sx={{ height: '100%', py: 4, px: 0.5 }}> {/* Adicionado px: 0.5 para margem lateral */}
      {/* Título e seta para subir */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, marginBottom: 3, py: 2 }}>
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

      {/* Conteúdo principal: Logo e Contatos */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly', // Distribui o espaço entre a logo e os contatos
          alignItems: 'center',
          gap: 2, // Reduzi o gap para deixar os elementos mais próximos
          flexDirection: { xs: 'column', sm: 'row' }, // Responsivo: coluna em mobile, linha em desktop
        }}
      >
        {/* Logo (Lado Esquerdo) */}
        <Box
          component="img"
          src={Logo}
          alt="Logo da GS Agência de Cuidados de Idosos"
          sx={{
            width: { xs: '150px', sm: '200px', md: '250px' }, // Ajuste o tamanho conforme necessário
            height: 'auto',
          }}
        />

        {/* Opções de Contato (Lado Direito) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1, // Reduzi o gap entre os itens de contato
            textAlign: { xs: 'center', sm: 'left' }, // Centralizado em mobile, alinhado à esquerda em desktop
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Telefone
          </Typography>
          <Typography variant="body1">
            (48) 99617-2582
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Instagram
          </Typography>
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

          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Endereço
          </Typography>
          <Typography variant="body1">
            AV Paulo Robertovidal, 1455, Bela Vista, Palhoça, SC
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;