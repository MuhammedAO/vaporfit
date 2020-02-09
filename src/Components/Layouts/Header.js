import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
// import { withStyles } from '@material-ui/core/styles'
const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography
          variant='h5'
          color='inherit'
        >
          Exercise Database
      </Typography>

        {/* <Dialog /> */}
      </Toolbar>
    </AppBar>
  )
}

// export default withStyles(styles)(Header)
export default Header