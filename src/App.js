import React,{Component, Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import {Header, Footer} from './Components/Layouts';
import Exercises from './Components/Exercises'
import {muscles, exercises} from './store'
import {Provider} from './context'


class App extends Component {
  state = {
    exercises,
    exercise:{}
    
  }

  //reduce() takes in 2 paramaters..
  //1st is a callback that takes in a number of arguments but only 2 are cumpolsory
  //these 2 are the accumulator and the object you're iterating over
  //2nd parameter is an empty object
  //when you call reduce(), it assigns the 1st value of the {} you're iterating over to the accumulator or you can set the inital value to an empty {}
  getExercisesByMuscles(){
    const initExercises = muscles.reduce((exercises, muscles) => ({
      ...exercises,
      [muscles]:[]
    }),{})
    // console.log(muscles, initExercises)
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {

      const {muscles} = exercise
      exercises[muscles] = [...exercises[muscles], exercise] 
      return exercises
    }, initExercises)
    )
  }

 handleSelectedCategory = category =>{
 this.setState({
category
 })
  }

  handleExerciseSelected = id => {
    this.setState((prevState) => ({
      exercise: prevState.exercises.find(exercise => exercise.id === id),
      editMode:false
    }))
  }

  handleExerciseCreate = (exercise) => {
    this.setState((prevState) => ({
      exercises:[
        ...prevState.exercises,
        exercise
      ]
    }))
  }

  handleExerciseDelete = id => {
    this.setState((prevState) => ({
    exercises: prevState.exercises.filter(ex => ex.id !== id),
    editMode:false,
    exercise:{}
    }))
  }

  handleExerciseSelectEdit = id => {
    this.setState((prevState) => ({
      exercise: prevState.exercises.find(exercise => exercise.id === id),
      editMode:true
    }))
  }

  handleExerciseEdit = exercise => {
    this.setState((prevState) => ({
      exercises: [
      ...prevState.exercises.filter(ex => ex.id !== exercise.id),
      exercise
      ],
      exercise
      }))
  }

  getContext = () => ({
    muscles,
    ...this.state,
    onCreate: this.handleExerciseCreate
  })

  render(){
    const exercises = this.getExercisesByMuscles()
    const  {category, exercise, editMode} = this.state

    return (
      <Provider value={this.getContext()}>
      <Fragment>
      <CssBaseline/>
        <Header/>
        <Exercises 
        exercise={exercise}
        category={category}
        exercises={exercises}
        editMode={editMode}
        muscles={muscles}
        onSelect={this.handleExerciseSelected}
        onDelete={this.handleExerciseDelete}
        onSelectEdit={this.handleExerciseSelectEdit}
        onEdit={this.handleExerciseEdit}
        />
        <Footer 
        category={category}
        muscles={muscles}
        onSelect={this.handleSelectedCategory}
        />
      </Fragment>
      </Provider>
    );
  }
  
}

export default App;
