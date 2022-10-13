import React from 'react';
import { ActivityIndicator} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { defaultTheme } from '../../theme';

import { styles } from './styles';

export function Loading() {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator color={defaultTheme.colors.blue500} size={64}></ActivityIndicator>
    </SafeAreaView>
  );
}