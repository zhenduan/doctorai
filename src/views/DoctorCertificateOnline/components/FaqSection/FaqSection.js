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
            Are online doctor’s certificates accepted by employers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
          >
            Yes, online doctor’s certificates are accepted by employers. An
            online doctor’s certificate in Australia is exactly the same as
            presenting a doctor’s certificate to your employer in person.
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
            Are online doctor’s certificates legal?
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
            Online doctor’s certificates are perfectly legal. Online doctor’s
            certificates work in the same way as regular doctor’s certificates.
            The benefit of an online doctor’s certificate is that you can retain
            an online record of your medical history if required in the future.
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
            Can a doctor’s certificate be backdated?
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
            Unfortunately, a doctor’s certificate cannot be backdated. An online
            doctor’s certificate is valid from the day of your online
            appointment with a registered medical practitioner, such as
            DoctorAI.
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            An online doctor consultation can provide you with a medical
            certificate if you are unfit for study or work. However, please note
            that your online doctor’s certificate only applies from the time of
            making your online GP consultation. Online medical certificates will
            be issued to patients from the day of the online appointment, only.
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
            Can I get a doctor’s certificate online for stress?
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
            You can get a doctor’s certificate online for stress. Simply book an
            online appointment with DoctorAI for a GP consultation if you
            require an online doctor’s certificate for stress-related illness.{' '}
          </Typography>

          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            Stress can be a debilitating effect of mental illness. Anxiety,
            stress, or depression leave from work may require multiple days off.{' '}
          </Typography>

          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            It’s always best to check your employment or school policies and
            conditions with your employer or administrator. This may be enough
            for you to seek more intensive treatment if needed or time to relax
            and seek support.
          </Typography>

          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            However, if you are wondering whether you can get a doctor's
            certificate online for stress or anxiety, the simple answer is
            “yes”. Remember that it’s important to be familiar with your school
            or company/employer’s policy for terms applicable to medical stress
            leave.{' '}
          </Typography>

          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            Everyone suffers from stress to varying degrees. But when that
            stress is attributed to mental illness, all care needs to be taken.{' '}
          </Typography>

          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            In addition to online medical certificates for qualified stress
            leave, online doctors can also prescribe antidepressants or referral
            to a psychologist via the Mental Health Care Plan.
          </Typography>

          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            Please note that our GPs online cannot prescribe or renew
            prescriptions for medications related to addiction, painkillers,
            narcotics, sleeping tablets or medicinal cannabis (Schedule 4 and 8
            medications).
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FaqSection;
