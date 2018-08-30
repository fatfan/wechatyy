import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
// import classNames from 'classnames'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

// import GridList from '@material-ui/core/GridList'
// import GridListTile from '@material-ui/core/GridListTile'
import Button from '@material-ui/core/Button'
import StarIcon from '@material-ui/icons/Star'
import IconArrowRight from '@material-ui/icons/KeyboardArrowRight'

// import { Header } from 'src/components/page'
import Flex from 'src/components/flex'
import { Page, Main, Tabnav } from 'src/components/page'
import { withStyles, List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from '@material-ui/core'
// import { Tabs } from '../../components/tabs'
import BidList from './list'
import BidDetail from './detail/'

import LinearProgress from '@material-ui/core/LinearProgress'

import './index.less'
// import list from './list'

import actBanner from '../../assets/img/act_banner.jpg'

const styles = theme => ({
  bidList: {
    // margin: 10
  },
  appBar: {
    backgroundColor: 'white'
  },
  actBanner: {
    width: '100%',
    height: 0,
    margin: '0 auto',
    paddingTop: '33.33%',
    // backgroundImage: `url(${require('src/assets/img/act_banner.jpg')})`,
    backgroundImage: `url(${actBanner})`,

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  iconYouxuan: {
    display: 'inline-block',
    width: '1em',
    height: '1em',
    marginRight: theme.spacing.unit * 2,
    // backgroundColor: '#f44',
    // backgroundImage: 'url(./src/assets/img/icon_youxuan@2x.png)',
    backgroundSize: 'contain'
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

const BID_TYPE = {
  0: 'youxuan',
  2: 'youbao'
}

class Invest extends Component {
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    classes: PropTypes.object
  }

  handleClick = (bidItem, e) => {
    console.log(bidItem)
    const bidType = BID_TYPE[bidItem.type]
    if (!bidType) {
      console.log('请选择标的类型')
      return
    }
    this.props.history.push(`/invest/detail/${bidType}/${bidItem.id}`)
  }

  render () {
    const { match, history, classes } = this.props
    return (
      <Page>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit">
                出借
            </Typography>
          </Toolbar>
        </AppBar>
        <Main>
          <div className={classes.actBanner}></div>
          <div className={classes.bidList}>
            <List>
              <ListItem>
                <ListItemIcon>
                  {/* <StarIcon /> */}
                  <span styleName="icon-youxuan" className={classes.iconYouxuan}></span>
                </ListItemIcon>
                <ListItemText primary="推荐项目" />
                <ListItemSecondaryAction>
                  <Button className={classes.button}>
                    查看更多
                    <IconArrowRight className={classes.rightIcon} />
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
            <div styleName="empty-list"></div>
            {bidList.map(bidItem => (
              <Paper key={bidItem.id} id={bidItem.id} className={classes.paper} elevation={1} onClick={this.handleClick.bind(this, bidItem)}>
                <div className={classes.bidContentBox}>
                  <Typography component="p" gutterBottom>
                  月优宝...-{bidItem.id}
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

// export default withStyles(styles)(Invest)

const InvestRouter = ({ match }) => {
  return (
    <React.Fragment>
      <Route exact path={`${match.url}`} component={withStyles(styles)(Invest)} />
      <Route path={`${match.url}/detail`} component={BidDetail} />
      <Route path={`${match.url}/list`} component={BidList} />
    </React.Fragment>
  )
}

InvestRouter.propTypes = {
  match: PropTypes.object
}

export default InvestRouter
