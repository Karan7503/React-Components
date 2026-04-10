import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


function AccordionExample(){

  return(

    <div className="w-[500px] space-y-2">

      <Accordion>

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >

          <Typography>

            Section 1

          </Typography>

        </AccordionSummary>


        <AccordionDetails>

          <Typography>

            This is content of section 1

          </Typography>

        </AccordionDetails>

      </Accordion>



      <Accordion>

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >

          <Typography>

            Section 2

          </Typography>

        </AccordionSummary>


        <AccordionDetails>

          <Typography>

            This is content of section 2

          </Typography>

        </AccordionDetails>

      </Accordion>

    </div>

  );

}

export default AccordionExample;