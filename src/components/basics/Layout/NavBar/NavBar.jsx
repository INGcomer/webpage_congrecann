// React
import * as React from 'react';
// Components
import Button from '../../Button/Button'
// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
// css
import './NavBar.css'
// img
// import LOGO from './imgs/logo.svg'
import LOGO from './imgs/logo_oscuro.svg'

// const pages = ['Products', 'Pricing', 'Blog'];
const pages = [
  {texto: 'Entradas', link:'https://www.showstickets.ar/event/mendocann2025'},
  // {texto: 'B2B', link:'/B2B'},
  {texto: 'Expositores', link:'/expositores'},
  {texto: 'Disertantes', link:'/disertantes'},
  {texto: 'Asesoramiento', link:'https://asesoramiento-cannabis-m-d0xfxjf.gamma.site'},
  // {texto: 'Kit de Prensa', link:'https://drive.google.com/drive/folders/1mKhbZUikeKskgQl0pxv3UO3r0NF6och5?usp=sharing'}
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className='ResponsiveAppBar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 0 }}>
            <a href="/">
              <img src={LOGO} alt="" sx={{ p: 0 }} />
            </a>
          </Box>



          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.texto} onClick={handleCloseNavMenu}>
                  <a href={page.link}>
                  <Typography textAlign="center">{page.texto}</Typography>
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button className="customButtom" link={page.link} > {page.texto}  </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;