import React from "react";
import { TextInput, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
// import mainstyles from '../assets/styles';
import { withNavigation } from 'react-navigation'

const ChartTextRow = ({ children }) => (
    <View
        style={[
            styles.ChartTextRow,
            { justifyContent: Array.isArray(children) ? 'space-between' : 'center' }
        ]}
    >
        {children}
    </View>
)

const ChartGraphRow = ({ children }) => (
    <View
        style={
            [
                styles.ChartGraphRow,
                {
                    justifyContent: Array.isArray(children) ? 'space-between' : 'center',
                    height: 200
                }
            ]
        }
    >
        {children}
    </View>
)

class StockChart extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
    }
    state = {
        stock: [{
            symbol: '',
            name: '',
        }],
    };

    componentDidMount() {
        this._isMounted = true;
        const { navigation } = this.props;
        const symbol = navigation.getParam('symbol', 'no-symbol');
        var url = 'https://cloud.iexapis.com/stable/stock/' + symbol + '/quote?token=pk_3af9aba425b446ccb752b7ae045c0b09';

        fetch(url)
            .then(response => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (this._isMounted) {
                    this.setState({ stock: responseJson })
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        return (
            <View style={[styles.wrapper]}>
                <ChartTextRow>
                    <TouchableOpacity
                        activeOpacity={0.5} style={styles.label}>
                        <Text style={styles.label}>{this.state.stock.symbol}</Text>
                    </TouchableOpacity>
                </ChartTextRow>
                <ChartGraphRow>
                    <TouchableOpacity
                        activeOpacity={0.5} style={styles.label}>
                        <Text style={styles.label}>{this.state.stock.name}</Text>
                    </TouchableOpacity>
                </ChartGraphRow>
                <ChartTextRow>
                    <TouchableOpacity
                        activeOpacity={0.5} style={styles.label}>
                        <Text style={styles.label}>Price</Text>
                        <Text style={styles.label} >{this.state.stock.latestPrice}</Text>
                    </TouchableOpacity>
                </ChartTextRow>
                <ChartTextRow>
                    <TouchableOpacity
                        activeOpacity={0.5} style={styles.label}>
                        <Text style={styles.label}>Volumn</Text>
                        <Text style={styles.label} >{this.state.stock.volumn}</Text>
                    </TouchableOpacity>
                </ChartTextRow>
                <ChartTextRow>
                    <TouchableOpacity
                        activeOpacity={0.5} style={styles.label}>
                        <Text style={styles.label}>Day High</Text>
                        <Text style={styles.label} >$21</Text>
                    </TouchableOpacity>
                </ChartTextRow>
                <ChartTextRow>
                    <TouchableOpacity
                        activeOpacity={0.5} style={styles.label}>
                        <Text style={styles.label}>Day Low</Text>
                        <Text style={styles.label} >$17</Text>
                    </TouchableOpacity>
                </ChartTextRow>
                <ChartTextRow>
                    <TouchableOpacity
                        activeOpacity={0.5} style={styles.label}>
                        <Text style={styles.label}>52 Week High</Text>
                        <Text style={styles.label} >{this.state.stock.week52High}</Text>
                    </TouchableOpacity>
                </ChartTextRow>
                <ChartTextRow>
                    <TouchableOpacity
                        activeOpacity={0.5} style={styles.label}>
                        <Text style={styles.label}>52 Week Low</Text>
                        <Text style={styles.label} >{this.state.stock.week52Low}</Text>
                    </TouchableOpacity>
                </ChartTextRow>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        // flex: 1,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
    },
    ChartTextRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        // borderBottomWidth: StyleSheet.hairlineWidth
    },
    ChartGraphRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
        marginBottom: 0,
        borderBottomColor: '#ddd',
        borderWidth: 1,
        // borderBottomWidth: StyleSheet.hairlineWidth
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
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: '600'
    },
    message: {
        textAlign: 'center',
        paddingHorizontal: 10
    }
})

export default withNavigation(StockChart)
