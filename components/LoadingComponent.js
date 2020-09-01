import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import Styles from '../shared/styles';

export const Loading = () => {
  return (
    <View style={Styles.loadingView}>
      <ActivityIndicator size="large" color="#512DA8" />
      <Text style={Styles.loadingText}>Loading...</Text>
    </View>
  );
};
