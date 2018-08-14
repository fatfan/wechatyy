import React, { Component } from 'react'
import Snackbar from '@material-ui/core/Snackbar'

// import './index.less'

let instance

class SnackbarSingleton extends Component {
  constructor (prop) {
    super(prop)

    this.state = {
      open: false,
      vertical: 'bottom',
      horizontal: 'center',
      content: ''
    }
    instance = this

    console.log('constructor')
  }

  //   componentWillMount () {
  //     console.log('componentWillMount')
  //   }

  componentDidMount () {
    console.log('componentDidMount')
  }
  shouldComponentUpdate () {
    return true
  }
  //   componentWillUpdate () {
  //     console.log('componentWillUpdate')
  //   }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

    handleClose = () => {
      this.setState({ show: false })
    }

    render () {
      const { vertical, horizontal, show: open } = this.state

      return (
        <React.Fragment>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'message-id'
            }}
            message={<span id="message-id">{this.state.content}</span>}
          />
        </React.Fragment>
      )
    }
}

let timer
function delay (timeout) {
  return new Promise(resolve => {
    timer = setTimeout(resolve, timeout)
  })
}

function hide () {
  instance.setState({
    show: false
  })
}

async function show (content = '', duration = 2000) {
  instance.setState({
    show: true,
    content: content
  })

  clearTimeout(timer)
  await delay(duration)

  hide()
}

export default {
  element: <SnackbarSingleton />,
  show,
  hide
}
