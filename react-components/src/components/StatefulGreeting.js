import React from "react";

// export default class StatefulGreeting extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   setCount = () => {
//     this.setState(prevState => {
//       return { count: prevState.count + 1 }
//     })
//   }

//   render() {
//     return (
//       <div className="greeting">
//         <h1>
//           Hello, {this.props.name}, I'm a stateful component!
//         </h1>
//         <h2>You've clicked {this.state.count} times</h2>
//         <button onClick={this.setCount}>Increment Count</button>
//       </div>
//     );
//   }
// }

// First, create a class component by using the 'class' keyword
// To turn this into a React component, we must extend the built-in Component class
// from React by adding extends React.Component in the class definition
class StatefulGreeting extends React.Component {

  // a constructor is a special method that is always called when the class is first instantiated
  // while state can be defined elsewhere, the constructor is where state is usually defined
  constructor() {

  }

  render() {
      return <h1>Hello, {this.props.name}. {this.props.greeting}</h1>
  }
}

export default StatefulGreeting;