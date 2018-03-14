import React, {Component} from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerContent: [{text: 'About', page: '#about'}, {text: 'Skills', page: '#skills'},
      {text: 'Education', page: '#education'}, {text: 'Interest', page: '#interest'},
      {text: 'Projects', page: '#projects'}, {text: 'Ambition', page: '#ambition'},
      {text: 'Blog', page: '/blog'}]
    };
  }

  render() {
    const styles = require('./Header.scss');
    return (
      <div className={styles.global_container}>
        <ul className={styles.textMenuUl}>
          {this.state.headerContent.map(element => {
            console.log(element);
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
