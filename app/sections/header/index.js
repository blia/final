import React,
{
  Component,
  PropTypes as Attr
} from 'react'

import Logo from '../../elements/logo'

import styles from './style.styl'

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1 className={styles.logo}><a href="/"><Logo/></a></h1>
      </header>
    );
  }
}


export default Header;
