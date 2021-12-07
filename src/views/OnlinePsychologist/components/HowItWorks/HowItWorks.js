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
              How it works
            </Typography>
            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              The best way to get online scripts in Australia and online doctor
              prescriptions in Australia via an app is DoctorAI. Simply download
              the DoctorAI app in minutes. Book your online doctor appointment
              for an online prescription consultation. All the prescriptions
              will be emailed to you at the end of the consultation.
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              There’s no need for you or your loved ones to undergo extended
              wait periods. Better yet, there’s no delaying your important
              medical appointments. To consult with the online doctor in
              Australia, simply download the DoctorAI app, access the app and
              you will receive prompt, professional and trusted medical
              treatment today.
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              We feel certain that you will be completely satisfied with our
              online doctor services. Our online doctor is as thorough, careful
              and professional as visiting a doctor, in person. In fact, if for
              any reason you’re not 100% satisfied, or if your request can’t be
              completed online, we’ll issue a full refund*.
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              That’s our promise to all of our valued patients.
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            ></Typography>
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
              Repeat Prescriptions
            </Typography>
            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              DoctorAI offers repeat prescriptions when you book your online
              doctor prescription Australia consultation.
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              There’s no need for you or your loved ones to undergo extended
              wait periods. Better yet, there’s no delaying your important
              medical appointments. To consult with the online doctor in
              Australia, simply download the DoctorAI app, access the app and
              you will receive prompt, professional and trusted medical
              treatment today.
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              You just need to show us your current medication label with your
              name and the prescribed doctor’s name on it. Our GPs online will
              take it from there. They will get your repeat prescription for you
              when you need it.
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              Please note: there are strictly NO medications of addiction,
              painkillers, narcotics, sleeping tablets or medicinal cannabis
              (Schedule 4 and 8 medications).
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            ></Typography>

            <Typography
              sx={{ fontWeight: 700 }}
              variant="h4"
              component="h2"
              gutterBottom
            >
              New Prescriptions
            </Typography>
            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              For new prescriptions and all of your online prescription needs,
              consult DoctorAI online via the downloadable app.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
