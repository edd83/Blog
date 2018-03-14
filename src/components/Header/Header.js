import React, {Component} from 'react';
import { scaleRotate as Menu } from 'react-burger-menu';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerContent: [{text: 'About', page: '#about'}, {text: 'Skills', page: '#skills'},
      {text: 'Experiences', page: '#experiences'}, {text: 'Interest', page: '#interest'},
      {text: 'Projects', page: '#projects'}, {text: 'Education', page: '#education'},
      {text: 'Ambition', page: '#ambition'}, {text: 'Blog', page: '/blog'}],
      displayBurger: false
    };
    this.addEvent = this.addEvent.bind(this);
  }

  componentDidMount() {
    this.addEvent(window, 'resize', () => {
      if (window.innerWidth < 769) {
        this.setState({displayBurger: true});
      } else {
        this.setState({displayBurger: false});
      }
    });
  }

  addEvent(object, type, callback) {
    if (object === null || typeof(object) === 'undefined') return;
    if (object.addEventListener) {
      object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
      object.attachEvent('on' + type, callback);
    } else {
      object['on' + type] = callback;
    }
  }

  render() {
    const styles = require('./Header.scss');
    const styleMenu = {
      bmBurgerButton: {
        position: 'fixed',
        width: '25px',
        height: '20px',
        left: '20px',
        top: '15px',
        color: '#fff'
      },
      bmBurgerBars: {
        background: '#fff'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#fff'
      },
      bmItemList: {
        color: '#fff',
        padding: '0.8em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    };
    return (
      <div className={styles.global_container}>
        <ul className={styles.textMenuUl}>
          {this.state.displayBurger && <Menu styles={styleMenu} >
            {this.state.headerContent.map(element => {
              return (<a className="menu-item" href={element.page}>{element.text}</a>);
            })}
          </Menu>}
          {this.state.headerContent.map(element => {
            return (<li className={styles.textMenuLi}><a href={element.page}>{element.text}</a></li>);
          })}
        </ul>
        <div className={styles.antiMenu}></div>
        <h1>Eddy Lardet</h1>
        <h4>Full Stack & Lead Developer Web</h4>
      </div>
    );
  }
}
