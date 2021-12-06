import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Container from 'components/Container';
import { Topbar, Sidebar, Footer, ThemeModeToggler } from './components';

import pages from '../navigation';

const Main = ({
  title,
  description,
  children,
  colorInvert = false,
  bgcolor = 'transparent',
}) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <Box>
      <Head>
        <title>{title ? `${title}` : 'DoctorAI'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>

      <Box bgcolor={bgcolor} position={'relative'} zIndex={theme.zIndex.appBar}>
        <Container paddingTop={'8px !important'} paddingBottom={'0 !important'}>
          <Box
            display={'flex'}
            justifyContent={'flex-end'}
            alignItems={'center'}
          >
            <Box marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/blocks"
                color={colorInvert ? 'common.white' : 'text.primary'}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                Components
                <Box
                  padding={0.5}
                  display={'inline-flex'}
                  borderRadius={1}
                  bgcolor={'primary.main'}
                  marginLeft={1}
                >
                  <Typography
                    variant={'caption'}
                    sx={{ color: 'common.white', lineHeight: 1 }}
                  >
                    new
                  </Typography>
                </Box>
              </Link>
            </Box>
            <Box marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/docs/introduction"
                color={colorInvert ? 'common.white' : 'text.primary'}
              >
                Docs
              </Link>
            </Box>
            <Box>
              <ThemeModeToggler />
            </Box>
          </Box>
        </Container>
      </Box>
      <AppBar
        position={'sticky'}
        sx={{
          top: 0,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={1}>
          <Topbar
            onSidebarOpen={handleSidebarOpen}
            pages={pages}
            colorInvert={trigger ? false : colorInvert}
          />
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string,
};

export default Main;
