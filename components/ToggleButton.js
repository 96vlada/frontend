import { useContext } from "react";
import ColorModeContext from "../styles/ColorModeContext";
import { useTheme } from "@mui/material/styles";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Fab from '@mui/material/Fab';

const ToggleButton = () => {
  const theme = useTheme();
  const { darkMode, setDarkMode } = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end"
      }}
    >
      <Tooltip
        title={`${
          theme.palette.mode.charAt(0).toUpperCase() +
          theme.palette.mode.slice(1)
        } mode`}
      >
        <IconButton sx={{position: 'absolute', bottom: '70px', right: '40px'}} onClick={() => setDarkMode(!darkMode)} color="inherit">
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ToggleButton;
