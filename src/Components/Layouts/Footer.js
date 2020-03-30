import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withWidth } from '@material-ui/core'

export default withWidth()(function Footer({muscles, category, onSelect, width}) {
  const index = category ? muscles.findIndex(muscles => muscles === category) + 1 : 0

 const onIndexSelect = (e,index) => onSelect(index === 0 ? '' : muscles[index -1 ])
    return (
    <AppBar position = 'static'>
  <Tabs
    value={index}
    onChange={onIndexSelect}
    indicatorColor="secondary"
    textColor="secondary"
    centered={width !== 'xs'}
    // scrollable={width === 'xs'}
  >
  <Tab label="All"/>
  {muscles.map(muscle =>
    <Tab key={muscle} label={muscle} />
   )}
  </Tabs>
</AppBar>
    )
})
