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
            component="h2"
            color="text.secondary"
            sx={{ fontWeight: 500 }}
          >
            What is Viagra?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
          >
            Viagra is the brand name for a medication called sildenafil. This
            medication is used to treat erectile dysfunction and pulmonary
            arterial hypertension.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  2 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="h6"
            component="h2"
            color="text.secondary"
            sx={{ fontWeight: 500 }}
          >
            How does it work?
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
            Viagra works to treat erectile dysfunction by helping men have and
            maintain an erection. The drug does this by improving blood flow to
            the penis when sexually aroused.
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            mb={3}
            sx={{ fontWeight: 400 }}
          >
            Clinical research shows that Viagra for men and similar ED drugs
            like Cialis (tadalafil) and Levitra (vardenafil) work by helping to
            relax muscles and arteries inside the penis. This, in turn, helps
            more blood reach the penis. When aroused, the combination of
            relaxation and increased blood flow helps fill the penis with blood.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ServicesAccrodion;
