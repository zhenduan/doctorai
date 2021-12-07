/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

const HomeFaq = () => {
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
        Frequently Asked Questions
      </Typography>

      {/* faq 1 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="h6"
            component="h3"
            color="text.secondary"
            sx={{ fontWeight: 500 }}
          >
            Can I renew a prescription online?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
          >
            You can renew a prescription online with an online prescription
            consultation at DoctorAI.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* faq 2 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="h6"
            component="h3"
            color="text.secondary"
            sx={{ fontWeight: 500 }}
          >
            How will I receive my prescription?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            You will receive your prescription online (eScript) from DoctorAI
            via your registered email at the conclusion of the consultation
            instantly. For instant scripts in Australia, book your online
            prescription consultation today with DoctorAI.
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            For scripts online at any time, download the DoctorAI app to book
            your online doctor prescription in Australia.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* faq 3 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="h6"
            component="h3"
            color="text.secondary"
            sx={{ fontWeight: 500 }}
          >
            Is it safe to get an online prescription?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            It is perfectly safe, effortless and convenient to get an online
            prescription at DoctorAI. The medical team is fully registered and
            equipped to meet your every online doctor and online prescription
            need.
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            Please remember that there are strictly NO medications of addiction,
            painkillers, narcotics, sleeping tablets or medicinal cannabis
            (Schedule 4 and 8 medications).{' '}
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* faq 4 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="h6"
            component="h3"
            color="text.secondary"
            sx={{ fontWeight: 500 }}
          >
            Do I need to speak with a doctor for an online prescription?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            You do need to consult your doctor for an online prescription. You
            can do this by booking an online prescription consultation at
            DoctorAI. Australia’s online prescription needs are taken care of,
            wherever possible, at DoctorAI.{' '}
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            So, fear not if you are running out of medications. In addition,
            there’s no need to worry if you require a medical certificate for
            work or school. Or even if you are after a quick consultation — and
            don’t feel like waiting in the waiting room of your local GP clinic.
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            For online prescriptions, medical certificates and online
            consultations, there are absolutely no worries. Now you can do all
            these anywhere in Australia*, even while sitting on the beach.
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            Connect with our AHPRA-registered online doctors for online
            prescriptions and medical consultations, all from our DoctorAI app.
          </Typography>
          <Typography
            variant="body2"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            *you must be in Australia to use this video consultation
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default HomeFaq;
