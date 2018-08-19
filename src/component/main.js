import React from 'react';

import PropTypes from 'prop-types';
import propTypes from 'prop-types';
import logo from '../logo.svg';
import Button from '@material-ui/core/Button';
/*
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import NavigationIcon from '@material-ui/icons/Navigation';
import Icon from '@material-ui/core/Icon';

import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceICon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
*/

import Guestbutton from './guestbutton';

function onTest(ok){
  console.log(ok);

}

class Main extends React.Component {
  constructor(props){
      super(props);

      this.state = {
        sone: this.props.sone,
        title: this.props.sone,
        color: ''
      };
  }

  render(){
    return (
    <div className="main">
      <div className="main-left">
        <div className="main-left-bg">
          <center><div className="header-logo"><div><img src={logo} width="40px" className="App-logo" alt="logo" /></div><div className="logos">Home Expenses</div></div>
          <div className="line"></div></center>
          <div>
            <div><Button variant="contained" color={this.state.color} onClick={() => this.setState({title: '123', color: 'primary'})}>{this.state.title}</Button></div>
            <div><Button variant="contained" color="primary" onClick={() => onTest("singup")}>Sing Up</Button></div>

          </div>
        </div>
      </div>

      <div>
        {this.props.title}
      </div>
    </div>
    );
  }
}

Main.propTypes = {
  title: PropTypes.string.isRequired,
  onTest: propTypes.func.isRequired
};

Main.defaultProps = {
  sone: 'Sing In',
  title: 'Def'
};

export default Main;
/*
ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};
*/
//export default withStyles(styles)(ContainedButtons);
