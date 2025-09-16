import React from 'react';

import type { Category, CategorySkills, Skill } from '@/data/resume/skills';

interface CategorySkillsProps {
  data: CategorySkills;
}

const SkillBar: React.FC<CategorySkillsProps> = ({ data }) => {
  return (
    <article>
      <div>
        {data.category}: {data.skills}
      </div>
    </article>
  );
};

export default SkillBar;
