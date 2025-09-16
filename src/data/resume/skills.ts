export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

export interface CategorySkills {
  id: number;
  category: string;
  skills: string[];
}

const skills: CategorySkills[] = [
  {
    id: 1,
    category: 'Languages',
    skills: ['Python', 'Rust', 'Scala', 'TypeScript', 'C/C++', 'Golang', 'Bash'],
  },
  {
    id: 2,
    category: 'Cloud & DevOps',
    skills: [
      'OpenWhisk',
      'AWS',
      'Docker (incl. Swarm)',
      'Kubernetes',
      'Ansible',
      'CI/CD (Jenkins, GitHub Actions, CircleCI, etc.)',
    ],
  },
  {
    id: 3,
    category: 'Machine Learning',
    skills: ['TensorFlow', 'PyTorch', 'CNN', 'RNN'],
  },
  {
    id: 4,
    category: 'Full Stack',
    skills: ['React', 'Vue', 'Node.js', 'Laravel', 'MongoDB'],
  },
].map((skill) => ({ ...skill, id: skill.id }));

const colors: string[] = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories: Category[] = Array.from(new Set(skills.flatMap(({ category }) => category)))
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
