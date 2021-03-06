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
              Take control of your mental health
            </Typography>
            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              If you are experiencing depression, anxiety, trauma and abuse,
              stress, addiction and relationship issues, you can take control of
              mental health at
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              DoctorAI is the easiest and fastest way to get talking with a
              psychologist.
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              All you need to do to get started is download the DoctorAI app.
              From there, you???ll talk with our team, and after our consult, we
              can refer you to an online psychologist consultation for an
              appointment that day.
            </Typography>
          </Box>
          <Box>
            <ServicesAccrodion />
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

      {/* row 2 */}
      <Grid
        container
        mt={5}
        spacing={4}
        direction={isMd ? 'row' : 'column-reverse'}
      >
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
        <Grid item xs={12} md={6}>
          <Box marginBottom={4}>
            <Typography
              sx={{ fontWeight: 700 }}
              variant="h4"
              component="h2"
              gutterBottom
            >
              Online psychologist available to you
            </Typography>
            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              How can you benefit from an online psychologist consultation?
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              Secure and secure, DoctorAI offers referrals with online
              psychologists across Australia to suit your needs. It's the most
              convenient way to see a psychologist at a time and place that
              suits you - and it's as equally valid as any medical referral that
              you would have in-person at a clinic.
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              The mental health support you need, in the comfort of your own
              home - our service is all about making the best healthcare
              services available to you. Get started with DoctorAI for your
              psychologist referral today.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
