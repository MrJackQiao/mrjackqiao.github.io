/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  // {
  //   name: '',
  //   position: '',
  //   url: '',
  //   startDate: '',
  //   endDate: '',
  //   highlights: [],
  // },
  {
    name: 'Delaware Digestive Lab',
    position: 'Full Stack Developer and System Administrator',
    url: '',
    startDate: '2020-01',
    endDate: '2021-05',
    highlights: [
      'Developed a full-stack inventory management system with Vue.js and Laravel, streamlining tracking and reporting.',
      'Managed servers and networks on Proxmox, ensuring secure, reliable performance and high availability.',
    ],
  },
  {
    name: 'Nokia Shanghai Bell',
    position: 'System Administrator',
    url: '',
    startDate: '2019-06',
    endDate: '2019-08',
    highlights: [
      'Integrated Coverity static code analyzer into Jenkins CI, strengthening automated code quality checks.',
      'Configured Jenkins jobs to launch OpenStack VMs and run code checks through automated Bash workflows.',
      'Developed Python tools to parse analyzer reports and deliver actionable insights for developers.',
    ],
  },
  {
    name: 'University of Delaware',
    position: 'Graduate Teaching Assistant',
    url: 'https://udel.edu',
    startDate: '2021-06',
    endDate: '2025-05',
    highlights: [
      'Assisted instruction multiple times in Data Structures (C++) and Introduction to Software Engineering (React, TypeScript).',
      'Instructed Introduction to Machine Learning (Python, TensorFlow, PyTorch), with emphasis on hands-on coding.',
    ],
  },
];

export default work;
