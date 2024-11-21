import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '애자일소다(AgileSoda)',
      positions: [
        {
          title: 'DataEngineer',
          startedAt: '2023-02',
          // descriptions: [
          //   'Steering Kernel patching and updates for various distributions',
          //   'Automating deployment and integration processes for Linux servers',
          //   'Spearheading initiatives to enhance Linux kernel security',
          //   'Collaborating with global developers to coordinate code contributions',
          // ],
          descriptions: [
            '데이터 수집, 처리 및 저장을 위한 ETL 파이프라인 설계 및 구축',
            '클라우드 플랫폼(AWS, GCP 등) 기반의 데이터 인프라 설계 및 관리',
            '대규모 모델 서빙을 위한 Triton Inference Server 및 vLLM 기반 서빙 시스템 구축',
            '데이터 거버넌스 프레임워크 수립 및 데이터 품질 관리 정책 구현',
            // '데이터 품질 및 무결성을 보장하기 위한 데이터 검증 및 모니터링 시스템 개발',
            '비즈니스 의사결정을 지원하는 데이터 시각화 대시보드 설계 및 개발',
            '데이터 분석 및 머신러닝 모델을 위한 데이터 준비 작업 수행'
          ],
          skillKeywords: ['Python', 'Shell Scripting', 'Linux', 'Kernel', 'Security', 'Automation', 'Virtualization'],
        },
        {
          title: 'MLOps Engineer',
          startedAt: '2021-08',
          endedAt: '2023-02',
          // descriptions: [
          //   'Assisted senior engineers in maintaining and updating kernel patches for Linux distributions',
          //   'Supported deployment and integration tasks for Linux server environments',
          //   'Conducted research on Linux kernel security practices and presented findings to the team',
          // ],
          descriptions: [
            'ML 모델 개발부터 배포까지의 파이프라인 설계 및 자동화',
            'ML 워크플로우 관리 툴(예: MLflow, Airflow)을 활용한 모델 추적 및 버전 관리',
            'CI/CD 파이프라인을 활용한 모델 배포 및 운영 환경 최적화',
            '데이터 엔지니어링 및 머신러닝 팀과 협업하여 데이터 파이프라인 및 MLOps 환경 통합',
            'GPU 클러스터 환경에서 모델 훈련 및 추론 워크로드 최적화'
          ],
          skillKeywords: ['Python', 'Linux', 'Support', 'Frameworks', 'Database', 'Automation', 'Virtualization'],
        },

      ],
    },
    // {
    //   title: 'Open Source Community',
    //   positions: [
    //     {
    //       title: 'System Advocate and Developer',
    //       startedAt: '2010-06',
    //       endedAt: '2018-01',
    //       descriptions: [
    //         'Promoted the use and development of Linux globally.',
    //         'Developed automated scripts to streamline system configuration.',
    //         'Facilitated live patching systems, reducing downtime.',
    //       ],
    //       skillKeywords: ['Open Source', 'Linux', 'AWS', 'RDBMS'],
    //     },
    //   ],
    // },
  ],
};

export default experience;
