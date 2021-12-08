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
              How to get a Doctor’s Certificate Online?
            </Typography>
            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              To get a doctor’s certificate online - simply download the
              DoctorAI and book your online GP appointment. Your online GP can
              provide a medical certificate online or doctor’s certificate
              online to suit your medical needs. The medical certificate will be
              emailed to you at the conclusion of the consultation instantly.{' '}
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              There’s no need for extended wait periods or delaying your medical
              appointments. Receive your online medical certificates, via email,
              when you choose to consult DoctorAI.
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              To discuss your medical certificate needs with your online GP,
              simply download the DoctorAI app.{' '}
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              Access the app by jumping online and you will receive your online
              medical certificate — dated from the day of your online doctor’s
              appointment.{' '}
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              You’ll feel better, sooner, when you download the DoctorAI app to
              make use of our prompt, professional and reliable medical
              treatment today.
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              We know you’ll be satisfied with our online doctor’s certificate
              services. In fact, if for any reason you’re not completely
              satisfied, or if, for whatever reason, your request can’t be
              completed online, we’ll issue a full refund*.
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              That’s our promise.
            </Typography>
          </Box>
          <Box>
            <Typography
              variant={'body2'}
              component={'p'}
              color={'text.secondary'}
            >
              *if private consultation fees have been paid
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
