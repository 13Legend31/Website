import React, {Component} from 'react'
import ReactDom from 'react-dom'
import Nav from './Components/Nav/Nav.js'
import Links from './Components/Links/Links.js'
import AboutPage from './Pages/About/AboutPage.js'
import ProjectsPage from './Pages/Projects/ProjectsPage.js'
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
        const slider = document.getElementsByClassName('slider')[0];
        slider.style.width = '100%';
        slider.style.left = '0';
        setTimeout(() => {
            this.setState({page:page});
            slider.style.width = '0%';
            slider.style.left = '100%';
        },500);
    }
    
    render() {
        return (
            <React.Fragment> 
                <Nav page = {this.state.page} LoadPage = {this.LoadPage}/>
                {this.state.page === 1 &&   
                    <AboutPage page={this.state.page}/>      
                }     
                {this.state.page === 2 &&
                    <ProjectsPage/>
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