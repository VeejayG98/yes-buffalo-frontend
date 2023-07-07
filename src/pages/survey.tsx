import SimpleSnackbar from "@/components/Snackbar";
import { FormControl } from "@mui/base";
import { Box, Button, Card, CardContent, CardHeader, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useState } from "react";

export async function getServerSideProps(context: GetServerSidePropsContext){
  console.log(context.query?.email)
  const email = context.query?.email as string;
  const job_id = context.query?.id as string;
  const company = context.query?.company as string;
  return {
    props: {email: email, job_id: job_id, company: company}
  }
}

export default function Survey({email, job_id, company}: {email: string, job_id: string, company: string}) {

  const [option, setOption] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value);
  };
  const handleSubmit = async () => {
    const response: Response = await fetch("http://localhost:3001/submit", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        Status: option,
        Email: email,
        ID: job_id,
      }),
    });
    console.log(email, job_id, company, option);
    if (response.status === 200){
      console.log("Submitted");
      <SimpleSnackbar setOpen={setOpenSnackbar} open={openSnackbar} message="Survey Submitted" />
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 4, margin: 20 }}>
      <Card sx={{ width: 400, height: 350 }}>
        <CardContent>
          <Typography variant="h5">SayYes Buffalo Job Survey</Typography>
          <Grid container display="flex" justifyItems="space-between" flexDirection="column">
            <Grid item>
              <FormControl>
                <FormLabel>Application Status</FormLabel>
                <RadioGroup onChange={handleRadioChange}>
                  <FormControlLabel value={0} control={<Radio />} label="In Progress" />
                  <FormControlLabel value={1} control={<Radio />} label="Received Offer" />
                  <FormControlLabel value={2} control={<Radio />} label="Rejected" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item>
              <Button variant="contained" color="success" onClick={handleSubmit}>
                Submit Survey
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
