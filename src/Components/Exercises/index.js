import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemSecondaryAction } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Form from './Form';

const styles = {
	Paper: {
		padding: 20,
		marginTop: 10,
		height: 500,
		overflowY: 'auto'
	}
}

export default function index({
  muscles,
  exercises,
  exercise,
  category,
  editMode,
  onSelect,
  exercise:{
    id, 
    title = 'Welcome', 
  description = ' Please select an exercise from the list on the left',
}, 
onDelete,
onSelectEdit ,
onEdit
})

  {
	return (
  <Grid container>
    <Grid item xs={12} sm={6}>
      <Paper style={styles.Paper}>

        {exercises.map(([muscles, exercises]) =>

          !category || category === muscles

            ? 	
            <React.Fragment key={muscles}>
              <Typography
                variant="h5"
                style={{ textTransform: 'capitalize' }}
              >
                {muscles}
              </Typography>
              <List component="ul">
                {exercises.map(({ id, title }) =>
                  <ListItem button key={id} onClick={() => onSelect(id)}>
                    <ListItemText primary={title}  />
                    <ListItemSecondaryAction>
                      <IconButton onClick={() => onSelectEdit(id)}>
                        <EditIcon/>
                      </IconButton>
                      <IconButton onClick={() => onDelete(id)}>
                        <DeleteIcon/>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )}
              </List>
            </React.Fragment> 
            
            : null

        )}
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper style={styles.Paper}>
      {editMode 
      ? 
      <Form
      exercise={exercise}
      muscles={muscles}
      onSubmit={onEdit}
      /> 
      : 
      <React.Fragment>
      <Typography variant="h6">
         {title} 
    </Typography>
        <Typography variant="subtitle1"
          style={{ marginTop: 20 }}
        >
        {description}
    </Typography>
      </React.Fragment>}
      </Paper>
    </Grid>

  </Grid>
	)
}
