import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Footer({muscles, category, onSelect}) {
  const index = category ? muscles.findIndex(muscles => muscles === category) + 1 : 0

 const onIndexSelect = (e,index) => onSelect(index === 0 ? '' : muscles[index -1 ])
    return (
    <Paper square>
  <Tabs
    value={index}
    onChange={onIndexSelect}
    indicatorColor="primary"
    textColor="primary"
    centered
    aria-label="disabled tabs example"
  >
  <Tab label="All"/>
  {muscles.map(muscle =>
    <Tab label={muscle} />
   )}
  </Tabs>
</Paper>
    )
}
