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

const mock = [
  {
    title: 'Simple Consultation',
    subtitle:
      'If you have simple health concerns, get them answered quickly and easily today. We can help with:',
    hasList: true,
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
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
  },
  {
    title: 'Repeat Prescription',
    subtitle:
      'Just show us your current medication label with your name and the prescribed doctor’s name on it, and our GPs online will get your repeat prescription for you. ',
    subtitle2:
      'Strictly NO medications of addiction, painkiller, narcotics, sleeping tablets or medicinal cannabis (Schedule 4 and 8 medications).',
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
    title: 'Referral to Specialists',
    subtitle:
      'Our GPs online can provide a referral to any private specialist in Australia, except a referral to a public hospital or a referral for termination of pregnancy.',

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
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: 'Medical Certificate',
    subtitle:
      'An online doctor consultation can provide you with a medical certificate if you are unfit for study or work. However, please note we are unable to back-date any medical certificates.',
    subtitle2: 'For further information, please see',
    linkUrl: '#',
    linkText: 'Terms and Conditions',
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
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
];

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
            variant="h2"
            className="fp-h2"
            color="text.primary"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Popular services
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            The most popular services include access to online prescriptions,
            referrals to specialists, medical certificates, telehealth doctors
            and much more. Our GPs online offer bulk billing wherever
            applicable.(need internal links)
          </Typography>
          <br />
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            With an online doctor consultation, fast, convenient and safe
            medical attention is never far away. Download the DoctorAI app for
            your online GP consultation today.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Box width={1} height={1}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'h3'}
                  className="fp-h3"
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="text.secondary">
                  {item.subtitle}
                </Typography>
                {item.hasList && (
                  <>
                    <Tooltip
                      title={
                        <React.Fragment>
                          <Typography color={lightGrey}>
                            &#x2022; cold and flu
                          </Typography>
                          <Typography color={lightGrey}>
                            &#x2022; skin infection
                          </Typography>
                          <Typography color={lightGrey}>
                            &#x2022; simple rashes
                          </Typography>
                          <Typography color={lightGrey}>
                            &#x2022; dental infection
                          </Typography>
                          <Typography color={lightGrey}>
                            &#x2022; eye and ear infection
                          </Typography>
                          <Typography color={lightGrey}>
                            &#x2022; upper respiratory infection
                          </Typography>
                          <Typography color={lightGrey}>
                            &#x2022; gastro-oesophageal reflux
                          </Typography>
                          <Typography color={lightGrey}>
                            &#x2022; gastroenteritis
                          </Typography>
                          <Typography color={lightGrey}>
                            &#x2022; urinary tract infection
                          </Typography>
                          <Typography color={lightGrey}>
                            &#x2022; travel medicine
                          </Typography>
                        </React.Fragment>
                      }
                      placement="bottom"
                    >
                      <Button>Show Details</Button>
                    </Tooltip>
                    {/* <Typography color="text.secondary">
                      &#x2022; cold and flu
                    </Typography>
                    <Typography color="text.secondary">
                      &#x2022; skin infection
                    </Typography>
                    <Typography color="text.secondary">
                      &#x2022; simple rashes
                    </Typography>
                    <Typography color="text.secondary">
                      &#x2022; dental infection
                    </Typography>
                    <Typography color="text.secondary">
                      &#x2022; eye and ear infection
                    </Typography>
                    <Typography color="text.secondary">
                      &#x2022; upper respiratory infection
                    </Typography>
                    <Typography color="text.secondary">
                      &#x2022; gastro-oesophageal reflux
                    </Typography>
                    <Typography color="text.secondary">
                      &#x2022; gastroenteritis
                    </Typography>
                    <Typography color="text.secondary">
                      &#x2022; urinary tract infection
                    </Typography>
                    <Typography color="text.secondary">
                      &#x2022; travel medicine
                    </Typography> */}
                  </>
                )}
                {item.subtitle2 && (
                  <>
                    <br />
                    <Typography align={'center'} color="text.secondary">
                      {item.subtitle2}{' '}
                      {item.linkUrl && (
                        <a href={item.linkUrl}>{item.linkText}</a>
                      )}
                    </Typography>
                  </>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
