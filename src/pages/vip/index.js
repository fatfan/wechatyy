import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconStarBorder from '@material-ui/icons/StarBorder'

import { Page, Main } from 'src/components/page'

import { matchPath } from 'react-router-dom'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
// import ReorderIcon from '@material-ui/icons/Reorder'
import ExploreIcon from '@material-ui/icons/Explore'
// import AccountIcon from '@material-ui/icons/AccountCircle'

const MENU = ['/', 'http://localhost/wechatyy/index.html#/explore']

class Tabnav extends Component {
  static propTypes = {
    history: PropTypes.object
  }
  constructor (props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  handleChange = (event, value) => {
    this.setState({
      value: value
    })
    if (value >= 0 && value < MENU.length) {
      if (MENU[value].startsWith('http://') || MENU[value].startsWith('https://')) {
        window.location.href = MENU[value]
      } else {
        this.props.history.push(MENU[value])
      }
    }
  }
  render () {
    const cur = MENU.findIndex((value, index, array) => {
      return matchPath(window.location.hash.substr(1), {path: value, exact: true})
    })

    return (
      <BottomNavigation
        value={cur}
        onChange={this.handleChange}
        showLabels
        // className={classes.root}
      >
        <BottomNavigationAction label="首页" icon={<HomeIcon />} />
        <BottomNavigationAction label="发现" icon={<ExploreIcon />} />
      </BottomNavigation>
    )
  }
}

const styles = theme => ({
  appBar: {
    backgroundColor: 'white'
  },
  card: {
    // width: '100%',
    maxWidth: 800,
    margin: 10,
    flexShrink: 0
  },
  detail: {
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  gridList: {},
  gridList2: {},
  title: {
    // color: theme.palette.secondary.light
    color: 'white'
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
})

const tileData = [
  {
    img: './static/img/1.jpg',
    title: '银行存管',
    author: 'author',
    cols: 1
  }, {
    img: './static/img/2.jpg',
    title: '新手福利',
    author: 'author',
    cols: 2
  }, {
    img: './static/img/3.jpg',
    title: '邀请好友',
    author: 'author',
    cols: 2
  }, {
    img: './static/img/4.jpg',
    title: '会员中心',
    author: 'author',
    cols: 1
  }
]

class VipHome extends Component {
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    classes: PropTypes.object
  }
  render () {
    const { match, history, classes } = this.props
    return (
      <Page>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit">
                会员中心
            </Typography>
          </Toolbar>
        </AppBar>
        <Main>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="./static/img/4.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                周年庆|杭州
              </Typography>
              <Typography component="p">
                爱贷6周年大型投资人见面会
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>

              <Button size="small" color="primary" className={classes.detail}>
                查看详情
              </Button>
            </CardActions>
          </Card>
          <div>
            <GridList cellHeight={160} className={classNames(classes.gridList, classes.gridList2)} cols={3}>
              {tileData.map(tile => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    titlePosition="bottom"
                    actionIcon={
                      <IconButton className={classes.title}>
                        <IconStarBorder />
                      </IconButton>
                    }
                    actionPosition="right"
                    // className={classes.titleBar}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title
                    }}
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="./static/img/3.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                陪伴的力量
              </Typography>
              <Typography component="p">
                陪伴的力量
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>

              <Button size="small" color="primary" className={classes.detail}>
                查看详情
              </Button>
            </CardActions>
          </Card>
        </Main>
        <Tabnav history={history} match={match}/>
      </Page>
    )
  }
}

export default withStyles(styles)(VipHome)
