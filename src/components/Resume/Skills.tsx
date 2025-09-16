import React from 'react';

import type { CategorySkills as CategorySkillsType } from '@/data/resume/skills';

import SkillBar from './Skills/SkillBar';

interface SkillsProps {
  data: CategorySkillsType[];
}

const SkillSection: React.FC<SkillsProps> = ({ data }) => (
  <div className="skills">
    <div className="link-to" id="skills" />
    <div className="title">
      <h3>Skills</h3>
    </div>
    {data.map((categorySkill) => (
      <SkillBar data={categorySkill} key={categorySkill.id} />
    ))}
  </div>
);

export default SkillSection;
