import React, {Component} from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
        //tags: ['tag1', 'tag2', 'tag3']
    };
    handelIncrement = product => {
        console.log(product);
        this.setState({value: this.state.value + 1})
    };

    render() {
       // console.log('props',this.props);
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
        classes += (this.state.value === 0) ? "danger" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.state;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;