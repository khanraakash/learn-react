import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };
    handelIncrement = product => {
        console.log(product);
        this.setState({count: this.state.count + 1})
    };

    render() {
        return (
            <div>
                <span className={this.getBadgeCLasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handelIncrement({id: 1})}
                        className="btn btn-secondary btn-sm">Increment
                </button>
            </div>
        );
    }

    getBadgeCLasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "danger" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;