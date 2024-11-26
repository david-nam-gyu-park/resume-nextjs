import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '한국과학기술기획평가원 LLM, RAG기반 챗봇시스템 구축',
      startedAt: '2024-08',
      endedAt: '2024-12',
      where: '장소 : 한국과학기술기획평가원',
      descriptions: [
        {
          content:
            '한국과학기술기획평가원(KISTEP)이 보유한 과학기술 관련 문서들을 학습 데이터로 활용하여 대규모 언어모델(LLM)을 구축하고, 검색 증강 생성(RAG) 기술을 접목한 대화형 챗봇 서비스를 개발하는 프로젝트입니다. 이를 통해 과학기술 분야의 전문적인 정보를 쉽고 정확하게 제공하는 것을 목표로 합니다.',
        },
        {
          content:
            '인공지능 모델과 RAG를 이용하여 문서 생성, 검색을 통해 on-premise환경에서 업무효율성 향상을 이루었습니다.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '배치 파이프라인을 통한 지속적인 최신정보 업데이트로 한국과학기술 검색 서비스 운영율 향상' },
            { content: '벡터 데이터 베이스 구축 속도 30G/1시간, 30G/15분 75% 단축' },
            { content: 'ETL 배치 작업 속도 향상' },
            { content: '대화형 챗봇 서비스의 벡터 데이터베이스 성능 향상을 위한 데이터 구조 최적화' }
          ],
        },
      ],
    },
    {
      title: '롯데손해보험 데이터 시각화 플랫폼 개발 및 손해율 예측 데이터마트 구축',
      startedAt: '2024-03',
      endedAt: '2024-06',
      where: '장소 : 롯데손해보험',
      descriptions: [
        {
          content:
            '롯데손해보험의 장기보험 손해율 분석을 위한 데이터 시각화 플랫폼 개발 구축과 데이터 ETL 파이프라인과, 데이터 마트를 구축하는 프로젝트입니다. 이를 통해 장기보험 손해율의 원인을 쉽게 분석하고, 보험상품에 대한 의사결정을 쉽고 빠르게 제공하는 것을 목표로 합니다.',
        },
        {
          content:
            '일일 대용량 데이터를 처리하고 이를 시각화함으로써 보고 과정에 소요되는 시간과 의사결정에 필요한 시간을 효과적으로 단축시켰습니다.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '일일 대용량 데이터(약 40G) ETL 성능 기존대비 40% 향상 구축' },
            { content: '일일 배치 데이터 분석 후 시각화까지 속도 향상' },
            { content: '데이터 거버넌스에 맞춘 데이터 웨어하우스 구축' },
          ],
        },
      ],
    },
    {
      title: 'SK innovation mysuni 데이터 시각화 플랫폼 및 교육 데이터 마트 구축',
      startedAt: '2023-10',
      endedAt: '2024-03',
      where: '장소 : sk innovation mysuni',
      descriptions: [
        {
          content:
            'SK 그룹의 전직원을 대상으로 하는 교육 플랫폼의 데이터를 활용하여 각 계열사의 교육 참여율, 이수 시간, 희망 교육 등을 분석하고 시각화하는 것을 목표로한 프로젝트 입니다. 데이터를 단순히 조회, 검색하는 비효율 적인 방법을 시각화툴과, 자동화된 데이터파이프라인을 구축하여 정확한 인사이트를 파악하는 방식으로 발전시키는 것을 목표로 합니다.',
        },
        {
          content:
            '데이터 시각화를 통해 여러 교육 프로그램의 참여율, 선호도, 희망 교육 프로그램에 대한 정보를 명확히 제공하여 콘텐츠 관리자의 의사결정 효율성을 향상시켰습니다.',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'AWS CLoud servie 비용 25% 감소(초기비용 연 1억 2천에서 9천으로 감축)' },
            { content: '클라우드 아키텍처 설계를 통한 대용량 데이터(일일 40G) 처리 문제 해결' },
          ],
        },
      ],
    },
    {
      title: '한국과학기술기획평가원 벡터데이터 기반 국가 과제 검색 시스템 구축',
      startedAt: '2023-03',
      endedAt: '2023-10',
      where: '장소 : 한국과학기술기획평가원',
      descriptions: [
        {
          content:
            '과학기술 및 관련 사업 정보에 대한 고급 검색 기능을 제공함으로써, 사용자들이 필요한 정보를 신속하고 정확하게 찾을 수 있도록 지원하는 프로젝트 입니다. 사용자는 키워드 검색을 통해 관련 사업의 예산, 수행부처, 연관 과학기술 등의 종합적인 정보를 한눈에 파악할 수 있습니다. 이를 통해 과학기술 정책 수립 및 평가 과정에서의 데이터 기반 의사결정을 촉진하고, 부서 간 정보 공유와 협업을 강화하여 국가 과학기술 발전에 기여하는 것을 궁극적인 목표로 합니다.',
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
    {
      title: 'MLOps 플랫폼 Back-end Engineer',
      startedAt: '2021-08',
      endedAt: '2023-02',
      where: '장소 : 광주은행, LGcns, 흥국화재, 삼성화재',
      descriptions: [
        {
          content:
            '',
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
