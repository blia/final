import React,
{
  Component,
  PropTypes as Attr
} from 'react';

import styles from './style.styl'

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1 class="logo"><a href="/">sdf</a></h1>
      </header>
    );
  }
}


export default Header;
