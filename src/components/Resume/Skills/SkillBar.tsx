import React from 'react';

import type { CategorySkills } from '@/data/resume/skills';

interface CategorySkillsProps {
  data: CategorySkills;
}

const SkillBar: React.FC<CategorySkillsProps> = ({ data }) => {
  return (
    <article className="skill-bar">
      <div className="category">{data.category}</div>
      <div className="skills">{data.skills.join(', ')}</div>
    </article>
  );
};

export default SkillBar;
