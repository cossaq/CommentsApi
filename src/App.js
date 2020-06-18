import React, { Component } from 'react';
import Contacts from './components/Contacts';

class App extends Component {
  state = {
    loading: true,
    comments: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ loading: false });
        this.setState({ comments: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <h1>API Loading...</h1>
        ) : (
          <Contacts comments={this.state.comments} />
        )}
      </div>
    );
  }
}

export default App;
