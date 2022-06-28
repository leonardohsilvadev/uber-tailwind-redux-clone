import React from 'react'
import { Image, SafeAreaView, View } from 'react-native'
import tw from 'twrnc'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = {
  container: tw`bg-white h-full`,
  logoContainer: tw`p-5`,
}
