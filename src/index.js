import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {red, amber} from '@material-ui/core/colors'


const theme = createMuiTheme({
    palette:{
        primary: red,
        secondary:{
            main: amber[500],
            light: amber[200],
           dark:  amber[700]
        },
        type:'dark'
    }
})

//code splitting/lazy loading
import (/*webpackChunkName: 'app'*/ './App')
.then(({default:App}) => ReactDOM.render(
    <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>,
    document.getElementById('root')
    ))




