
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChatBot, { Loading } from 'react-simple-chatbot'

require('./Home.css')

export default class skillsRoute extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true,
      trigger: false,
      result: ''
    }

    this.triggetNext = this.triggetNext.bind(this)
    this.handleLink = this.handleLink.bind(this)
  }

  componentWillMount () {
    const self = this
    const { steps } = this.props
    const link = steps.menuInput.value

    this.handleLink = this.handleLink(link)
    .then(success => {
      self.setState({ loading: false}, () => {
        this.props.triggerNextStep()
      })
    })
    .catch(reason => {
      console.error('onRejected function called: ', reason)
    })
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

skillsRoute.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
  handleLink: PropTypes.func
}

skillsRoute.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
  handleLink: undefined
}
