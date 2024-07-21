'use client';
import { Edit, MessageCircleMore, Trash } from 'lucide-react';
import React from 'react';
import ActionToolTip from './ActionToolTip';

const CommentActions = () => {
  return (
    <div className='flex items-center gap-3'>
      <ActionToolTip tooltip='Replay'>
        <button className=' p-1 rounded-sm group group-hover:bg-blue-200 transition'>
          <MessageCircleMore className='size-4 text-blue-500  hover:text-blue-600 ' />
        </button>
      </ActionToolTip>
      <ActionToolTip tooltip='Edit'>
        <button className=' group p-1 group-hover:text-emerald-200 transition'>
          <Edit className='size-4 text-emerald-500 group-hover:text-emerald-600' />
        </button>
      </ActionToolTip>
      <ActionToolTip tooltip='Delete'>
        <button className=' group p-1 group-hover:text-red-200 transition'>
          <Trash className='size-4 text-red-500 group-hover:text-red-600' />
        </button>
      </ActionToolTip>
    </div>
  );
};

export default CommentActions;
