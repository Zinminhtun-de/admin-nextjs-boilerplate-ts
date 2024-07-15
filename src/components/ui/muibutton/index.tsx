'use client';
import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { ButtonProps as MButtonProps, styled } from '@mui/material';
import { cn } from '@/utils/cn';

type Props = MButtonProps & React.PropsWithChildren;
interface ButtonProps extends Props {
  loading?: boolean;
}

const ButtonStyled = styled(LoadingButton)<ButtonProps>(() => ({}));

const MButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <ButtonStyled className={cn("normal-case",rest.className)} variant={rest.variant || 'contained'} disableElevation {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default MButton;
