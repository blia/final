import React,
{
  Component,
  PropTypes as Attr
} from 'react';

import Header from '../../sections/header'
import Nav from '../../sections/nav'
import ShopNav from '../../sections/shop-nav'

import styles from './style.styl'

class Desktop extends Component {
  render() {
    return (
      <main className={styles.main}>
        <Header/>
        <Nav/>
        <ShopNav/>
      </main>
    );
  }
}


export default Desktop;
