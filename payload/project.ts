import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
     {
      title: '한국과학기술기획평가원 RAG기반 챗봇시스템',
      startedAt: '2024-08',
      endedAt: '2024-12',
      where: '한국과학기술기획평가원',
      descriptions: [
        {
          content:
            '한국과학기술기획평가원(KISTEP)이 보유한 과학기술 관련 문서들을 학습 데이터로 활용하여 대규모 언어모델(LLM)을 구축하고, 검색 증강 생성(RAG) 기술을 접목한 대화형 챗봇 서비스를 개발하는 프로젝트입니다. 이를 통해 과학기술 분야의 전문적인 정보를 쉽고 정확하게 제공하는 것을 목표로 합니다.',
        },
        {
          content:
            '시스템 성능과 리소스 관리에서 중요한 개선을 이루어냈습니다.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '30% improvement in system resource efficiency' },
            { content: 'Job Scheduler Refactor and Optimization' },
          ],
        },
      ],
    },
    {
      title: '롯데손해보험 데이터 시각화 플랫폼 개발 및 손해율 예측 데이터마트 구축',
      startedAt: '2024-03',
      endedAt: '2024-06',
      where: '롯데손해보험',
      descriptions: [
        {
          content:
            '한국과학기술기획평가원(KISTEP)이 보유한 과학기술 관련 문서들을 학습 데이터로 활용하여 대규모 언어모델(LLM)을 구축하고, 검색 증강 생성(RAG) 기술을 접목한 대화형 챗봇 서비스를 개발하는 프로젝트입니다. 이를 통해 과학기술 분야의 전문적인 정보를 쉽고 정확하게 제공하는 것을 목표로 합니다.',
        },
        {
          content:
            'Achieved significant improvements in system performance and resource management.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '30% improvement in system resource efficiency' },
            { content: 'Job Scheduler Refactor and Optimization' },
          ],
        },
      ],
    },
    // {
    //   title: 'Linux Kernel Optimization Project',
    //   startedAt: '2020-06',
    //   where: 'Linux Foundation',
    //   descriptions: [
    //     {
    //       content:
    //         'Initiated and lead a collaborative project aimed at optimizing the Linux Kernel for various hardware architectures.',
    //     },
    //     {
    //       content:
    //         'Achieved significant improvements in system performance and resource management.',
    //       weight: 'MEDIUM',
    //       descriptions: [
    //         { content: '30% improvement in system resource efficiency' },
    //         { content: 'Job Scheduler Refactor and Optimization' },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   title: 'Global Linux Bootcamp',
    //   startedAt: '2017-05',
    //   endedAt: '2019-12',
    //   where: 'Open Source Community',
    //   descriptions: [
    //     {
    //       content:
    //         'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
    //     },
    //     {
    //       content:
    //         'Successfully trained over 5,000 participants in system administration and security. ',
    //     },
    //   ],
    // },
  ],
};

export default project;
