/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ServicesAccrodion = () => {
  const theme = useTheme();
  return (
    <>
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
            Depression
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
          >
            If you're feeling deep, persistent depression, we don't want you to
            face this alone. Depression is more common than you may think, and a
            psychologist referral from DoctorAI can guide you to better mental
            health outcomes.
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
            Anxiety
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
            No matter how insurmountable it may seem, anxiety can be brought
            under control. The psychologist referral from DoctorAI will help you
            identify and manage the sources of anxiety in your life, so you no
            longer feel trapped by them.
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
            Stress
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
            Stresses can build up in your life until they are taking a toll on
            all aspects of your health. Contact DoctorAI if you need a
            psychologist referral for cognitive behavioural therapy (CBT),
            mindfulness and stress alleviation therapies.
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
            Relationships
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
            Disagreements are a reality of all relationships, but you can have
            some help in working it out together. To overcome obstacles together
            and build a healthy relationship based on lasting and fulfilling
            bonds, talk with us today for an online psychologist’s referral.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* 5 */}
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
            Addiction
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
            Left untreated, addictions can derail your relationships and life
            plans, but the choice is in your hands. Talk with DoctorAI today for
            an online psychologist’s referral about the steps you can take to
            bring control and fulfilment back into your life.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* 6 */}
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
            Trauma & Abuse
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
            If you are struggling to cope with everyday situations, you don't
            have to deal with this alone. Talk with DoctorAI for a psychologist
            referral to find your stability and strength.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ServicesAccrodion;
