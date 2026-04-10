import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardExample(){

  return(

    <Card sx={{ width: 300 }}>

      <CardContent>

        <Typography variant="h6">

          User Info

        </Typography>

        <Typography>

          Learning Material UI

        </Typography>

      </CardContent>

    </Card>

  );

}