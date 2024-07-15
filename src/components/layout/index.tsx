'use client';
import React, { PropsWithChildren } from 'react';
import Drawer from './Drawer';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

interface PageLayoutProps extends PropsWithChildren {
  title?: string;
}
const PageLayout: React.FC<PageLayoutProps> = ({ children, ...rest }: PageLayoutProps) => {
  const pathname = usePathname();

  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  return (
    <div>
      {
      pathname === `/${currentLocale}/login` ||
      pathname === `/${currentLocale}/register` ||
      pathname === `/login` ||
      pathname === `/register` 
       ? (
        children
      ) : (
        <Drawer {...rest}>{children}</Drawer>
      )}
    </div>
  );
};

export default PageLayout;


