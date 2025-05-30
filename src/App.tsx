import React from 'react';
import { RouterProvider } from './components/router/RouterProvider';
import { ThemeProvider } from './components/theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  );
}

export default App;