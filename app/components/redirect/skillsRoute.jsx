
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChatBot, { Loading } from 'react-simple-chatbot'

require('./Home.css')

export default class SkillsRoute extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true,
      trigger: false,
      result: ''
    }
  }

  componentWillMount () {
    const self = this
    const { steps } = this.props
    const link = steps.menuInput.value

    console.log(link)

    this.props.handleLink(link).then(success => {
      self.setState({ loading: false})
    })
    .then(success =>{
      this.props.triggerNextStep()
    })
    .catch(reason => {
    })


    // .then(success => {
    //   self.setState({ loading: false}, () => {
    //     this.props.triggerNextStep()
    //   })
    // })
    // .catch(reason => {
    //   console.error('onRejected function called: ', reason)
    // })
  }

  render () {
    const { loading, result } = this.state

    return (
      <div >
        { loading ? <Loading /> : result }
      </div>
    )
  }
}

SkillsRoute.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
  handleLink: PropTypes.func
}

SkillsRoute.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
  handleLink: undefined
}
