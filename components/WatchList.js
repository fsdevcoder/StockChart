import React from "react";
import { TextInput, View, Text, Button, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import mainstyles from '../assets/styles';
import Screen from './Screen';
import StockCard from './StockCard';
import StockDetails from './StockDetails';
import { withNavigation } from 'react-navigation'

const styles = StyleSheet.create({
    stockCardWrap: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1,
        backgroundColor: 'rgba(100, 100, 100, 0.8)'
    },
    searchBar: {
        position: "absolute"
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 }
    }
})

class WatchList extends React.Component {
    state = {
        search: '',
        dataSource: [],
        symbollist: [],
        stocklist: [],
    };

    static navigationOptions = {
        headerTitleStyle: mainstyles.myheadertitlestyle,
        headerStyle: mainstyles.myheaderstyle,
        headerTintColor: '#fff',
        title: 'WatchList',
    }
    constructor(props) {
        super(props);
        timeout = 0;
        var url = 'https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_3af9aba425b446ccb752b7ae045c0b09';
        fetch(url)
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    symbollist: responseJson,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleSelectStockCard = symbol => {
        navigation.setParams({
            selectedStockId: symbol,
            isStockDropdownVisible: !isStockDropdownVisible
        })
    }

    updateSearch = (search) => {
        this.setState({ search });
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            if (search.length != 0) {
                this.setState({
                    dataSource: this.state.symbollist.filter(item => item.name.toLowerCase().indexOf(search.toLowerCase()) >= 0),
                });
            }
            else {
                this.setState({
                    dataSource: [],
                });
            }
        }, 300);
    };

    render() {
        const isStockDropdownVisible = this.props.navigation.getParam('isStockDropdownVisible')
        return (
            <Screen>
                {isStockDropdownVisible ? (
                    <Screen style={styles.stockCardWrap} scrollEnabled={true}>
                        <SearchBar
                            ref={(el) => { this.search = el; }}
                            placeholder="Type stock name here..."
                            value={this.state.search}
                            onChangeText={this.updateSearch}
                            style={styles.searchBar}
                        />
                        <Screen scrollEnabled={true}>
                            <Screen style={{
                                ...StyleSheet.absoluteFillObject,
                                zIndex: 1,
                                backgroundColor: 'rgba(255, 255, 255, 0.5)'
                            }} scrollEnabled={true}>
                                {this.state.dataSource.map(w => (
                                    <StockCard
                                        key={w.symbol}
                                        name={w.name}
                                        symbol={w.symbol}
                                        state={this.state}
                                    />
                                ))}
                            </Screen>
                        </Screen>
                    </Screen>
                ) : null}
                <Screen style={{
                    ...StyleSheet.absoluteFillObject,
                    backgroundColor: 'rgba(0, 255, 255)'
                }} scrollEnabled={true}>
                    {this.state.stocklist.map(w => (
                        <View style={styles.card} key={w.symbol}>
                            <StockDetails
                                    stock={w}
                                    state={this.state}
                                    watchlist={this}
                                />
                        </View>
                    ))}
                </Screen>
            </Screen>
        )
    }
}

export default withNavigation(WatchList)