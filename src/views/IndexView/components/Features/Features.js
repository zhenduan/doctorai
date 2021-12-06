/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

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
              Bulk Billing*
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Our online GPs offer bulk billing if you fit in one of the
              following categories:
            </Typography>
            <ul>
              <li>
                <Typography
                  variant={'h6'}
                  component={'p'}
                  color={'text.secondary'}
                >
                  Are living in a COVID-19 impacted area (including
                  self-quarantine), or
                </Typography>
              </li>
              <li>
                <Typography
                  variant={'h6'}
                  component={'p'}
                  color={'text.secondary'}
                >
                  Are under the age of 12 months, or
                </Typography>
              </li>
              <li>
                <Typography
                  variant={'h6'}
                  component={'p'}
                  color={'text.secondary'}
                >
                  Are experiencing homelessness, or
                </Typography>
              </li>
              <li>
                <Typography
                  variant={'h6'}
                  component={'p'}
                  color={'text.secondary'}
                >
                  Have Mental, Sexual or Reproductive health issues, or
                </Typography>
              </li>
              <li>
                <Typography
                  variant={'h6'}
                  component={'p'}
                  color={'text.secondary'}
                >
                  Need urgent after-hours service (after 11 pm WA time)
                </Typography>
              </li>
            </ul>
          </Box>
          <Box>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              If you don’t belong to any of the above groups, we charge $35 per
              consultation, with no Medicare rebate.
            </Typography>
            <br />
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
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={300}
              image="https://assets.maccarianagency.com/backgrounds/img4.jpg"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
