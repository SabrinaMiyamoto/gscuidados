import { Box, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    idade: '',
    problemas_medicos: ''
  });

  // Função para gerar o link do WhatsApp com os dados
  const generateWhatsAppLink = () => {
    const { nome, telefone, email, idade, problemas_medicos } = formData;
    const message = `*Formulário de Avaliação*%0A%0A*Nome*: ${nome}%0A*Telefone*: ${telefone}%0A*Email*: ${email}%0A*Idade*: ${idade}%0A*Problemas Médicos*: ${problemas_medicos}`;
    const whatsappLink = `https://wa.me/55[seu-número]?text=${message}`;
    return whatsappLink;
  };

  // Função para enviar o formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // Aqui você pode integrar com o Google Forms (já configurado no seu código)
    // Agora, ao enviar o formulário, também gera o link do WhatsApp
    const whatsappLink = generateWhatsAppLink();
    window.open(whatsappLink, '_blank'); // Abre o link do WhatsApp em uma nova aba
  };

  return (
    <Box id='form' sx={{ backgroundColor: '#86b5ce', height: '100%', p: 4, display: 'flex', alignItems: 'center' }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        action="https://docs.google.com/forms/d/e/[form-id]/formResponse" // URL do Google Forms
        method="POST"
        target="_self"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: '400px',
          margin: '0 auto',
          padding: '2rem',
          backgroundColor: '#e2e2e3'
        }}
      >
        <Typography variant="h5" sx={{ textAlign: 'center', mb: 2 }}>
          Formulário de Avaliação
        </Typography>

        {/* Campos do Formulário */}
        <TextField
          label="Nome"
          name="entry.XXXXXX" // Substitua com o nome do campo do Google Forms
          variant="outlined"
          required
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
        />
        <TextField
          label="Telefone"
          name="entry.XXXXXX" // Substitua com o nome do campo do Google Forms
          variant="outlined"
          required
          value={formData.telefone}
          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
        />
        <TextField
          label="Email"
          name="entry.XXXXXX" // Substitua com o nome do campo do Google Forms
          type="email"
          variant="outlined"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextField
          label="Idade"
          name="entry.XXXXXX" // Substitua com o nome do campo do Google Forms
          type="number"
          variant="outlined"
          required
          value={formData.idade}
          onChange={(e) => setFormData({ ...formData, idade: e.target.value })}
        />
        <TextField
          label="Problemas Médicos"
          name="entry.XXXXXX" // Substitua com o nome do campo do Google Forms
          variant="outlined"
          multiline
          rows={4}
          required
          value={formData.problemas_medicos}
          onChange={(e) => setFormData({ ...formData, problemas_medicos: e.target.value })}
        />

        {/* Botão de Envio */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
