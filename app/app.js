import normalize from 'normalize.css/normalize.css'
import Layout from './layouts';
import raf from 'raf'



window.anim = function anim() {
  const p = this.tick
  raf(this::p)
}

export default Layout
