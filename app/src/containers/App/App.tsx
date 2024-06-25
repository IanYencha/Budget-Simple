import React, { Component } from "react";

import Header from '../../components/Header/Header';
import Summary from '../../components/Summary/Summary';

class App extends Component {
    render() {
        return (
            <div className="AppWrapper">
                <Header selected={true}/>
                <Summary />
            </div>
        )
    }
}

export default App;