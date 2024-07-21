import React from 'react';
import Tag from './Tag';

interface Props {
  tags?: {
    id: string;
    name: string;
  }[];
}

const TagsSection = ({ tags }: Props) => {
  return (
    <div className='flex flex-col gap-3'>
      <p className='text-blue-primary-dark font-medium text-base md:text-lg'>
        Tags
      </p>
      <div className='flex flex-wrap gap-3'>
        {[
          { id: '1', name: 'java' },
          { id: '1', name: 'java' },
          { id: '1', name: 'java' },
          { id: '1', name: 'java' },
        ].map(({ id, name }) => (
          <Tag key={id} id={id} name={name} />
        ))}
      </div>
    </div>
  );
};

export default TagsSection;
