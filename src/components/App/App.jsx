import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../NavBar';

const styles = {};

export const App = ({ classes }) => (
  <React.Fragment>
    <CssBaseline />
    <NavBar />
    <main>
    <Grid container>
      <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom>
          Hello I am a React main component
        </Typography>
        <Button>
          Click me!
        </Button>
      </Grid>
    </Grid>
    </main>
  </React.Fragment>
);

export default withStyles(styles)(App);
