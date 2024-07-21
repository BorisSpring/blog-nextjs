import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@radix-ui/react-tooltip';
import React from 'react';

interface Props {
  children: React.ReactNode;
  tooltip: String;
}

const ActionToolTip = ({ children, tooltip }: Props) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className='bg-zinc-600 text-white px-2 py-1 rounded-md'
          align='start'
          sideOffset={4}
        >
          <p className='text-sm'>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ActionToolTip;
