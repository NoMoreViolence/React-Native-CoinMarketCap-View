import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import TopBar from './components/TopBar'; // 탑 바
import CoinView from './components/CoinView'; // Call your new friend

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshDate: '-'
    };
  }

  _setRefreshDate(date) {
    console.log('Updated: ' + date);
    // state 업데이트 갱신
    this.setState({
      refreshDate: date
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}
          backgroundColor="blue"
          barStyle="light-content"
        />
        <TopBar title="Coins" refreshDate={this.state.refreshDate} />
        <CoinView
          style={styles.coinView}
          refreshDate={date => this._setRefreshDate(date)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // column
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between' // center, space-around
  },
  coinView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column', // row
    backgroundColor: 'white'
    // Scroll View 에는 이 두개의 것들이 필요가 없다
    // alignItems: 'center',
    // justifyContent: 'flex-start' // center, space-around
  },
  box: {
    backgroundColor: 'blue',
    width: 50,
    height: 50
  }
});
