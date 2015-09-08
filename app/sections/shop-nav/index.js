import React,
{
  createElement,
  Component,
  PropTypes as Attr
} from 'react'

import styles from './style.styl'

class ShopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionStyle: this.sectionStyle()
    }
  }
  sectionStyle (val = 0) {
    return {
      opacity: val
    }
  }
  tick (t) {
    console.log(t);
    this::anim()
  }
  componentDidMount () {
    this::anim()
  }
  render() {
    const { sectionStyle } = this.state
    return (
      <section className={styles.shopNav} style={sectionStyle}>
        <nav slassName={styles.collections}>
          <ul>
            <li></li>
          </ul>
        </nav>
      </section>
    );
  }
}


export default ShopNav;
