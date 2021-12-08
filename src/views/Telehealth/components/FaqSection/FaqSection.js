/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
            How does Telehealth work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
          >
            Telehealth works in the same way as regular medical appointments.
            The difference is that Telehealth appointments are facilitated over
            the phone or online, instead of face to face.
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
            When to use Telehealth?
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
            You can use Telehealth when your primary need is professional
            medical advice or the risk of serious medical illness is low. You
            can use Telehealth when you live in a remote location or has no time
            to wait in the crowded waiting room, or where particular medical
            specialists or GPs are out of reach.
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
            Why do we need Telehealth?
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
            We need Telehealth because it’s not always easy for patients to
            physically attend a medical appointment. We also need Telehealth
            because of patient mobility issues and the need for ongoing medical
            evaluation in an online or phone setting.
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
            What is Telehealth monitoring?
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
            Telehealth monitoring is the use of specific technology to allow
            doctors to interact with their patients in a safe, comfortable and
            ongoing presence. Telehealth monitoring reports, collects, transmits
            and evaluates patient health data through the use of electronic
            devices and doctor/patient interaction.
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
            Is Telehealth worth it?
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
            Telehealth is definitely worth it, especially if you live in a
            remote location, experience mobility issues or are simply time-poor.
            Telehealth is just like a regular medical appointment, except that a
            Telehealth appointment is conducted online or over the phone by the
            same qualified and registered doctors.
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
            Is Telehealth covered by Medicare?
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
            Telehealth is covered by Medicare, wherever applicable. Check your
            eligibility for Medicare bulk billing at the time of booking your
            Telehealth appointment.
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
            What is a Telehealth consultation?
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
            A Telehealth GP consultation is like a regular doctor or specialist
            consultation. The major difference is that a Telehealth consultation
            is conducted online or over the phone, from the comfort of your
            home, no matter where in Australia you are located.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* faq 8 */}
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
            What is Telehealth counselling?
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
            Telehealth counselling is the provision of professional online
            counselling. Telehealth psychology services take place by booking a
            Telehealth appointment. DoctorAI is able to refer you for Telehealth
            psychology.
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            Ask about the Mental Health Care Plan when you speak to the doctor
            during your Telehealth counselling or Telehealth psychology
            appointment.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FaqSection;
