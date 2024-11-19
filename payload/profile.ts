import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
//import image from '../asset/sample_tux.png';
import image from '../asset/sample_2.png';


const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '박남규',
    small: '(Namgyu Park)',
  },
  contact: [
    {
      title: 'namju890@naver.com',
      link: 'mailto:namju890@naver.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/uyu423/resume-nextjs',
      icon: faGithub,
    },
    {
      link: 'https://www.linkedin.com/in/%EB%82%A8%EA%B7%9C-%EB%B0%95-7ab836219/',
      icon: faLinkedin,
    },
  ],
  notice: {
    title:
      "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
    icon: faBell,
  },
};

export default profile;
