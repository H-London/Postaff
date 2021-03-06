import React, {Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import SchoolLandingSubHistory from './SchoolLandingSubHistory.jsx';
import SchoolLandingCharts from './SchoolLandingCharts.jsx';
import SchoolLandingJobsTable from './SchoolLandingJobsTable.jsx';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class SchoolLanding extends React.Component {
  render() {
    return (
      <Fragment>
        <Grid container spacing={24}>
          <SchoolLandingSubHistory />
          <SchoolLandingCharts />
          <SchoolLandingJobsTable />
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(SchoolLanding);