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
            How can I see an online psychologist?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
          >
            You can see a psychologist by downloading the DoctorAI app. Simply
            consult your online GP for a specialist referral to a psychologist.
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
          >
            Bringing you the best of telehealth, DoctorAI is fully online, so
            you can call us for an online psychologistsâ€™ referral to see an
            online psychologist from Sydney to Perth and everywhere in between.
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
            How can I book an appointment with an online psychologist?
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
            You can book an appointment with a psychologist by downloading the
            DoctorAI app, as the first step to seeing a psychologist.
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            Book an appointment with one of the online doctors at DoctorAI, and
            we can refer you to a specialist consultation with a psychologist.
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
            Are online psychologists covered by Medicare?
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
            Our referral consultations for online psychologists are covered by
            Medicare, via the Mental Health Care Plan if you are eligible, after
            being assessed by our online doctor.
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            To learn more about our referrals for online psychologists and
            Medicare rebates, please see the full list here.
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
            Are child psychologists available online?
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
            Just as we do for adults, your child can be referred to a child
            psychologist from a consultation with DoctorAI. As a fully online
            service, our app is the easiest way to see an online psychologist,
            from Melbourne to Darwin and everywhere in between.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FaqSection;
