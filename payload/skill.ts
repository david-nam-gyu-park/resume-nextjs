import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'C',
      level: 3,
    },
    {
      title: 'Shell Scripting',
      level: 3,
    },
    {
      title: 'Python',
      level: 3,
    },
    // {
    //   title: 'Perl',
    //   level: 2,
    // },
    {
      title: 'Golang',
      level: 2,
    },
    // {
    //   title: 'Rust',
    //   level: 1,
    // },
  ],
};

const frameworks: ISkill.Skill = {
  category: 'frameworks',
  items: [
    {
      title: 'FastAPI',
      level: 3,
    },
    {
      title: 'FlaskAPI',
      level: 2,
    },
  ],
};


const Database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'PostgreSQL',
      level: 3,
    },
    {
      title: 'Milvus',
      level: 3,
    },
    {
      title: 'Redis',
      level: 2,
    },
    {
      title: 'maraDB',
      level: 2,
    },
  ],
};


const CloudPlatform: ISkill.Skill = {
  category: 'Cloud Platform',
  items: [
    {
      title: 'AWS',
      level: 3,
    },
    {
      title: 'GCP',
      level: 2,
    }
  ],
};


const virtualization: ISkill.Skill = {
  category: 'Virtualization',
  items: [
    {
      title: 'kubernetes',
      level: 3,
    },
    {
      title: 'Docker',
      level: 3,
    },
    {
      title: 'KVM',
      level: 3,
    },
    // {
    //   title: 'Xen',
    //   level: 2,
    // },
    {
      title: 'VirtualBox',
      level: 2,
    },
    {
      title: 'VMware ESXi',
      level: 1,
    },
  ],
};

const kernelDevelopment: ISkill.Skill = {
  category: 'Kernel Development',
  items: [
    {
      title: 'Kernel Programming',
      level: 3,
    },
    {
      title: 'GNU Debugger',
      level: 3,
    },
    {
      title: 'Memory Management',
      level: 2,
    },
    {
      title: 'System Call Interface',
      level: 2,
    },
  ],
};


// const DataEngineering: ISkill.Skill = {
//   category: 'Automation',
//   items: [
//     {
//       title: 'Ansible',
//       level: 3,
//     },
//     {
//       title: 'Airflow',
//       level: 3,
//     },
//     // {
//     //   title: 'Puppet',
//     //   level: 3,
//     // },
//     // {
//     //   title: 'Chef',
//     //   level: 2,
//     // },
//     {
//       title: 'Jenkins',
//       level: 2,
//     },
//     {
//       title: 'CI/CD Pipelines',
//       level: 1,
//     },
//     {
//       title: 'Infrastructure as Code',
//       level: 1,
//     },
//   ],
// };

const automation: ISkill.Skill = {
  category: 'Automation',
  items: [
    // {
    //   title: 'Ansible',
    //   level: 3,
    // },
    {
      title: 'Airflow',
      level: 3,
    },
    {
      title: 'Kafka',
      level: 3,
    },
    // {
    //   title: 'Puppet',
    //   level: 3,
    // },
    // {
    //   title: 'Chef',
    //   level: 2,
    // },
    {
      title: 'Jenkins',
      level: 2,
    },
    {
      title: 'CI/CD Pipelines',
      level: 1,
    },
    {
      title: 'Infrastructure as Code',
      level: 1,
    },
  ],
};

const networkSecurity: ISkill.Skill = {
  category: 'Network Security',
  items: [
    {
      title: 'iptables',
      level: 3,
    },
    {
      title: 'calico',
      level: 3,
    },
    {
      title: 'OpenSSH',
      level: 3,
    },
    {
      title: 'OpenSSL',
      level: 2,
    },
    {
      title: 'NACLs',
      level: 2,
    },
    {
      title: 'VPN Technologies',
      level: 2,
    },
  ],
};


const AuthenticationAuthorization: ISkill.Skill = {
  category: 'Authentication & Authorization',
  items: [
    {
      title: 'OAuth 2.0',
      level: 3,
    },
    {
      title: 'OIDC (OpenID Connect)',
      level: 3,
    },
    {
      title: 'JWT (JSON Web Token)',
      level: 3,
    },
  ],
};



const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Swimming',
    },
    {
      title: "Fitness",
    },
    // {
    //   title: 'Table Tennis',
    // },
    // {
    //   title: 'Guitar Playing',
    // },
    // {
    //   title: 'Joke Telling',
    // },
    // {
    //   title: 'Duct Tape Crafting',
    // },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    frameworks,
    Database,
    CloudPlatform,
    virtualization,
    kernelDevelopment,
    automation,
    networkSecurity,
    AuthenticationAuthorization,
    misc,
  ],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
