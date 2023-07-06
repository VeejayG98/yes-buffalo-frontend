import { Box, Button, Card, CardContent, CardHeader, Typography } from "@mui/material";
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import { CompanyInfo } from "@/interface";

const CompanyCard = ({title, company, location, tools} : CompanyInfo) => {
    return(
        <Card>
            <CardHeader title={title} subheader={company} />
            <CardContent>
              <Typography>
                <Box component="span" fontWeight="bold">
                  Location: &nbsp;
                </Box>
                {location}
              </Typography>
              <Typography variant="body1">
                <Box component="span" fontWeight="bold">
                  Tools Required: &nbsp;
                </Box>
                {tools}
              </Typography>
              <Button variant="contained" sx={{marginTop:1, backgroundColor: "green"}}>
                <WorkRoundedIcon sx={{ mr: 1 }} />
                Apply Now
              </Button>
            </CardContent>
          </Card>
    );
}
export default CompanyCard;