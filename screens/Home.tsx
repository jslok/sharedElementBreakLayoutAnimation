import React, { useState } from 'react';
import { View, Button, UIManager, LayoutAnimation, Text } from 'react-native';
import Animated from 'react-native-reanimated';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Home: React.FC = ({ navigation }) => {
  const [bigSquare, setBigSquare] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Do LayoutAnimation (change size)"
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setBigSquare(!bigSquare);
        }}
      />
      <View
        style={{
          width: bigSquare ? 250 : 150,
          height: bigSquare ? 250 : 150,
          backgroundColor: 'green',
        }}>
        <Text>Resize expected to be animated</Text>
      </View>

      <Animated.View sharedTransitionTag={'sometag'}>
        <Text>Animated compomnent w/ sharedTransitionTag</Text>
      </Animated.View>
    </View>
  );
};

export default Home;
