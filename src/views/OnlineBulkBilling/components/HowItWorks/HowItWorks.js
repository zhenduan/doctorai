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
              Bulk Billing Eligibility
            </Typography>
            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              Our online GPs can provide bulk billing services if you fit one of
              the following criteria:
            </Typography>

            <ul>
              <li>
                {' '}
                <Typography
                  variant="subtitle1"
                  mb={2}
                  component={'p'}
                  color={'text.secondary'}
                >
                  You’re living in a COVID-19 impacted area, including
                  self-quarantine.
                </Typography>
              </li>
              <li>
                {' '}
                <Typography
                  variant="subtitle1"
                  mb={2}
                  component={'p'}
                  color={'text.secondary'}
                >
                  You have a child below the age of 12 months.
                </Typography>
              </li>
              <li>
                {' '}
                <Typography
                  variant="subtitle1"
                  mb={2}
                  component={'p'}
                  color={'text.secondary'}
                >
                  You are experiencing homelessness.
                </Typography>
              </li>
              <li>
                {' '}
                <Typography
                  variant="subtitle1"
                  mb={2}
                  component={'p'}
                  color={'text.secondary'}
                >
                  You are struggling with mental, sexual or reproductive health
                  issues.
                </Typography>
              </li>
              <li>
                {' '}
                <Typography
                  variant="subtitle1"
                  mb={2}
                  component={'p'}
                  color={'text.secondary'}
                >
                  You require urgent after-hours assistance (after 11 pm WA
                  time)
                </Typography>
              </li>
            </ul>
            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              If none of the above criteria fit your circumstances, we will
              charge $35 per consultation, with no Medicare rebate.
            </Typography>
          </Box>
          <Box>
            <Typography
              variant={'body2'}
              component={'p'}
              color={'text.secondary'}
            >
              *In accordance with *Stage 7 Telehealth Reform by the Australian
              Government
            </Typography>
            <Typography
              variant={'body2'}
              component={'p'}
              color={'text.secondary'}
            >
              *You must be in Australia to use DoctorAI video consultation
            </Typography>
            <Typography
              variant={'body2'}
              component={'p'}
              color={'text.secondary'}
            >
              *Terms and conditions apply
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
              How it works
            </Typography>
            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              DoctorAI works promptly and conveniently. Your online doctor in
              Australia bulk bill requirements, if eligible, are taken care of
              with minimum fuss and maximum results at DoctorAI. Discover the
              online doctor bulk bill difference today.
            </Typography>

            <Typography
              variant="subtitle1"
              mb={2}
              component={'p'}
              color={'text.secondary'}
            >
              For those who are eligible for online doctor bulk billing, fast,
              convenient and safe medical attention is never far away. Download
              the DoctorAI app and make the most of your online doctor
              bulk-billing needs today.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
