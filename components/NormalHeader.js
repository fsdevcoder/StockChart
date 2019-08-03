import React from 'react'
import { withNavigation } from 'react-navigation'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

class NormalHeader extends React.Component {  
  render () {
    return (
      <TouchableOpacity
        style={{width:'100%'}}
        activeOpacity={0.7}
      >
        <View style={styles.textWrap}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  textWrap: {
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconWrap: {
    marginTop: 2,
    marginLeft: 3,
    justifyContent: 'center',
  }
})

export default withNavigation(NormalHeader)
