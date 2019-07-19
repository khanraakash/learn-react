import React, {Component} from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <main className="container">
                    <Counters/>
                </main>
            </div>
        );
    }
}