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
    <table className="skills-table">
      <tbody>
        {data.map((category) => (
          <tr key={category.id}>
            <td className="category">{category.category}</td>
            <td className="skills">{category.skills.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SkillSection;
