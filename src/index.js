import React, {Component} from 'react'
import ReactDom from 'react-dom'
import Nav from './Components/Nav/Nav.js'
import Links from './Components/Links/Links.js'
import About from './Pages/About/About.js'
import Projects from './Pages/Projects/Projects.js'
import './index.css'

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
                <Links/>
                <div className = 'slider' style={this.state.slideStyle}></div>
            </React.Fragment>
        );
    }
}

ReactDom.render( 
    <Website/>,
    document.getElementById('root')
)