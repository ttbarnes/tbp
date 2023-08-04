import { SOFT_SKILLS } from '@/content-strings';

const SoftSkillsList = () => (
  <ul
    className='tag-list'
    aria-label="Some of Tony's soft skills"
  >
    {SOFT_SKILLS.map((skill) => {
      return (
        <li
          key={skill}
          className='tag-list-item tag-list-item-dark'
        >
          {skill}
        </li>
      );
    })}
  </ul>
);

export default SoftSkillsList;
