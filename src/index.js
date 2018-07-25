import React, {Component} from 'react';
import ReactDom from 'react-dom';
import DesignPage from './DesignPage';
import AboutPage from './AboutPage';
import './index.css'

class Website extends Component {
    state = {
        page:1
    }
    componentDidMount = () => {
        setTimeout(() => {
            const slider = document.getElementsByClassName('slider')[0];
            slider.style.width = '0%';
            slider.style.left = '100%';
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
                {this.state.page === 1 &&   
                    <AboutPage LoadPage = {this.LoadPage}/>      
                }          
                {this.state.page === 2 &&
                    <DesignPage LoadPage = {this.LoadPage}/>
                }
                <div className = 'slider'></div>
            </React.Fragment>
        );
    }
}

ReactDom.render( 
    <Website/>,
    document.getElementById('root')
)