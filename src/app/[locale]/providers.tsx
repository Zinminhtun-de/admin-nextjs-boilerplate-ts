'use client';
import theme from '@/components/ui/theme';
import { ThemeProvider } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { Provider as JotaiProvider } from 'jotai';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AppProgressBar } from 'next-nprogress-bar';
import { SWRConfig } from 'swr';
import fetcher from '@/lib/fetcher';
import { SnackbarProvider } from '@/components/ui/snackbar/SnackbarContext';

const InnerProviders = ({ children }: PropsWithChildren) => {

  const swrConfig = {
    fetcher,
    // onError: (err: AxiosError) => {
    //   showMessage({
    //     message: err.message,
    //     severity: SEVERITY.ERROR,
    //   });
    // },
  };

  return (
    <SWRConfig value={swrConfig}>
      <ThemeProvider theme={theme}>
        <JotaiProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {children}
            <AppProgressBar
              height="4px"
              color="#197CC0"
              options={{
                showSpinner: false,
              }}
              shallowRouting
            />
          </LocalizationProvider>
        </JotaiProvider>
      </ThemeProvider>
    </SWRConfig>
  );
};

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <SnackbarProvider>
      <InnerProviders>{children}</InnerProviders>
    </SnackbarProvider>
  );
};

export default Providers;
