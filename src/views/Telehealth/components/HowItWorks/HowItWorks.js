/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title:
      'You can make use of Telehealth Qld services by booking a Telehealth Qld appointment online with DoctorAI.',
    location: 'Telehealth Qld',
    subtitle: '',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title:
      'You can conveniently access Telehealth Victoria online or over the phone by booking a Telehealth Vic appointment online with DoctorAI.',
    location: 'Telehealth VIC',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    ),
  },
  {
    title:
      'DoctorAI takes care of your Telehealth NSW needs with online or over the phone bookings.',
    location: 'Telehealth NSW',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
];

const HowItWorks = () => {
  const theme = useTheme();
  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        color="text.primary"
        align={'center'}
        mb={3}
        gutterBottom
        sx={{
          fontWeight: 700,
        }}
      >
        Telehealth for remote locations
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        sx={{ fontWeight: 400 }}
        align={'center'}
        mb={3}
      >
        Telehealth Australia is ideal for remote locations because it realises
        the need for professional medical appointments, virtually whenever and
        wherever you need them.
      </Typography>

      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component={Card}
              padding={4}
              borderRadius={2}
              width={1}
              height={1}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
            >
              <Box display={'flex'} flexDirection={'column'}>
                <Typography
                  variant="h6"
                  component="h3"
                  // color="text.secondary"
                  sx={{ fontWeight: 600 }}
                >
                  {' '}
                  {item.location}
                </Typography>

                <Typography
                  variant={'body1'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                >
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.subtitle}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HowItWorks;
