import React, { useEffect, useState } from "react";
import { Box, Drawer, IconButton, StyledEngineProvider, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./settings.css";

export let autoStart = true;

const Settings = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [autoOn, setAutoOn] = useState(false);
  useEffect(() => {
    if (autoOn) {
      autoStart = false
      console.log(autoStart);
    } else {
      autoStart = true;
      console.log(autoStart);
    }
  }, [autoOn]);
  return (
    <>
    <StyledEngineProvider injectFirst>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        className="icon"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          p={2}
          height="100px"
          textAlign="center"
          role="presentation"
          sx={{
            borderRadius: 25,
            color: "#262a2c",
          }}
        >
          {!autoOn && (
            <Button
              variant="contained"
              className="button"
              onClick={() => setAutoOn(true)}
            >
              AutoStart: On
            </Button>
          )}
          {autoOn && (
            <Button
              variant="contained"
              className="button"
              onClick={() => setAutoOn(false)}
            >
              AutoStart: Off
            </Button>
          )}
        </Box>
      </Drawer>
    </StyledEngineProvider>
    </>
  );
};
export default Settings;
