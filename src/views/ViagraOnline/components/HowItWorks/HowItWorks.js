/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Image from 'next/image';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ServicesAccrodion from './ServicesAccrodion';
// import medicareImg from './images/medicare-card-large.jpeg';

const Features = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={4}>
            <Typography
              sx={{ fontWeight: 700 }}
              variant="h4"
              component="h2"
              gutterBottom
            >
              How to order
            </Typography>
            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              For all of your Viagra prescriptions online in Australia, simply
              download DoctorAI. Access the app to book an online GP appointment
              and get a Viagra prescription online.
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              Buy Viagra online in Australia today, the easy way, with expert,
              professional help from DoctorAI.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Box component={Card} boxShadow={4} height={1} width={1}>
            {/* <Image src={'/images/medicare-card-large.jpeg'} layout="fill" /> */}
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={300}
              image="/images/medicare-card-large.jpeg"
              // image={medicareImg}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
