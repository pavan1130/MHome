import React from 'react';
import {View, Text} from 'react-native';

const PinnedmsgScreen = ({route}) => {
  const {message} = route.params;

  return (
    <View>
      <Text>Pinned Message</Text>
      <Text>{message.text}</Text>
    </View>
  );
};

export default PinnedmsgScreen;
