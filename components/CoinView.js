import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
// 코인 상세 뷰
import CoinDetail from './CoinDetail';
import { getCoinIconUri } from '../lib/Constants';

class CoinView extends React.Component {
  // state 선언
  constructor(props) {
    super(props);
    this.state = {
      coinDatas: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    // After component loaded
    this._getCoinDatas(30);

    setInterval(() => {
      this._getCoinDatas(30);
      console.log('toggled!');
    }, 10000);
  }

  _getCoinDatas(limit) {
    this.setState({
      isLoaded: false
    });

    fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=${limit}`)
      .then(response => response.json())
      .then(data => {
        let date = new Date();
        let now = date.toLocaleString();

        if (this.props.refreshDate !== null) {
          this.props.refreshDate(now);
        }

        this.setState({
          coinDatas: data,
          isLoaded: true
        });
      });
  }

  render() {
    let detailCells = this.state.coinDatas.map((data, index) => {
      const { rank, name, price_usd, market_cap_usd, time } = data; // Destructuring
      return (
        <CoinDetail
          key={index}
          rank={rank}
          name={name}
          price={price_usd}
          volumn={market_cap_usd}
          time={time}
          iconUrl={getCoinIconUri(name)}
        />
      );
    });

    /** 같은 동작을 함 **/
    // let detailCells = [];
    //
    // for (var i = 0; i < sampleData.length; i++) {
    //   let data = sampleData[i];
    //   let coinDetail = (
    //     <CoinDetail
    //       key={data.index}
    //       rank={data.rank}
    //       name={data.name}
    //       price={data.price_usd}
    //       volumn={data.market_cap_usd}
    //     />
    //   )
    //   detailCells.push(coinDetail);
    // }

    return <ScrollView style={this.props.style}>{detailCells}</ScrollView>;
  }
}

export default CoinView;
