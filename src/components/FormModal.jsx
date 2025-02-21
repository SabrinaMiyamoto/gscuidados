import { useState } from "react";
import { Modal, Box, TextField, Button, Typography, Alert, CircularProgress } from "@mui/material";

const FormModal = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null,
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [fileError, setFileError] = useState(""); // Estado para erros de arquivo

  // Fecha o modal e reseta o estado
  const handleClose = () => {
    setOpen(false);
    setSuccess(false);
    setErrors({});
    setFileError("");
    setFormData({ name: "", email: "", phone: "", message: "", file: null });
  };

  // Validação dos campos
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Nome é obrigatório";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }
    if (!formData.phone || !/^\d{10,11}$/.test(formData.phone)) {
      newErrors.phone = "Telefone inválido";
    }
    if (!formData.message) newErrors.message = "Mensagem é obrigatória";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Atualiza os dados do formulário
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Limpa o erro ao digitar
  };

  // Atualiza o arquivo anexado
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Verifica o tipo do arquivo
      if (file.type === "application/pdf" || file.type.includes("word")) {
        // Verifica o tamanho do arquivo (limite de 10 MB)
        if (file.size <= 10 * 1024 * 1024) { // 10 MB em bytes
          setFormData({ ...formData, file });
          setFileError(""); // Limpa o erro de arquivo
        } else {
          setFileError("O arquivo deve ter no máximo 10 MB.");
        }
      } else {
        setFileError("Por favor, envie um arquivo PDF ou DOC.");
      }
    }
  };

  // Envio do formulário para o Formspree
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return; // Valida antes de enviar
    if (loading) return;

    // Verifica se há erro no arquivo
    if (fileError) {
      return; // Impede o envio se houver erro no arquivo
    }

    setLoading(true);
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("message", formData.message);
    if (formData.file) {
      formDataToSend.append("file", formData.file);
    }

    try {
      const response = await fetch("https://formspree.io/f/xgvodjgl", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json", // Cabeçalho recomendado pelo Formspree
        },
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "", file: null });
      } else {
        const errorData = await response.json(); // Captura o erro retornado pelo Formspree
        console.error("Erro ao enviar:", errorData);
        setErrors({ submit: "Erro ao enviar. Tente novamente!" });
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
      setErrors({ submit: "Erro de conexão. Verifique sua internet." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: 400 }, // Responsivo para telas pequenas
          maxWidth: "100%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Trabalhe Conosco
        </Typography>

        {/* Mensagem de sucesso */}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Mensagem enviada com sucesso!
          </Alert>
        )}

        {/* Mensagem de erro no envio */}
        {errors.submit && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errors.submit}
          </Alert>
        )}

        {/* Mensagem de erro no arquivo */}
        {fileError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {fileError}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nome"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            error={!!errors.name}
            helperText={errors.name}
            required
          />
          <TextField
            fullWidth
            label="E-mail"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            error={!!errors.email}
            helperText={errors.email}
            required
          />
          <TextField
            fullWidth
            label="Telefone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            margin="normal"
            error={!!errors.phone}
            helperText={errors.phone}
            required
          />
          <TextField
            fullWidth
            label="Mensagem"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            error={!!errors.message}
            helperText={errors.message}
            required
          />

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button onClick={handleClose} color="error">
              Fechar
            </Button>
            <Button type="submit" variant="contained" color="primary" disabled={loading}>
              {loading ? <CircularProgress size={24} /> : "Enviar"}
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default FormModal;