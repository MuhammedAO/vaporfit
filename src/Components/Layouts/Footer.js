import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Footer() {
    return (
        <Paper square>
  <Tabs
   value={0}
    indicatorColor="primary"
    textColor="primary"
    centered
    aria-label="disabled tabs example"
  >
    <Tab label="Active" />
    <Tab label="Disabled" disabled />
    <Tab label="Active" />
  </Tabs>
</Paper>
    )
}
