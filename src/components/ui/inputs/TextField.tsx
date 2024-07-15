import { cn } from '@/utils/cn';
import {
  OutlinedTextFieldProps,
  TextField as MTextField,
  styled,
  TextFieldVariants,
} from '@mui/material';
import React, { forwardRef } from 'react';

interface TextFieldProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  label?: string;
  variant?: TextFieldVariants;
  password?: boolean;
}

const TextFieldStyled = styled(MTextField)<TextFieldProps>(() => ({}));

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { ...rest },
  ref
) {
  const { label, value, password, variant = 'outlined' } = rest;
  const [showPassword, ] = React.useState(false);
 
  return password ? (
    <TextFieldStyled
      ref={ref}
      className={cn(rest.className)}
      label={label}
      variant={variant}
      value={value}
      fullWidth
      type={showPassword ? 'text' : 'password'}
      {...rest}
    />
  ) : (
    <TextFieldStyled
      ref={ref}
      className={cn(rest.className)}
      label={label}
      variant={variant}
      value={value}
      fullWidth
      {...rest}
    />
  );
});

export type { TextFieldProps };
export default TextField;
