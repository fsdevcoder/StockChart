import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const StockRow = ({ children }) => (
  <View
    style={[
      styles.stockRow,
      { justifyContent: Array.isArray(children) ? 'space-between' : 'center' }
    ]}
  >
    {children}
  </View>
)

const StockCard = ({ id, name, symbol, type, isSelected, state }) => {

  const onPress = () => {
    console.log(symbol + "," + name);
    state.stocklist.push({ symbol: symbol, name: name });
  }

  return (

    <View style={[styles.cardTouchable, { opacity: 1 }]}>
      <View style={styles.cardBottom}>
        <TouchableOpacity
          activeOpacity={0.7}
          // onPress={() => onPress(symbol)}
          style={[
            styles.cardWrap,
            { borderColor: isSelected ? '#69A6F7' : '#fff' }
          ]}
        >
          <Text>
            {name}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => onPress()
          }
          style={[
            { borderColor: isSelected ? '#69A6F7' : '#0f0', zIndex: 2 }
          ]}
        >
          <View style={styles.cardBottom}>
            <Ionicons name='md-add' />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

StockCard.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  cardTouchable: {
    borderRadius: 6,
    backgroundColor: '#fff',
    // marginVertical: 8,
    padding: 18,
    // borderWidth: 1,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 }
  },
  cardWrap: {
    display: 'flex',
    justifyContent: 'center',
    height: 10
  },
  header: {
    fontSize: 20,
    marginBottom: 4,
    fontWeight: '400'
  },
  cardBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  value: {
    fontSize: 28,
    fontWeight: '200',
    color: '#666'
  }
})

export default StockCard
