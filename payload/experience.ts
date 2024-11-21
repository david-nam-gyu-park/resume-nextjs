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
          descriptions: [
            'Steering Kernel patching and updates for various distributions',
            'Automating deployment and integration processes for Linux servers',
            'Spearheading initiatives to enhance Linux kernel security',
            'Collaborating with global developers to coordinate code contributions',
          ],
          skillKeywords: ['Python', 'Shell Scripting', 'Linux', 'Kernel', 'Security', 'Automation', 'Virtualization'],
        },
        {
          title: 'MLOps Engineer',
          startedAt: '2021-08',
          endedAt: '2023-02',
          descriptions: [
            'Assisted senior engineers in maintaining and updating kernel patches for Linux distributions',
            'Supported deployment and integration tasks for Linux server environments',
            'Conducted research on Linux kernel security practices and presented findings to the team',
          ],
          skillKeywords: ['C', 'Linux', 'Kernel', 'Support', 'Research'],
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
