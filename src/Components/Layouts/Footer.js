import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withWidth } from '@material-ui/core'
import { withContext } from '../../context'


class Footer extends React.Component {

  onIndexSelect = (e, index) => {
    const { onCategorySelect, muscles } = this.props
    onCategorySelect(index === 0 ? '' : muscles[index - 1])

  }
  getIndex = () => {
    const { category, muscles } = this.props
    return category ? muscles.findIndex(muscles => muscles === category) + 1 : 0

  }

  render() {
    const { width, muscles } = this.props
    return (
      <AppBar position='static'>
        <Tabs
          value={this.getIndex()}
          onChange={this.onIndexSelect}
          indicatorColor="secondary"
          textColor="secondary"
          centered={width !== 'xs'}
        // scrollable={width === 'xs'}
        >
          <Tab label="All" />
          {muscles.map(muscle =>
            <Tab key={muscle} label={muscle} />
          )}
        </Tabs>
      </AppBar>
    )
  }


}


export default withContext(withWidth()(Footer))