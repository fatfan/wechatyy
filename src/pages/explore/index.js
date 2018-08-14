import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

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

import { Page, Main, Tabnav } from 'src/components/page'

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
  }
})

class Explore extends Component {
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
                发现
            </Typography>
          </Toolbar>
        </AppBar>
        <Main>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="./src/assets/imgs/4.jpg"
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
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="./src/assets/imgs/3.jpg"
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

          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="./src/assets/imgs/2.jpg"
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

export default withStyles(styles)(Explore)
