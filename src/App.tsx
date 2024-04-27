import React from 'react';
import {SafeAreaView} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Home from './components/Home';

function App(): React.JSX.Element {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

export default App;
