import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Add} from '@material-ui/icons';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles'



const styles = theme =>  ({
  formControl:{
    width:500
  }
 })
class Create extends React.Component {
  state = {
    open: false,
    exercise:{
    title:'',
    description:'',
    muscles:''
    }
  }


  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = name => ({target:{ value}}) => {
   this.setState({
     exercise:{
      ...this.state.exercise,
      [name] :  value
     }
   })
  }

  handleSubmit = () => {
    const {exercise} = this.state

    this.props.onCreate({
      ...exercise,
      id: exercise.title.toLowerCase().replace(/ /g, '-')
    })

    this.setState({
      open:false,
      exercise: {
        title:'',
        description:'',
        muscles:''
      }
    })
  }

  render() {
    const {open, exercise:{title, description, muscles}} = this.state

    const {classes, muscles : categories} = this.props
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
       <TextField
          value={title}
          label="Title"
          onChange={this.handleChange('title')}
          className={classes.formControl}
        />
        <br/>
        <FormControl className={classes.formControl}>
        <InputLabel>Muscles</InputLabel>
        <Select
          value={muscles}
          name="muscles"
          onChange={this.handleChange('muscles')}
          
        >
        {categories.map(category =>
          <MenuItem key={category} value={category}>{category}</MenuItem>
        )}
        </Select>
      </FormControl>
        <br/>
       <TextField
          value={description}
          label="Description"
          onChange={this.handleChange('description')}
          multiline
          rows='4'
          className={classes.formControl}
        />
       </form>
    </DialogContent>
    <DialogActions>
      <Button 
      color="primary" 
      variant="contained"
      onClick={this.handleSubmit}
      >
        Create
      </Button>
    </DialogActions>
  </Dialog>
      </React.Fragment>
  )
  }
    
}

export default withStyles(styles)(Create)