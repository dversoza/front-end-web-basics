import React from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider value={{ name: 'Daniel' }}>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;