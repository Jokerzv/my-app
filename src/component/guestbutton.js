import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

/*
class Guestbutton extends React.Component {
  constructor(props){
      super(props);

      this.state = {
        title: this.props.pagename
      };
  }

  handleClick(event){
    this.state = {
      title: event
    }
    console.log(this.state.title);
  }
  render(){
    return(
      //<div><Button variant="contained" color="primary" className="todo-title" onClick={() => this.handleClick(this.props.title)}>{this.props.title}</Button></div>
      <div><Button variant="contained" color="primary" className="todo-title" onClick={() => this.props.onTest(this.state.title)}>{this.state.title}</Button></div>
    );
  }
}
*/


function Guestbutton(props){
  return(
    //<div><Button variant="contained" color="primary" className="todo-title" onClick={() => this.handleClick(this.props.title)}>{this.props.title}</Button></div>
    <div><Button variant="contained" color="primary">{props.pagename}</Button></div>
  );
}

Guestbutton.propTypes = {
  //onTest: PropTypes.func.isRequired
  onTest: PropTypes.func.isRequired
};

Guestbutton.defaultProps = {
  pagename: 'Def3'
};

export default Guestbutton;
