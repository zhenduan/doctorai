/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { grey } from '@mui/material/colors';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const lightGrey = grey[50]; // #f44336

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

const Services = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
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
            How it works
          </Typography>
          <Typography
            // variant="h6"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
            align={'center'}
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
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            Telehealth works by putting patients in touch with the right medical
            professional, either via video conferencing or by conducting an
            appointment over the phone.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
