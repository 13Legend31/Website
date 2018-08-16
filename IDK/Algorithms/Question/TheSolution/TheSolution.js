import React, { Component } from 'react'
import './TheSolution.css'

class TheSolution extends Component {
    state = {
        index:0
    }

    ChangeIndex = (index) => {
        this.setState({
            index:index
        })
    }

    render() {
        const { pages, code } = this.props 
        return (
            <React.Fragment>
                <div className='solutionNav'>
                    {pages.map((name, index) => 
                        <button 
                            key={index}
                            className='solutionNavButton'
                            onClick={() => this.ChangeIndex(index)}
                            style={this.state.index === index ? {
                                background:'black', 
                                color:'white',
                            } : null}
                        >
                            {name}
                        </button>
                    )}
                </div>
                <section className='solutions'>
                    {code.map((Sol, index) => 
                        this.state.index === index &&
                        <Sol
                            key={index}
                        />
                    )}
                </section>
            </React.Fragment>
        );
    }
}

export default TheSolution