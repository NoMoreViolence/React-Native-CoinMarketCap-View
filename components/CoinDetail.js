import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class CoinDetail extends React.Component {
  render() {
    let date = new Date();
    let now = date.toLocaleString();

    return (
      <View style={styles.container}>
        <Image
          style={{ width: 50, height: 50, marginRight: 10, marginLeft: 10 }}
          source={{ uri: this.props.iconUrl }}
        />
        <Text style={[styles.rank]}>{'#' + (this.props.rank || 'Rank')}</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginLeft: 15,
            borderWidth: 5,
            borderColor: '#d6d7da'
          }}
        >
          <View>
            <Text style={[styles.name]}>{this.props.name || 'Name'}</Text>
            <Text style={[styles.volumn]}>
              {'Volume: ' + (this.props.volumn || 0)}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              marginBottom: 5,
              alignItems: 'center'
            }}
          >
            <Text>$: </Text>
            <Text style={[styles.price]}>
              {'Price: ' + (this.props.price || 0)}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row', // row
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    marginTop: 20,
    marginBottom: 20
  },
  rank: {
    width: 40,
    marginRight: 20,
    fontSize: 20,
    color: 'black'
  },
  text: {
    fontSize: 20,
    color: 'black'
  },
  name: {
    color: 'black',
    fontSize: 20
  },
  volumn: {
    fontSize: 20,
    color: 'black'
  }
});

export default CoinDetail;
