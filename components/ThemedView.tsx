// ThemedView.tsx

import React from 'react';
import { View, ViewProps } from 'react-native';
import { useColorScheme } from 'nativewind';

const DEFAULT_CLASSES = 'bg-white dark:bg-gray-900';

// Updated type definition using 'bkgdClass'
type ThemedViewProps = ViewProps & {
  // Optional prop to override the default background color (e.g., 'bg-red-500')
  bkgdClass?: string;
  // Optional prop for border color
  borderClass?: string;
};

export function ThemedView({
  bkgdClass, // Changed from backgroundClass
  borderClass,
  className: propClassName,
  ...rest
}: ThemedViewProps) {
  const { colorScheme } = useColorScheme();


  const defaultThemeBackgroundClass = DEFAULT_CLASSES;

  // 2. Define default border color if needed (optional)
  // const defaultThemeBorderClass = 'border-gray-200 dark:border-gray-700'; // You can keep this if using borders

  // 3. Combine all classes, prioritizing overrides
  // bkgdClass will override the default theme background if provided
  const combinedClassName = `${bkgdClass || defaultThemeBackgroundClass} ${
    borderClass || ''
  } ${propClassName || ''}`;

  return <View className={combinedClassName} {...rest} />;
}
