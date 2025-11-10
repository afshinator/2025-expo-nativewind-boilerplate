import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useReactQueryDevTools } from '@dev-plugins/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  const queryClient = new QueryClient()
  useReactQueryDevTools(queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <ScreenContent title="Home" path="App.tsx"></ScreenContent>
      <StatusBar style="auto" />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
