import React, { useState } from "react";
import { TextField, Button, Typography, Card, CardContent, Grid } from "@mui/material";
import { API } from "@/network";

const Login = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (event: React.SyntheticEvent) => {
    const response: Response = await fetch(API + `login?email=${email}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    
    if(response.status === 200) {
      console.log("Logged in");
    }
    else{
      console.log("Not logged in")
    }
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
