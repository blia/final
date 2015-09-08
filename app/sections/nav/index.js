import React,
{
  Component,
  PropTypes as Attr
} from 'react'

import Logo from '../../elements/logo'

import styles from './style.styl'

class Nav extends Component {
  render() {
    return (
      <section className={styles.nav}>
        <nav>
          <a className={styles.logo} href="/"><Logo type="icon"/></a>
          <ul>
            <li><a href="/collections">Коллекции</a></li>
            <li><a href="/collections">Украшения</a></li>
            <li><a href="/collections">О нас</a></li>
            <li><a href="/collections">Где купить</a></li>
            <li><a href="/search">Поиск</a></li>
            <li><a href="/my">Мой список</a></li>
          </ul>
        </nav>
      </section>
    );
  }
}


export default Nav;
