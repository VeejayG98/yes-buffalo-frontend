import CompanyCard from "@/components/CompanyCard";
import { CompanyInfo } from "@/interface";
import { API } from "@/network";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState<CompanyInfo[]>([]);
  useEffect(() => {
    fetch("temp.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => response.json())
    .then((data) => setJobs(data));
  }, []);
  return (
    <div style={{padding: 10}}>
      <Typography variant="h3" sx={{ color: "purple", mx: 3, my: 1 }}>Say Yes Buffalo</Typography>
      <Typography variant="h4" sx={{marginLeft: 3, my: 2}}>Job Portal</Typography>

      <Grid container spacing={2} display="flex" justifyContent="flex-start">
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.job_id}>
          <CompanyCard job_id={job.job_id} title={job.title} company={job.company} location={job.location} tools={job.tools} link={job.link} />
        </Grid>
        ))}
      </Grid>
    </div>
  );
}
