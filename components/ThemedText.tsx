// ThemedText.tsx

import React from 'react';
import { Text, TextProps, StyleProp, TextStyle } from 'react-native';
import { useColorScheme } from 'nativewind';

const DEFAULT_CLASSES = 'text-gray-900 dark:text-gray-100';

type ThemedTextProps = TextProps & {
  // Optional prop to control text size (defaulting to a common size)
  size?: 'sm' | 'md' | 'lg' | 'xl';
  // Optional prop to control font weight (defaulting to regular)
  weight?: 'light' | 'regular' | 'semibold' | 'bold';
  // Optional prop to override the default text color (e.g., 'text-red-500')
  colorClass?: string;
};

export function ThemedText({
  size = 'md',
  weight = 'regular',
  colorClass,
  className: propClassName, // Destructure className to combine with defaults
  ...rest
}: ThemedTextProps) {
  const { colorScheme } = useColorScheme();

  const sizeClasses = {
    sm: 'text-sm', // e.g., 12-14px
    md: 'text-base', // e.g., 16px (common default)
    lg: 'text-lg', // e.g., 18px
    xl: 'text-xl', // e.g., 20px
  };

  const weightClasses = {
    light: 'font-light',
    regular: 'font-normal',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  // Default theme color classes
  const defaultThemeColorClass = DEFAULT_CLASSES;

  // Combine all classes, prioritizing overrides
  const combinedClassName = `${sizeClasses[size]} ${weightClasses[weight]} ${
    colorClass || defaultThemeColorClass
  } ${propClassName || ''}`; // propClassName is last to allow full Tailwind override

  return (
    <Text
      className={combinedClassName}
      // Pass through any other props (like accessibility, style, etc.)
      {...rest}
    />
  );
}
