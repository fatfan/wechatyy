import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.less'
// import styles from './index.css'

// const Input = (props) => {
//     return (
//         <div styleName={props.className?`u-input ${props.className}`:'u-input'} {...props}>
//             <div styleName={"input-box"}>
//                 <input type="text" placeholder={props.placeholder}/>
//                 <span styleName="close">
//                     <div styleName="icon"></div>
//                 </span>
//             </div>
//             <p styleName="tip">错误提示</p>
//         </div>
//     )
// }

export default class Input extends Component {
    static propTypes = {
      maxLength: PropTypes.number,
      children: PropTypes.any,
      onChange: PropTypes.func,
      id: PropTypes.string,
      type: PropTypes.string,
      className: PropTypes.string,
      onFocus: PropTypes.func,
      onBlur: PropTypes.func
    }
    constructor (props) {
      super(props)
      this.state = {
        showCloseIcon: false,
        inputFinished: false,
        errTip: ''
      }

      this.textInput = React.createRef()
    }

    id = 'input-' + Date.now()

    handleFocus = (e) => {
      const value = e.target.value
      if (value !== '') {
        this.setState({
          showCloseIcon: true
        })
      } else {
        this.setState({
          showCloseIcon: false
        })
      }
    }

    handleBlur = (e) => {
      // 点击清空按钮事件会先触发blur,移除关闭按钮，导致点击事件无法执行
      setTimeout(() => {
        this.setState({
          showCloseIcon: false,
          inputFinished: true
        })
      }, 10)
    }

    handleChange = (e) => {
      const value = e.target.value
      let _state = this.state
      // console.log(this.state.showCloseIcon,this.state.inputFinished, this.props.maxLength)
      const { maxLength } = this.props
      if (value !== '') {
        _state.showCloseIcon = true
        if (!_state.inputFinished && value.length >= maxLength) {
          _state.inputFinished = true
        }
        // this.setState(_state)
      } else {
        _state.showCloseIcon = false
        // this.setState({
        //     showCloseIcon: false
        // })
      }

      const el = this.textInput.current
      if (_state.inputFinished && el) {
        if (!el.validity.valid) {
          // this.setState({
          //     errTip: '输入格式不正确'
          // })
          _state.errTip = '输入格式不正确'
        } else {
          // this.setState({
          //     errTip: ''
          // })
          _state.errTip = ''
        }
      }
      const { onChange } = this.props
      if (typeof onChange === 'function') {
        onChange(value)
        e.stopPropagation()
      }
      this.setState(_state)
    }

    /**
     * 点击清空按钮
     */
    handleClickClear = (e) => {
      this.clearTextInput()
    }

    /**
     * 清空输入框
     */
    clearTextInput = () => {
      if (this.textInput.current) {
        this.textInput.current.value = ''
        this.textInput.current.focus()
        // this.handleChange(this.textInput.current)
        // this.setState({
        //     showCloseIcon: false
        // })
      }
    }

    render () {
      const { id, type = 'text', className, children, onFocus, onBlur, onChange, ...restProps } = this.props
      return (
        <div styleName={this.props.className ? `u-input ${this.props.className}` : 'u-input'} {...this.props}>
          <div styleName={'input-box'}>
            <label>{children}</label>
            <input id={this.id} type={type} ref={this.textInput} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} {...restProps} />
            <span styleName="close" style={{display: this.state.showCloseIcon ? 'block' : 'none'}} onClick={this.handleClickClear}>
              <div styleName="icon"></div>
            </span>
          </div>
          <p styleName="tip">{this.state.errTip}</p>
        </div>
      )
    }
}
