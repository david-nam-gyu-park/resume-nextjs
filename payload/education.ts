import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '서원대학교',
      subTitle: '컴퓨터공학과 (졸업)',
      startedAt: '2015-03',
      endedAt: '2021-08',
    },
    {
      title: '대일고등학교',
      subTitle: '졸업',
      startedAt: '2010-03',
      endedAt: '2013-02',
    },
  ],
};

export default education;
