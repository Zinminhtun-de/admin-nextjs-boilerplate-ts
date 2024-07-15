import { cn } from '@/utils/cn';
import React, { ReactNode } from 'react';

const Grid = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={cn('grid grid-cols-3 gap-2', className)}>{children}</div>;
};

export default Grid;
