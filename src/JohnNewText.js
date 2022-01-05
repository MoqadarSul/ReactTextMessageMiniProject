import React, { Component } from 'react'

export default class JohnNewText extends Component {
    render() {
        return (
            <div>
             <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." />
                <div className="input-group-append">
                  <button className="btn submit-button">
                    SEND
                  </button>
                </div>
              </form>
            </div>
        )
    }
}
