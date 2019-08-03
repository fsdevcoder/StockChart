import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

const StockRow = ({ children }) => (
  <View
    style={[
      styles.stockRow,
      { justifyContent: Array.isArray(children) ? 'space-between' : 'space-between' }
    ]}
  >
    {children}
  </View>
)

const StockDetails = ({ stock, state, watchlist }) => {
  const onPress = () => {
    new_stocklist = state.stocklist.filter(item=> item.symbol != stock.symbol);
    watchlist.setState({stocklist:new_stocklist});    
  }

  const gotochart = () => {
    // watchlist.props.navigation.setParams({
    //   symbol: stock.symbol
    // })
    watchlist.props.navigation.navigate('StockChart',{symbol:stock.symbol});
  }

  return (
    <View style={styles.wrapper}>
      <StockRow>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => gotochart()}>
          <Text style={styles.label}>{stock.name}</Text>        
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => onPress()}>
          <Text >Remove</Text>
        </TouchableOpacity>
      </StockRow>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    borderTopColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  stockRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400'
  },
  value: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: '200',
    color: '#666',
    marginTop: 10,
    marginBottom: 28
  },
  label: {
    fontWeight: '600'
  },
  message: {
    textAlign: 'center',
    paddingHorizontal: 10
  }
})

export default withNavigation(StockDetails)
