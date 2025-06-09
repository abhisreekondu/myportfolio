import React, { useState, useEffect } from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem,
  Container, Avatar, Button, Tooltip
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Home', 'Education', 'Skills', 'Projects', 'Contact'];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [activePage, setActivePage] = useState('Home');

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setActivePage(id), 300); // Delay to avoid scroll event overriding
    }
    handleCloseNavMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let closestPage = null;
      let closestDistance = Infinity;

      for (const page of pages) {
        const el = document.getElementById(page.toLowerCase());
        if (el) {
          const top = el.offsetTop;
          const distance = Math.abs(scrollPosition - (top + el.offsetHeight / 2));
          if (distance < closestDistance) {
            closestDistance = distance;
            closestPage = page;
          }
        }
      }

      if (closestPage) {
        setActivePage(closestPage);
      }

      if (window.scrollY < 100) {
        setActivePage('Home');
      }

      const bottomThreshold = 100;
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - bottomThreshold
      ) {
        setActivePage('Contact');
      }
    };

    handleScroll(); // Initial run
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(15, 15, 43, 0.6)',
        backdropFilter: 'blur(10px)',
        zIndex: 1100,
      
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#fff' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#hero"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            ABHI SREE
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => scrollToSection(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Title */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#hero"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            ABHI SREE
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => scrollToSection(page)}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  borderBottom: activePage === page ? '2px solid white' : '2px solid transparent',
                  borderRadius: 0,
                  fontWeight: activePage === page ? 'bold' : 'normal',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Profile Avatar */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Profile" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
