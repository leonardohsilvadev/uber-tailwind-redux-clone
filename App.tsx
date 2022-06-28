import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { Home, Map } from './src/screens'
import { store } from './src/store'

export default function App() {
  const Stack = createNativeStackNavigator()

  const stackOptions = {
    headerShown: false,
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={stackOptions} />
            <Stack.Screen name="Map" component={Map} options={stackOptions} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  )
}
