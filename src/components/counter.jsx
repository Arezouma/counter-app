import React, { Component } from 'react';


class Counter extends Component {
  /*state = {
  value: this.props.counter.value
    //tags: ['tag1', 'tag2', 'tag3']
  };

  /*constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/

  /*renderTags() {
    if (this.state.tags.length === 0) return <>There are no tags!</>;
    return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  }*/
  /*handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };*/
/* ComponentDidUpdate(prevProps, prevState){
console.log("prevProps", prevProps);
console.console.log("prevState", prevState);
if (prevProps.counter.value !== this.props.counter.value) {
// Ajax call and get new data from the server
}
}*/
  render() {
    //return <div>{this.renderTags()}</div>
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2">
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }


}

export default Counter;
/*<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//<button className="btn btn-secondary btn-sm">Increment</button>
getBadgeClasses() {
  let classes = "badge m-2 badge-";
  classes += this.state.count === 0 ? "warning" : "primary";
  return classes;
}
formatCount() {
  const { count } = this.state;
  return count === 0 ? 'Zero' : count;
}*/
