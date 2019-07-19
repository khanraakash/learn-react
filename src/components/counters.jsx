import React, {Component} from 'react';
import Counter from './counter';

export default class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    };
    handelIncrement = (counter) => {
        // console.log(counter);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    };
    handelReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters: counters});
    };
    handelDelete = (counterID) => {
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({counters: counters});
    };

    render() {
        return (
            <div>
                <button onClick={this.handelReset} className="btn btn-primary btm-sm m-2">Reset</button>
                {this.state.counters.map(counter =>
                    <Counter key={counter.id}
                             onDelete={this.handelDelete}
                             onIncrement={this.handelIncrement}
                             counter={counter}
                    />
                )}
            </div>
        );
    }
}
