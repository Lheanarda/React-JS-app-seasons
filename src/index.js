import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spnner';


class App extends React.Component{

    state = {lat:null, errorMessage:null};
    
    componentDidMount(){ //for async syntax
       window.navigator.geolocation.getCurrentPosition(
           position=> this.setState({lat:position.coords.latitude}),
           err=>this.setState({errorMessage:err.message})
       )
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error : {this.state.errorMessage} </div>
        }
        if(!this.state.errorMessage && this.state.lat){
            console.log (this.state.lat)
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner message="Please accept location request" />
    }
    render(){
        return(
            <div style={{border:'10px solid pink'}}>
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />,document.querySelector('#root'))