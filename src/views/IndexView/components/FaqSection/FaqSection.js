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

const FaqSection = () => {
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
        Dr Online - Frequently Asked Questions
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        sx={{ fontWeight: 400 }}
        mb={3}
        align={'center'}
      >
        Need a doctor online? Wherever you are, our online doctor services offer
        prompt, fully registered medical consultations and certificates.
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
            Can online doctors prescribe antibiotics?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
          >
            Your online doctor at DoctorAI can prescribe antibiotics. Simply
            book an online doctor consultation with DoctorAI, and we can
            prescribe the required medication according to your medical needs —
            promptly and efficiently.
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
            Can online doctors prescribe antidepressants?
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
            Online doctors can prescribe antidepressants according to your
            medical needs. If you need to renew your prescription for
            antidepressant medication, consult your doctor online at DoctorAI.{' '}
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            If you need to renew your medications, all you need to do is show us
            the label on your current medication, with your name and the name of
            your prescription doctor on it.
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            Please note that our GPs online cannot renew prescriptions for
            medications related to addiction, painkillers, narcotics, sleeping
            tablets or medicinal cannabis (Schedule 4 and 8 medications).
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
            Can you get a medical certificate from an online doctor?
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
            You can get a doctor’s medical certificate online at DoctorAI. All
            you need to do is download the app and have an online doctor
            consultation, for your doctor’s medical certificate for school or
            work.
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            The medical certificate will be emailed to you instantly after the
            consultation. Please be advised that the doctor is not able to
            back-date a certificate.
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
            Can I get an online doctor’s referral?{' '}
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
            Online doctors can provide a referral to a private specialist, to
            suit your medical needs. Exemptions apply to public hospital
            referrals.{' '}
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            Please note we cannot refer you to a public hospital or for a
            termination of pregnancy.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* faq 5 */}
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
            How do I find a doctor online?
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
            You can find a doctor online quickly and effortlessly at DoctorAI.
            Simply download the DoctorAI app and you can be booking your
            consultation within minutes. Your online doctor at any time is
            DoctorAI.{' '}
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* faq 6 */}
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
            How to book your online doctor appointment{' '}
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
            An online doctor appointment is just a click away at DoctorAI.
            Prompt and efficient, consulting a doctor online puts your health
            and safety needs first. Simply download the DoctorAI app to get
            started.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* faq 7 */}
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
            How do online doctors work?
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
            Doctors online work in the same way that an in-person GP
            consultation works. The major benefit is that you can attend your
            medical appointments at your own convenience, without the need for a
            trip to the clinic.
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            Taking your medical needs online does away with the need for long
            commute times or waiting periods. Your online GP at DoctorAI will
            take care of your medical needs without the inconvenience of an
            in-person visit.{' '}
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            For an online doctor chat, download our app today.{' '}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FaqSection;
