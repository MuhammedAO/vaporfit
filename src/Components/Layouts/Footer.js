import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withWidth } from '@material-ui/core'

export default withWidth()(function Footer({muscles, category, onSelect, width}) {
  const index = category ? muscles.findIndex(muscles => muscles === category) + 1 : 0

 const onIndexSelect = (e,index) => onSelect(index === 0 ? '' : muscles[index -1 ])
    return (
    <Paper square>
  <Tabs
    value={index}
    onChange={onIndexSelect}
    indicatorColor="primary"
    textColor="primary"
    centered={width !== 'xs'}
    // scrollable={width === 'xs'}
  >
  <Tab label="All"/>
  {muscles.map(muscle =>
    <Tab key={muscle} label={muscle} />
   )}
  </Tabs>
</Paper>
    )
})
