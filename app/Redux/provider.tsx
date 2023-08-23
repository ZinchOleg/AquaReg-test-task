'use client';

import { Provider } from 'react-redux';
import { store } from '@Redux/store';
import { ReactNode, FC } from 'react';

interface IProviders {
  children: ReactNode
}

export const Providers: FC<IProviders> = ({ children }) => {
  return (
    <Provider store={ store }>
      { children }
    </Provider>
  );
};