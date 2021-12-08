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

const mock = [
  {
    title: 300,
    subtitle:
      '300 + component compositions, which will help you to build any page easily.',
    suffix: '+',
  },
  {
    title: 45,
    subtitle:
      '45 + landing and supported pages to Build a professional website.',
    suffix: '+',
  },
  {
    title: 99,
    subtitle: '99% of our customers rated 5-star our themes over 5 years.',
    suffix: '%',
  },
];

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
              // variant="h6"
              component="p"
              color="text.secondary"
              mb={3}
              sx={{ fontWeight: 400 }}
            >
              A Telehealth appointment works just like a regular medical
              appointment, but it is conducted safely and conveniently over the
              video call or audio call using your phone. Simply book an
              appointment with DoctorAI for a Telehealth consultation or
              Telehealth counselling to suit your medical needs.
            </Typography>

            <Typography
              // variant="h6"
              component="p"
              color="text.secondary"
              mb={3}
              sx={{ fontWeight: 400 }}
            >
              Telehealth works by putting patients in touch with the right
              medical professional, either via video conferencing or by
              conducting an appointment over the phone.
            </Typography>
            <Typography
              sx={{ fontWeight: 700 }}
              variant="h4"
              component="h2"
              gutterBottom
            >
              What you need to know
            </Typography>
            <Typography mb={3} component={'p'} color={'text.secondary'}>
              You need to know that Telehealth is available to patients who
              require the online or phone-based services of a GP.
            </Typography>
            <Typography mb={3} component={'p'} color={'text.secondary'}>
              Telehealth services are also bulk billed, wherever applicable.
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              A Telehealth appointment for a GP is easy to arrange with
              DoctorAI.
            </Typography>
          </Box>

          {/* <Grid container spacing={2}>
            {mock.map((item, i) => (
              <Grid key={i} item xs={12} md={4}>
                <Typography variant="h4" color={'primary'} gutterBottom>
                  <VisibilitySensor
                    onChange={(isVisible) => setViewPortVisibility(isVisible)}
                    delayedCall
                  >
                    <CountUp
                      redraw={false}
                      end={viewPortEntered ? item.title : 0}
                      start={0}
                      suffix={item.suffix}
                    />
                  </VisibilitySensor>
                </Typography>
                <Typography color="text.secondary" component="p">
                  {item.subtitle}
                </Typography>
              </Grid>
            ))}
          </Grid> */}
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
