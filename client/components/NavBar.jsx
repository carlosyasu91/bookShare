import React from 'react';
import {Link, hashHistory} from 'react-router';

class NavBar extends React.Component{
  logout(){
    //Fix logout
    localStorage.clear();
    hashHistory.push('/signIn');
  }
  render(){
    return <nav>
    <ul>
      <li><Link to="/explore">Explore</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><a onClick={this.logout}>Logout</a></li>
    </ul>
  </nav>
  }
}

export default NavBar;