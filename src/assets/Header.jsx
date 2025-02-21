import { useState } from "react";
import { Box } from "@mui/material";
import FormModal from "../components/FormModal"

const Header = () => {
  const [open, setOpen] = useState(false); // Estado do modal

  return (
    <>
      <Box sx={{ margin: 0, padding: 1 }}>
        <div className="nav-bar">
          <a href="#about" style={{ marginRight: "10px", color: "inherit", textDecoration: "none" }}>
            Sobre
          </a>
          <a href="#servicos" style={{ marginRight: "10px", color: "inherit", textDecoration: "none" }}>
            Nossos Serviços
          </a>
          <a href="#reviews" style={{ marginRight: "10px", color: "inherit", textDecoration: "none" }}>
            Avaliações
          </a>
          <a href="#contact" style={{ marginRight: "10px", color: "inherit", textDecoration: "none" }}>
            Contatos
          </a>
          <a href="#form" style={{ marginRight: "10px", color: "inherit", textDecoration: "none" }}>
            Avaliação Gratuita
          </a>
          {/* "Trabalhe Conosco" sem fundo, como um link normal */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault(); // Evita a navegação padrão
              setOpen(true); // Abre o modal
            }} 
            style={{ color: "inherit", textDecoration: "none", marginRight: "10px", cursor: "pointer" }}
          >
            Trabalhe Conosco
          </a>
        </div>
      </Box>

      {/* Renderiza o modal e controla o estado via props */}
      <FormModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
