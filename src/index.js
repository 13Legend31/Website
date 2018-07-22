import React, {Component} from 'react';
import ReactDom from 'react-dom';
import DesignPage from './DesignPage';
import AboutPage from './AboutPage';

class Website extends Component {
    state = {
        page:1
    }
    LoadPage = (page) => {
        setTimeout(() => 
            this.setState({page:page})
        ,500);
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
            </React.Fragment>
        );
    }
}

ReactDom.render( 
    <Website/>,
    document.getElementById('root')
)