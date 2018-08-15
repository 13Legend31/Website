import React, {Component} from 'react'
import ReactDom from 'react-dom'
import './index.css'

import Nav from './Components/Nav/Nav'
import Links from './Components/Links/Links'
import Particles from 'react-particles-js'

import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Algorithms from './Pages/Algorithms/Algorithms'
import ContactMe from './Pages/ContactMe/ContactMe'

const slideIn = {
    width:'100%',
    left:'0%'
}

const slideOut = {
    width:'0%',
    left:'100%'
}

class Website extends Component {
    state = {
        page:1,
        slideStyle:null
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({page:1, slideStyle:slideOut})
        });
    }

    LoadPage = (page) => {
        if (this.state.page !== page) {
            this.setState({
                slideStyle:slideIn
            })
            setTimeout(() => {
                this.setState({
                    page:page,
                    slideStyle:slideOut
                })
            },500);
        }
    }

    render() {
        return (
            <React.Fragment>
                <Nav page = {this.state.page} LoadPage = {this.LoadPage}/>
                {this.state.page === 1 &&   
                    <About page={this.state.page}/>      
                }     
                {this.state.page === 2 &&
                    <Projects/>
                }
                {this.state.page === 3 &&
                    <Algorithms/>
                }
                {this.state.page === 4 &&
                    <ContactMe/>
                }
                <Links/>
                <Particles className='particles' params={{
                    particles: {
                        nb: 80
                        },
                        interactivity: {
                        events: {
                            onresize: {
                            enable: true,
                            density_auto: true,
                            density_area: 400
                            }
                        }
                    }
                }}/>
                <div className = 'slider' style={this.state.slideStyle}/>
            </React.Fragment>
        );
    }
}

ReactDom.render( 
    <Website/>,
    document.getElementById('root')
)