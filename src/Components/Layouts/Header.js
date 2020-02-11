import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Create from '../Exercises/Dialogs/Create'

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
      <Create/>
      </Toolbar>
    </AppBar>
  )
}

// export default withStyles(styles)(Header)
export default Header