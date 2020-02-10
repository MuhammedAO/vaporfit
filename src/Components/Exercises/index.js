import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const styles = {
 Paper: {
  padding: 20, 
  marginTop: 10, 
  marginBottom: 10,
  height:500, 
  overflowY: 'auto'
 }
}

export default function index({ exercises }) {
 return (
  <Grid container>
   <Grid item sm>
    <Paper style={styles.Paper}>
     {exercises.map(([group, exercises]) =>
      <React.Fragment>
       <Typography
        variant="h5"
        style={{ textTransform: 'capitalize' }}
       >
        {group}
       </Typography>
       <List component="ul" aria-label="secondary mailbox folders">
        {exercises.map(({title}) =>
         <ListItem button>
         <ListItemText primary={title} />
        </ListItem>
        )}
       </List>
      </React.Fragment>
     )}
    </Paper>
   </Grid>
   <Grid item sm>
    <Paper style={styles.Paper}>
     <Typography variant="h6">
       Welcome
     </Typography>
     <Typography variant="subtitle1"
     style={{marginTop:20}}
     >
        Please select an exercise from the list on the left
     </Typography>
      </Paper>
   </Grid>

  </Grid>
 )
}
