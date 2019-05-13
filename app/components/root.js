import React from 'react';
import Candylist from './CandyList';
import { connect } from 'react-redux';
import { getCandy } from '../reducers';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Root extends React.Component {
  componentDidMount() {
    this.props.getCandy();
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Goodie Bag</Link>
            <Link to="/candies">Candies</Link>
          </nav>
          <main>
            <h1>Welcome to the Goodie Bag!</h1>
            <p>What a nice home page for your goodies!</p>
            <Route
              path="/candies"
              render={() => <Candylist candy={this.props.candy} />}
            />
            {/* <Candylist candy={this.props.candy} /> */}
          </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    candy: state.candy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCandy: () => dispatch(getCandy())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
