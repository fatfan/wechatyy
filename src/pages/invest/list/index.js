import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

// import GridList from '@material-ui/core/GridList'
// import GridListTile from '@material-ui/core/GridListTile'

// import { Header } from 'src/components/page'
import Flex from 'src/components/flex'
import { Page, Main, Tabnav } from 'src/components/page'
import { withStyles } from '@material-ui/core'
// import { Tabs } from '../../components/tabs'

import LinearProgress from '@material-ui/core/LinearProgress'

import './index.less'

const styles = theme => ({
  bidList: {
    // margin: 10
  },
  appBar: {
    backgroundColor: 'white'
  },
  paper: {
    ...theme.mixins.gutters(),
    margin: 10,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  gridList: {},
  gridCell: {},
  gridCell1: {
    height: 40
  },
  girdCellTitle: {
    margin: 0
  },
  aprBox: {},
  progress: {
    marginTop: 20
  }
})

const bidList = [
  {
    id: 0,
    type: 0
  }, {
    id: 1,
    type: 0
  }, {
    id: 2,
    type: 1
  }, {
    id: 3,
    type: 1
  }, {
    id: 4,
    type: 2
  }, {
    id: 5,
    type: 2
  }, {
    id: 6,
    type: 2
  }
]

class BidList extends Component {
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    classes: PropTypes.object
  }

  handleClick = (bidItem, e) => {
    console.log(bidItem)
    // this.props.history.push('/invest/detail/youxuan/1')
  }

  render () {
    const { match, history, classes } = this.props
    return (
      <Page>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit">
                标的列表
            </Typography>
          </Toolbar>
        </AppBar>
        <Main>
          <div className={classes.bidList}>
            {bidList.map(bidItem => (
              <Paper key={bidItem.id} id={bidItem.id} bidType={bidItem.type} className={classes.paper} elevation={1} onClick={this.handleClick.bind(this, bidItem)}>
                <div className={classes.bidContentBox}>
                  <Typography component="p" gutterBottom>
                  月优宝...-1226
                    <span style={{float: 'right'}}>转让项目</span>
                  </Typography>
                  <Flex>
                    <div style={{flexGrow: 1}}>
                      <Typography variant="display1" gutterBottom component="h3" color="primary" styleName="apr-box">
                        8.0<em>%</em>~11.2<em>%</em>
                      </Typography>
                      <Typography component="p" color="textSecondary">
                        预期利率
                      </Typography>
                    </div>
                    <div style={{flexGrow: 1}}>
                      <Typography variant="display1" gutterBottom component="h3">
                        1<em style={{fontSize: '0.875rem', fontStyle: 'normal', lineHeight: '100%'}}>个月锁定期</em>
                      </Typography>
                      <Typography component="p" color="textSecondary">
                        可申请债权转让
                      </Typography>
                    </div>
                  </Flex>
                  <LinearProgress variant="determinate" value={82} className={classes.progress} />
                </div>
              </Paper>
            ))}

          </div>
        </Main>
        <Tabnav history={history} match={match}/>
      </Page>
    )
  }
}

export default withStyles(styles)(BidList)
