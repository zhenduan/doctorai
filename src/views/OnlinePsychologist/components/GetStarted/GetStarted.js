import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

const GetStarted = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <>
      <Box>
        <Typography
          variant="h4"
          component="h2"
          color="text.primary"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Download the app
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          sx={{ fontWeight: 400 }}
          align={'center'}
        >
          It’s quick and easy to download and use the DoctorAI app online. Once
          downloaded, you're only a few taps away from booking your consultation
          for a psychologist referral.
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          justifyContent={'center'}
          marginTop={4}
        >
          <Button
            component={'a'}
            variant="contained"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
            href={'/home'}
          >
            Download APP
          </Button>
          <Box
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 2 }}
            width={{ xs: '100%', md: 'auto' }}
          >
            {/* <Button
            component={'a'}
            href={'/docs/introduction'}
            variant="outlined"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
          >
            Documentation
          </Button> */}
          </Box>
        </Box>
      </Box>

      <Box mt={5} pt={3}>
        <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
          <Grid
            item
            container
            // alignItems={'center'}
            // justifyContent="center"
            xs={12}
            md={6}
          >
            <Box>
              <Typography
                variant={'h4'}
                component="h3"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Have a chat with us
              </Typography>
              <Typography component={'p'} color={'text.secondary'}>
                Schedule a consultation with DoctorAI, directly from the app.
                You can talk with one of our AHPRA-registered doctors to get the
                psychologist referral you need.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            container
            // justifyContent="center"
            // alignItems="center"
            xs={12}
            md={6}
          >
            <Box>
              <Typography
                variant={'h4'}
                component="h3"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Get the help you need
              </Typography>
              <Typography component={'p'} color={'text.secondary'}>
                Get all the online help you need with DoctorAI. We offer bulk
                billing for online psychologist referrals for the Mental Health
                Care Plan, where applicable, so check now to see whether you are
                eligible for Medicare rebates.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default GetStarted;
