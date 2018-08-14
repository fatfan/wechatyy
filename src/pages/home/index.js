import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Button from '@material-ui/core/Button'

import { Page, Main, Tabnav } from 'src/components/page'

import MobileStepper from '@material-ui/core/MobileStepper'
import Paper from '@material-ui/core/Paper'
import IconArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import IconArrowRight from '@material-ui/icons/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import IconStarBorder from '@material-ui/icons/StarBorder'

import IconCloud from '@material-ui/icons/CloudDone'
import IconGift from '@material-ui/icons/CardGiftcard'
import IconGroup from '@material-ui/icons/Group'
// import IconStar from '@material-ui/icons/StarBorder'

// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
// import ListItemIcon from '@material-ui/core/ListItemIcon'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'

import IconStar from '@material-ui/icons/Star'
import IconStarHalf from '@material-ui/icons/StarHalf'

import deepOringe from '@material-ui/core/colors/deepOrange'
// import red from '@material-ui/core/colors/red'

import './index.less'

const styles = theme => ({
  root: {
    // width: 500
  },
  flex: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: 'white',
    color: 'black'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: theme.palette.background.default
  },
  scrollBanner: {
    maxWidth: 1100,
    margin: '0 auto'
  },
  gridList: {},
  gridList2: {
    paddingLeft: 10,
    paddingRight: 10
  },
  girdCell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gridButton: {
    display: 'block',
    margin: '0 auto'
  },
  button1: {
    color: '#f3a'
  },
  button2: {
    color: '#33a'
  },
  girdCellTitle: {
    margin: 0,
    color: '#666'
  },
  img: {
    // height: 255,
    // maxWidth: 800,
    overflow: 'hidden',
    width: '100%'
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  icon: {
    color: 'white'
  },
  card: {
    margin: 10
  },
  avatar: {
    fontSize: '1rem',
    backgroundColor: deepOringe[500]
  },
  star: {
    width: 24
  },
  detail: {
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8
    }
  },
  paper: {
    ...theme.mixins.gutters(),
    margin: 10,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  bullet: {
    display: 'inline-block',
    margin: 2,
    transform: 'scale(0.8)'
  }
})

const tutorialSteps = [
  {
    label: 'How to be happy :)',
    imgPath: './src/assets/imgs/1.jpg'
  },
  {
    label: '1. Work with something that you like, like…',
    imgPath: './src/assets/imgs/2.jpg'
  },
  {
    label: '2. Keep your friends close to you and hangout with them',
    imgPath: './src/assets/imgs/3.jpg'
  },
  {
    label: '3. Travel everytime that you have a chance',
    imgPath: './src/assets/imgs/4.jpg'
  }
]

const tileData = [
  {
    img: './src/assets/imgs/1.jpg',
    title: '银行存管',
    Icon: IconCloud,
    author: 'author',
    cols: 1
  }, {
    img: './src/assets/imgs/2.jpg',
    title: '新手福利',
    Icon: IconGift,
    author: 'author',
    cols: 2
  }, {
    img: './src/assets/imgs/3.jpg',
    title: '邀请好友',
    Icon: IconGroup,
    author: 'author',
    cols: 2
  }, {
    img: './src/assets/imgs/4.jpg',
    title: '会员中心',
    Icon: IconStarBorder,
    author: 'author',
    cols: 1
  }
]

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeStep: 0
    }
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }))
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }))
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep })
  };

  render () {
    const { history, classes, theme } = this.props
    // const backUrl = match.url
    const { activeStep } = this.state

    const maxSteps = tutorialSteps.length

    const bull = <span className={classes.bullet}>•</span>

    return (
      <Page>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit">
                首页
            </Typography>
          </Toolbar>
        </AppBar>
        <Main>
          <div className={classes.scrollBanner}>
            {/* <Paper square elevation={0} className={classes.header}>
              <Typography>{tutorialSteps[activeStep].label}</Typography>
            </Paper> */}
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={this.state.activeStep}
              onChangeIndex={this.handleStepChange}
              enableMouseEvents
            >
              {tutorialSteps.map(step => (
                <img key={step.label} className={classes.img} src={step.imgPath} alt={step.label} />
              ))}
            </SwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              className={classes.mobileStepper}
              nextButton={
                <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                  Next
                  {theme.direction === 'rtl' ? <IconArrowLeft /> : <IconArrowRight />}
                </Button>
              }
              backButton={
                <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? <IconArrowRight /> : <IconArrowLeft />}
                  Back
                </Button>
              }
            />
          </div>

          <div>
            <GridList cellHeight={80} className={classes.gridList} cols={4}>
              {tileData.map(tile => (
                <GridListTile key={tile.img} cols={1} className={classes.girdCell}>
                  <IconButton color="primary" aria-label="Add an alarm" className={classes.gridButton}>
                    {/* <IconStarBorder /> */}
                    {(new tile.Icon()).render()}
                  </IconButton>
                  <p className={classes.girdCellTitle}>{tile.title}</p>
                </GridListTile>
              ))}
            </GridList>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar color="secondary" aria-label="Recipe" className={classes.avatar}>
                    优宝
                  </Avatar>
                }
                action={
                  <IconButton href="#/invest">
                    <IconArrowRight />
                  </IconButton>
                }
                title="月度投资神器"
                subheader="可申请债权转让"
              />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="display1" color="primary">
                  8.0%~12.0%
                </Typography>
                <Typography variant="body1" component="p">
                  预期利率 | 1个月锁定期
                </Typography>
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton className={classes.star}>
                  <IconStar />
                </IconButton>
                <IconButton className={classes.star}>
                  <IconStar />
                </IconButton>
                <IconButton className={classes.star}>
                  <IconStar />
                </IconButton>
                <IconButton className={classes.star}>
                  <IconStar />
                </IconButton>
                <IconButton className={classes.star}>
                  <IconStarHalf />
                </IconButton>
                <Button variant="contained" color="primary" className={classes.detail} href="#/invest">查看</Button>
              </CardActions>
            </Card>
            <Paper className={classes.paper} elevation={1}>
              <Typography variant="headline" component="h3" gutterBottom>
                积分乐园
              </Typography>
              <Typography component="p">
                大转盘{bull}兑好礼{bull}抢红包
              </Typography>
            </Paper>
            <GridList cellHeight={160} className={classNames(classes.gridList, classes.gridList2)} cols={3}>
              {tileData.map(tile => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    titlePosition="top"
                    actionIcon={
                      <IconButton className={classes.icon}>
                        <IconStarBorder />
                      </IconButton>
                    }
                    actionPosition="left"
                    className={classes.titleBar}
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Main>
        <Tabnav history={history} />
      </Page>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object
}

export default withStyles(styles, { withTheme: true })(Home)
