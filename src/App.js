import React,{Component, Fragment} from 'react';
import './App.css';
import {Header, Footer} from './Components/Layouts';
import Exercises from './Components/Exercises'
import {muscles, exercises} from './store'


class App extends Component {
  state = {
    exercises
  }

  //reduce() takes in 2 paramaters..
  //1st is a callback that takes in a number of arguments but only 2 are cumpolsory
  //these 2 are the accumulator and the object you're iterating over
  //2nd parameter is an empty object
  //when you call reduce(), it assigns the 1st value of the {} you're iterating over to the accumulator or you can set the inital value to an empty {}
  getExercisesByMuscles(){
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {

      const {muscles} = exercise
      exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]
      return exercises
    }, {})
    )
  }

  render(){
    const exercises = this.getExercisesByMuscles()
    
    return (
      <Fragment>
        <Header/>
        <Exercises exercises={exercises}/>
        <Footer muscles={muscles}/>
      </Fragment>
    );
  }
  
}

export default App;
