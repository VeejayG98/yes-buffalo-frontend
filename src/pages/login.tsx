import React, { useState } from "react";
import { TextField, Button, Typography, Card, CardContent, Grid } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const API = "http://172.29.106.182:3001/";

  const handleSubmit = (event: React.SyntheticEvent) => {
    fetch(API + `login?email=${email}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log("Submitted");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "450px", display: "flex" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5">Login</Typography>
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
              <Button type="submit" variant="contained" color="success" onClick={handleSubmit}>
                Login
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
