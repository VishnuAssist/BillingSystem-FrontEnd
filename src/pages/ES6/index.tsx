import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Import your chapters
import Chapter_1 from "./Chapter_1";
import Chapter_2 from "./Chapter_2";

interface Chapter {
  id: number;
  title: string;
  Component: React.FC;
}

const chapters: Chapter[] = [
  { id: 1, title: "Javascript Variable ", Component: Chapter_1 },
  { id: 2, title: "Javascript Objects", Component: Chapter_2 },
  // Add more chapters here
];

const ES6Index: React.FC = () => {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        ES6 Learning Notes
      </Typography>

      {chapters.map(({ id, title, Component }) => (
        <Accordion key={id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${id}-content`}
            id={`panel${id}-header`}
          >
            <Typography variant="h6">
              Chapter {id}: {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Component />
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default ES6Index;
