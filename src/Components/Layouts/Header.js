import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CreateDailog from '../Exercises/Dialog'

// import { withStyles } from '@material-ui/core/styles'
const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography
          variant='h5'
          color='inherit'
          style={{flex:1}}
        >
          vaporFit
      </Typography>
      <CreateDailog 
      />
      </Toolbar>
    </AppBar>
  )
}

// export default withStyles(styles)(Header)
export default Header