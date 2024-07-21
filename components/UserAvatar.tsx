import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Props {
  imageUrl?: string;
  fallBack?: string;
}

const UserAvatar = ({ imageUrl, fallBack }: Props) => {
  return (
    <Avatar>
      <AvatarImage src='../public/avatar.png' />
      <AvatarFallback className='bg-white shadow-sm text-zinc-500'>
        CN
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
