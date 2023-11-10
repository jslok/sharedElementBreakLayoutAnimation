import React, { useState } from 'react'
import { View, Button } from 'react-native'
import Animated, { SharedTransition, withTiming, FadeOut } from 'react-native-reanimated'

const animationConfig = {
  duration: 250,
}
const transition = SharedTransition.custom((values) => {
  'worklet'
  return {
    height: withTiming(values.targetHeight, animationConfig),
    width: withTiming(values.targetWidth, animationConfig),
    originY: withTiming(values.targetOriginY, animationConfig),
    originX: withTiming(values.targetOriginX, animationConfig),
  }
})

const Screen2: React.FC = ({ navigation }) => {
  const [switchComponent, setSwitchComponent] = useState(true)
  const [mounted, setMounted] = useState(true)

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <Button
        title="Go to home"
        onPress={() => {
          console.log('press navigate on Screen2')
          navigation.navigate('Home')
        }}
      />
      <Button title={'Switch Component'} onPress={() => setSwitchComponent(!switchComponent)} />
      <Button
        title={mounted ? 'Hide component' : 'Show component'}
        onPress={() => setMounted(!mounted)}
      />
      {mounted && (
        <>
          {switchComponent ? (
            <Animated.View
              key={'green'}
              style={{ width: 100, height: 100, backgroundColor: 'green' }}
              sharedTransitionTag={'sharedTag'}
              sharedTransitionStyle={transition}
              //exiting={FadeOut}
            />
          ) : (
            <Animated.View
              key={'red'}
              style={{ width: 100, height: 100, backgroundColor: 'red' }}
              sharedTransitionTag={'sharedTagRed'}
              sharedTransitionStyle={transition}
              //exiting={FadeOut}
            />
          )}
        </>
      )}
    </View>
  )
}

export default Screen2
