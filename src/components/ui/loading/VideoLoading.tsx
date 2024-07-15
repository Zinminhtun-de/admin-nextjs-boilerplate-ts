import { cn } from '@/lib/utils';
import React from 'react';

const VideoLoading = ({ className }: { className?: string }) => {
  return <div className={cn('flex justify-center items-center', className)}>VideoLoading</div>;
};

export default VideoLoading;
