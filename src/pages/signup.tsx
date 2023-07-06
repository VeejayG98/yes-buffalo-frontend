import React, { useState } from "react";
import { TextField, Button, Typography, Card, CardContent, Grid } from "@mui/material";
import { API } from "@/network";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [first_name, setFirstName] = useState<string>("");
  const [last_name, setLastName] = useState<string>("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    fetch(API + "insert_user", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        Firstname: first_name,
        Lastname: last_name,
        Email: email,
      }),
    });
    console.log("Submitted");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "450px", display: "flex" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5">Sign Up</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                color="success"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                margin="normal"
                color="success"
                required
                fullWidth
                id="first_name"
                label="First Name"
                name="First Name"
                autoComplete="first-name"
                autoFocus
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                margin="normal"
                color="success"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="Last Name"
                autoComplete="last-name"
                autoFocus
                onChange={(event) => setLastName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="success" onClick={handleSubmit}>
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
