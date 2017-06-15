
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChatBot, { Loading } from 'react-simple-chatbot'
const $ = require('jquery')

require('./Home.css')

export default class TourCauses extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true,
      trigger: false,
      result: ''
    }

  this.handleLink = this.handleLink.bind(this)
  }

  handleLink(event) {
    if (this.handleLink) {
      this.props.handleLink(event);
      resolve("Success!");
    } else {
      this.setState({ loading: true });
    }
    this.props.handleLink(link)
  }

  componentWillMount () {
    const self = this
    const { steps } = this.props
    const link = '/portfolio/project3'

    const targetElement = $(`.sub-links a[data-href="${link}"]`)

    console.log(targetElement)
    console.log(link)

    let p1 = new Promise((resolve, reject) => {
      this.props.handleLink(link)
      targetElement.click()
      resolve("Success!")
      self.setState({loading:false})
    })

    p1.then((success)=>{
      this.props.triggerNextStep()
    })
    .catch((err)=>{
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

TourCauses.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
  handleLink: PropTypes.func
}

TourCauses.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
  handleLink: undefined
}
