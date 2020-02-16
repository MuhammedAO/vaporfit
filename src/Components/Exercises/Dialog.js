import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Add} from '@material-ui/icons';
import Fab from '@material-ui/core/Fab';
import Form from './Form';


class Create extends React.Component {
  state = {
    open: false,
  }


  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }


 handleFormSubmit = exercise => {
 this.handleToggle()

 this.props.onCreate(exercise)
 }
  

  render() {
    const {open} = this.state
    const {muscles} = this.props
    
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
      <DialogTitle>Choose Exercise</DialogTitle>
      <DialogContent>
      <DialogContentText>
       Fill out the form below
      </DialogContentText>
       <Form
       muscles={muscles}
       onSubmit={this.handleFormSubmit}
       />
    </DialogContent>
  </Dialog>
      </React.Fragment>
  )
  }
    
}

export default Create