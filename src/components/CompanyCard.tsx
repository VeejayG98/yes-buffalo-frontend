import { Box, Button, Card, CardContent, CardHeader, Typography } from "@mui/material";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import { CompanyInfo } from "@/interface";
import { API } from "@/network";

const CompanyCard = ({ job_id, title, company, location, tools, link }: CompanyInfo) => {
  const applyJob = async () => {
    const response = await fetch(API + "add_app", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        Email: localStorage.getItem("email"),
        Job: job_id,
      }),
    });
    if (response.status === 200) window.open(link, "_blank");
  };
  
  return (
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
        <Button variant="contained" sx={{ marginTop: 1, backgroundColor: "green" }} onClick={applyJob}>
          <WorkRoundedIcon sx={{ mr: 1 }} />
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );
};
export default CompanyCard;
