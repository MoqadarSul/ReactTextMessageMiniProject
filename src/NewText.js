import React, { Component } from 'react'

export default class AmyNewText extends Component {
    state = {
        value : '',
    }
    
    handleChange = event => {
        this.setState({value : event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let message = {
          username : this.props.username,
          text : this.state.value 
        }
      this.props.addNewMessage(message);
      this.setState({value : ''});
      }
 
    render() {

        return (
            <div>
            <form className="input-group" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" placeholder="Enter your message..."  value={this.state.value} onChange={this.handleChange} />
                <div className="input-group-append">
                <input className="btn submit-button" disabled={!this.state.value} type="submit" value="Send" />
                </div>
              </form>
            </div>
        )
    }
}
