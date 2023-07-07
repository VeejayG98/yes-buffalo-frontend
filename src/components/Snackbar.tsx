import React, { Dispatch } from "react";
import { Button } from "@mui/material";
import { Snackbar } from "@mui/material";

interface SimpleSnackbarProps {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  message: string;
}

function SimpleSnackbar({ setOpen, open, message }: SimpleSnackbarProps) {
  const action = (
    <div>
      <Button size="small" onClick={() => setOpen(false)}>
        Close
      </Button>
    </div>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => setOpen(false)}
      message={message}
      action={action}
    />
  );
}

export default SimpleSnackbar;
