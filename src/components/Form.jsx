import { Box, TextField, Button, Typography, CircularProgress, Alert } from '@mui/material';
import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    idade: '',
    problemas_medicos: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Função para validar os campos
  const validate = () => {
    const newErrors = {};
    if (!formData.nome) newErrors.nome = "Nome é obrigatório";
    if (!formData.telefone || !/^\d{10,11}$/.test(formData.telefone)) {
      newErrors.telefone = "Telefone inválido";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }
    if (!formData.idade || formData.idade < 0) {
      newErrors.idade = "Idade inválida";
    }
    if (!formData.problemas_medicos) newErrors.problemas_medicos = "Campo obrigatório";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Função para enviar o formulário para o Formspree
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return; // Valida antes de enviar
    if (loading) return;

    setLoading(true);

    // Dados para enviar ao Formspree
    const formDataToSend = new FormData();
    formDataToSend.append("nome", formData.nome);
    formDataToSend.append("telefone", formData.telefone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("idade", formData.idade);
    formDataToSend.append("problemas_medicos", formData.problemas_medicos);

    try {
      const response = await fetch("https://formspree.io/f/xpwqbgvy", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSuccess(true);

        // Reseta o formulário após o envio
        setFormData({
          nome: '',
          telefone: '',
          email: '',
          idade: '',
          problemas_medicos: ''
        });
      } else {
        alert("Erro ao enviar. Tente novamente!");
      }
    } catch (error) {
      alert("Erro de conexão. Verifique sua internet.");
    }

    setLoading(false);
  };

  return (
    <Box id='form' sx={{ backgroundColor: '#86b5ce', minHeight: '100vh', p: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: { xs: '90%', sm: '400px' }, // Responsivo para telas pequenas
          padding: '2rem',
          backgroundColor: '#e2e2e3',
          borderRadius: 2,
          boxShadow: 3
        }}
      >
        <Typography variant="h5" sx={{ textAlign: 'center', mb: 2 }}>
          Formulário de Avaliação
        </Typography>

        {/* Mensagem de sucesso */}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Formulário enviado com sucesso!
          </Alert>
        )}

        {/* Campos do Formulário */}
        <TextField
          label="Nome"
          variant="outlined"
          required
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          error={!!errors.nome}
          helperText={errors.nome}
        />
        <TextField
          label="Telefone"
          variant="outlined"
          required
          value={formData.telefone}
          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
          error={!!errors.telefone}
          helperText={errors.telefone}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Idade"
          type="number"
          variant="outlined"
          required
          value={formData.idade}
          onChange={(e) => setFormData({ ...formData, idade: e.target.value })}
          error={!!errors.idade}
          helperText={errors.idade}
        />
        <TextField
          label="Problemas Médicos"
          variant="outlined"
          multiline
          rows={4}
          required
          value={formData.problemas_medicos}
          onChange={(e) => setFormData({ ...formData, problemas_medicos: e.target.value })}
          error={!!errors.problemas_medicos}
          helperText={errors.problemas_medicos}
        />

        {/* Botão de Envio */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Enviar"}
        </Button>
      </Box>
    </Box>
  );
};

export default Form;