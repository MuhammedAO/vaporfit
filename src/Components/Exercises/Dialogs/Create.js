import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Add} from '@material-ui/icons';
import Fab from '@material-ui/core/Fab';

class Create extends React.Component {
  state = {
    open: false,
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const {open} = this.state
    return (
      <React.Fragment>
      <Fab 
       onClick={this.handleToggle}
       size="small">
       <Add/>
     </Fab>
      <Dialog 
      open={open}
      onClose={this.handleToggle}
      >
      <DialogTitle id="form-dialog-title">Choose Exercise</DialogTitle>
      <DialogContent>
      <DialogContentText>
       Fill out the form below
      </DialogContentText>
       <form>

       </form>
    </DialogContent>
    <DialogActions>
      <Button color="primary" variant="contained">
        Create
      </Button>
    </DialogActions>
  </Dialog>
      </React.Fragment>
  )
  }
    
}

export default Create