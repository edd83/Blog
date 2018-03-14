import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.any,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <div className={styles.imgContainer}>
          <img className={styles.imgProfile} src="https://avatars2.githubusercontent.com/u/6439429?s=460&v=4"/>
        </div>
        <div className={styles.containerText}>
          <a href="https://www.facebook.com/eddy.lardet1" target="_blank"><i className={['fa', 'fa-facebook', styles.iconSocial].join(' ')}></i></a>
          <a href="https://www.linkedin.com/in/eddylardet/?locale=en_US" target="_blank"><i className={['fa', 'fa-linkedin', styles.iconSocial].join(' ')}></i></a>
          <a href="https://www.instagram.com/lardet_e/" target="_blank"><i className={['fa', 'fa-instagram', styles.iconSocial].join(' ')}></i></a>
          <a href="https://www.pinterest.fr/eddylardet/" target="_blank"><i className={['fa', 'fa-pinterest', styles.iconSocial].join(' ')}></i></a>
          <a href="https://plus.google.com/u/1/+EddyLardet" target="_blank"><i className={['fa', 'fa-google-plus', styles.iconSocial].join(' ')}></i></a>
          <a href="https://twitter.com/Eddyy83?lang=en" target="_blank"><i className={['fa', 'fa-twitter', styles.iconSocial].join(' ')}></i></a>
        </div>
        <p>I am Eddy Lardet, 25 years old, passionned by computing since my 14 years old.
        I am a complete fan of the new technologies and the new methods in the web.
        I am curious, I love to know how works everything (business or technical part).</p>
        <p>I work as a full stack developer since 2011-2012, I did a lot of languages, but my speciality is the web.
        SEO, front-end, back-end, leadership, social media, unit tests, Nginx configuration, traffic analysis... I love to know (and do) everything in the web.</p>
        <p>Evolution and innovation are very important for me.</p>
        <div className={styles.containerButton}>
          <a className={styles.buttonBottom} href="/London-CV-Eddy.pdf" download>DOWNLOAD CV</a>
          <a className={styles.buttonBottom}>CONTACT ME</a>
        </div>
      </div>
    );
  }
}
