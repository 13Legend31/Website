import React, {Component} from 'react'
import ReactDom from 'react-dom'
import Nav from './Components/Nav/Nav.js'
import Links from './Components/Links/Links.js'
import About from './Pages/About/About.js'
import Projects from './Pages/Projects/Projects.js'
import './index.css'

class Website extends Component {
    state = {
        page:1
    }

    componentDidMount = () => {
        setTimeout(() => {
            const { style:slider} = document.getElementsByClassName('slider')[0];
            slider.width = '0%';
            slider.left = '100%';
        },200);
    }

    LoadPage = (page) => {
        if (this.state.page !== page) {
            const slider = document.getElementsByClassName('slider')[0]
            slider.style.width = '100%'
            slider.style.left = '0'
            setTimeout(() => {
                slider.style.width = '0%'
                slider.style.left = '100%'
                this.setState({page:page})
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
                <div className = 'slider'></div>
            </React.Fragment>
        );
    }
}

ReactDom.render( 
    <Website/>,
    document.getElementById('root')
)