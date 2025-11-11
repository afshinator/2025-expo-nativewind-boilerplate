// App.tsx

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useReactQueryDevTools } from '@dev-plugins/react-query';

import { Button, Pressable, Text, View } from 'react-native';
import { colorScheme, useColorScheme } from 'nativewind'; // <-- Keep the hook here to access the toggler

import './global.css';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScreenContent } from 'components/ScreenContent';
import { ThemedText } from 'components/ThemedText';

export default function App() {
  const queryClient = new QueryClient();
  useReactQueryDevTools(queryClient);

  const currentScheme = useColorScheme();
  console.log('current ', currentScheme);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    colorScheme.set(newTheme);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <SafeAreaView
          className={`flex-1 ${currentTheme === 'dark' ? 'bg-gray-900' : 'bg-white'} items-center  `}>
          <ScreenContent title="test" path="root">
            <Text>test</Text>
          </ScreenContent>
          <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'} />
          <Pressable onPress={toggleTheme} className="mt-4">
            <Text
              className={currentTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}
              style={{ fontSize: 16, fontWeight: 'bold' }}>
              {currentTheme === 'dark' ? 'Dark' : 'Light'}
            </Text>

            {/* Example 1: Uses defaults (md, regular) and themes automatically */}
            <ThemedText>This text changes color automatically.</ThemedText>

            {/* Example 2: Defines specific size and weight */}
            <ThemedText size="xl" weight="bold" className="mb-4">
              Welcome to the App!
            </ThemedText>

            {/* Example 3: Overrides the color for a specific component (e.g., a button label) */}
            <ThemedText colorClass="text-red-500 dark:text-red-400">Danger Zone!</ThemedText>
          </Pressable>
        </SafeAreaView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
