import { Box } from '@mui/material'


const Header = () => {
  return (
    <div>
       <Box sx={{  margin: 0, padding: 1 }}>

       <div className="nav-bar">
        <a href='#about' style={{ marginRight: '10px', color: 'inherit', textDecoration: 'none' }}>
          Sobre
        </a>
        <a href='#interview' style={{ marginRight: '10px', color: 'inherit', textDecoration: 'none' }}>
          Nossos Serviços
        </a>
        <a href='#reviews' style={{ marginRight: '10px', color: 'inherit', textDecoration: 'none' }}>
          Avaliações
        </a>
        <a href="#contact" style={{ marginRight: '10px', color: 'inherit', textDecoration: 'none' }}>
        Locais de atendimento
        </a>
        <a href="#form" style={{ marginRight: '10px', color: 'inherit', textDecoration: 'none' }}>
        Avaliação
        </a>
      </div>
        </Box>

    </div>
  )
}

export default Header
