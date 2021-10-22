import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { KeyboardArrowDownRounded as KeyboardArrowDownIcon } from '@mui/icons-material';

function LangMenu() {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);

   function handleClick(event) {
      setAnchorEl(event.currentTarget);
   }

   function handleClose() {
      setAnchorEl(null);
   }

   return (
      <div>
         <Button
            id='demo-customized-button'
            aria-controls='demo-customized-menu'
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            variant='outlined'
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
         >
            English
         </Button>
         <Menu
            id='demo-customized-menu'
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
         >
            <MenuItem>English (US)</MenuItem>
         </Menu>
      </div>
   );
}

export default LangMenu;
