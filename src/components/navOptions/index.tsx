import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base'
import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { NAV_DATA } from '../../utils/navData'
import { styles } from './styles'

export default function navOptions() {
  const { navigate } = useNavigation()

  const handleNavigate = screen => {
    navigate(screen)
  }

  return (
    <FlatList
      data={NAV_DATA}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.container} onPress={() => handleNavigate(item.screen)}>
          <View style={styles.optionsContainer}>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            />
            <Text style={styles.optionsTitle}>{item.title}</Text>
            <Icon style={styles.arrowIcon} type="antdesign" name="arrowright" color="white" />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}
