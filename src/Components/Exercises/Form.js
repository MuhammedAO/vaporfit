import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';


   class Form extends Component {
    
    state = this.getInitState()

    getInitState()  {
      const {exercise} = this.props
      return exercise ? exercise : {
        title:'',
      description:'',
      muscles:''
      }
    }

    
    
    handleChange = name => ({target:{ value}}) => {
      this.setState({

         [name] :  value
        
      })
     }
   
     handleSubmit = () => {
   
       this.props.onSubmit({
         id: this.state.title.toLowerCase().replace(/ /g, '-'),
         ...this.state,
       })
      }

    render() {
        const { exercise, muscles : categories} = this.props
        const {title, description, muscles} = this.state
        return (
            <React.Fragment>
            <form>
       <TextField
          value={title}
          label="Title"
          onChange={this.handleChange('title')}
          fullWidth
        />
        <br/>
        <FormControl fullWidth>
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
          fullWidth
        />
        <br/>
        <Button 
        style={{marginTop: 10}}
      color="primary" 
      variant="contained"
      onClick={this.handleSubmit}
      disabled={!title || !muscles}
      >
        {exercise ? 'Edit' : 'Create'}
      </Button>
       </form>
        </React.Fragment>
        )
    }
}

export default Form