export interface Degree {
  id: number;
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    id: 0,
    school: 'University of Delaware',
    degree: 'M.S. Computer Science',
    link: 'https://udel.edu',
    year: 2019,
  },
  {
    id: 1,
    school: 'University of Delaware',
    degree: 'B.S. Computer Engineering',
    link: 'https://udel.edu',
    year: 2018,
  },
];

export default degrees;
