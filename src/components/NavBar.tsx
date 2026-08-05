import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useScrollTrigger, Slide } from '@mui/material';
import { navbarStyles } from '../theme/styles/navbar.styles';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HideOnScroll>
      <AppBar position="fixed" sx={navbarStyles.appBar(scrolled)}>
        <Toolbar sx={navbarStyles.toolbar}>
          <Typography
            variant="h6"
            component="div"
            sx={navbarStyles.logo}
            onClick={() => scrollToSection('hero')}
          >
            Sam Wiley
          </Typography>
          <Box sx={navbarStyles.navButtons}>
            <Button sx={navbarStyles.navButton} onClick={() => scrollToSection('about')}>
              About
            </Button>
            <Button sx={navbarStyles.navButton} onClick={() => scrollToSection('projects')}>
              Projects
            </Button>
            <Button sx={navbarStyles.navButton} onClick={() => scrollToSection('experience')}>
              Experience
            </Button>
            <Button sx={navbarStyles.navButton} onClick={() => scrollToSection('education')}>
              Education
            </Button>
            <Button sx={navbarStyles.navButton} onClick={() => scrollToSection('contact')}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default NavBar;