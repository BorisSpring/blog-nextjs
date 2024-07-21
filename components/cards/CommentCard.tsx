import React from 'react';
import UserAvatar from '../UserAvatar';
import CommentActions from '../CommentActions';

const CommentCard = () => {
  return (
    <div className='grid grid-cols-[50px_1fr] bg-gray-100 p-3 rounded-sm'>
      <UserAvatar />
      <div className='flex flex-col gap-3'>
        <div>
          <p className='text-zinc-700 font-bold text-xs md:text-base'>
            Boris Dimitrijevic
          </p>
          <p className='text-zinc-400 text-xs'>16 decemvbar 200, 11:40 AM</p>
        </div>
        <p className='text-sm md:text-base text-zinc-500'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi.
        </p>
        <CommentActions />
      </div>
    </div>
  );
};

export default CommentCard;
