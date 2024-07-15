import Grid from '@/components/layout/Grid';
import { cn } from '@/lib/utils';
import { Stack } from '@mui/material';
import React from 'react';

const skeletonStyle = 'h-3 bg-gray-200 rounded-full dark:bg-gray-700';
const TableLoading = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="w-full h-16 bg-gray-100 rounded-lg dark:bg-gray-200 flex items-center px-8 gap-2">
        <Stack direction="row" gap={2}>
          <div className={cn(skeletonStyle, 'h-12 w-12')} />
          <Stack gap={1} alignItems="flex-start" justifyContent="center">
            <div className={cn(skeletonStyle, 'h-2.5 w-20')} />
            <div className={cn(skeletonStyle, 'h-2.5 w-24')} />
          </Stack>
        </Stack>
        <Grid className="flex-grow items-start">
          <div className={skeletonStyle} />
          <div className={skeletonStyle} />
          <div className={skeletonStyle} />
        </Grid>
      </div>
    </div>
  );
};

export default TableLoading;

export const PaginationLoading = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className="animate-pulse"
    >
      <Stack direction="row" gap={2} alignItems="flex-start" justifyContent="center">
        <div className={cn(skeletonStyle, 'h-4 w-20 rounded')} />
        <div className={cn(skeletonStyle, 'h-4 w-24 rounded')} />
      </Stack>
      <Stack direction="row" gap={2} alignItems="flex-start" justifyContent="center">
        <div className={cn(skeletonStyle, 'h-4 w-20 rounded')} />
        <div className={cn(skeletonStyle, 'h-4 w-24 rounded')} />
      </Stack>
    </Stack>
  );
};
