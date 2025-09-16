export interface Degree {
  id: number;
  school: string;
  degree: string;
  year: string;
  location: string;
  link: string;
}

const degrees: Degree[] = [
  {
    id: 0,
    school: 'University of Delaware',
    degree: 'M.S. Computer Science',
    location: 'Newark, DE',
    link: 'https://udel.edu',
    year: '09/18 - 12/19',
  },
  {
    id: 1,
    school: 'University of Delaware',
    degree: 'B.S. Computer Engineering',
    location: 'Newark, DE',
    link: 'https://udel.edu',
    year: '01/15 - 05/18',
  },
];

export default degrees;
