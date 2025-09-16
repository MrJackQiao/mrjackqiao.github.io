import React from 'react';

import type { Degree as DegreeType } from '@/data/resume/degrees';

interface DegreeProps {
  data: DegreeType;
}

const Degree: React.FC<DegreeProps> = ({ data }) => (
  <article className="degree-container">
    <header className="degree-grid">
      <div className="school">{data.school}</div>
      <div className="location">{data.location}</div>
      <div className="degree">{data.degree}</div>
      <div className="year">{data.year}</div>
    </header>
  </article>
);

export default Degree;
