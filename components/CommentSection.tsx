import React from 'react';
import CommentCard from './cards/CommentCard';

const CommentSection = () => {
  return (
    <div className='max-h-[550px] flex flex-col gap-3  overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-50 scrollbar-thumb-blue-500 scrollbar-thumb- '>
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </div>
  );
};

export default CommentSection;
