import React from 'react';
import { View ,ActivityIndicator} from 'react-native';
import { defaultTheme } from '../../theme';

import { styles } from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={defaultTheme.colors.blue500} size={64}></ActivityIndicator>
    </View>
  );
}