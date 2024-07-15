'use client';
import * as React from 'react';
import { DialogActions, DialogContent, DialogProps, Dialog as MDialog } from '@mui/material';
import theme from '../theme';
import MButton from '../muibutton';
import { FiX } from 'react-icons/fi';

type MDialogProps = DialogProps & React.PropsWithChildren;
interface CustomDialogProps extends MDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  closeIcon?: boolean;
  actionCancelText?: string;
  actionSaveText?: string;
  isLoading?: boolean;
  isDisable?: boolean;
  actionOnClick?: (arg?: any) => void;
  navigateTo?: string;
  primary?: boolean;
}

const Dialog: React.FC<CustomDialogProps> = ({
  open,
  setOpen,
  isDisable,
  isLoading,
  actionOnClick,
  actionCancelText,
  actionSaveText,
  ...rest
}) => {
  return (
    <MDialog
      maxWidth="lg"
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      {...rest}
      sx={{
        backdropFilter: 'blur(5px)',
      }}
    >
      {rest.closeIcon && (
        <div className={`absolute cursor-pointer top-5 right-5`} onClick={() => setOpen(false)}>
          <FiX />
        </div>
      )}
      <DialogContent>{rest.children}</DialogContent>
      <DialogActions sx={{ mx: 2 }}>
        {actionCancelText && (
          <MButton
            variant="outlined"
            className="w-full capitalize"
            sx={{
              height: 44,
              borderRadius: '8px',
              color: theme?.colors.gray[500],
              borderColor: theme.colors.gray[500],
              fontSize: 16,
            }}
            onClick={actionOnClick}
          >
            {actionCancelText?.toLocaleLowerCase()}
          </MButton>
        )}
        {actionSaveText && (
          <MButton
            disabled={isDisable}
            loading={isLoading}
            autoFocus
            onClick={actionOnClick}
            variant="contained"
            className="w-full capitalize"
            sx={{
              height: 44,
              borderRadius: '8px',
              color: theme?.colors.white,
              bgcolor: rest.primary ? theme?.colors?.primary : theme.colors.error[600],
              fontSize: 16,
            }}
          >
            {actionSaveText?.toLocaleLowerCase()}
          </MButton>
        )}
      </DialogActions>
    </MDialog>
  );
};

export default Dialog;
