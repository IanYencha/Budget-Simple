import React, { Component } from "react";

import Header from '../../components/Header/Header'

class App extends Component {
    render() {
        return (
            <div className="AppWrapper">
                <Header selected={true}/>
            </div>
        )
    }
}

export default App;