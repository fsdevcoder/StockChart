import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

class HeaderDropdown extends React.Component {
  toggleDropdownVisibility = () => {
    const isStockDropdownVisible = this.props.navigation.getParam(
      'isStockDropdownVisible'
    )

    this.props.navigation.setParams({
      isStockDropdownVisible: !isStockDropdownVisible
    })
  }

  render () {
    const isStockDropdownVisible = this.props.navigation.getParam(
      'isStockDropdownVisible'
    )

    return (
      <TouchableOpacity
        style={{width:'100%'}}
        activeOpacity={0.7}
        onPress={this.toggleDropdownVisibility}
      >
        <View style={styles.textWrap}>
          <Text style={styles.text}>{this.props.title}</Text>
          <View style={styles.iconWrap}>
            <Ionicons
              name={isStockDropdownVisible ? 'ios-arrow-up' : 'ios-arrow-down'}
              color={'rgba(255, 255, 255, 0.7)'}
              size={14}
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

HeaderDropdown.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
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

export default withNavigation(HeaderDropdown)
