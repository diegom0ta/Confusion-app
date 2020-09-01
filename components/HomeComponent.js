import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Card} from 'react-native-elements';
import Styles from '../shared/styles';
import {connect} from 'react-redux';
import baseURL from '../shared/baseURL';
import {Loading} from './LoadingComponent';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

function RenderItem(props) {
  const item = props.item;

  if (props.isLoading) {
    return <Loading />;
  } else if (props.errMsg) {
    return (
      <View>
        <Text>{props.errMsg}</Text>
      </View>
    );
  } else {
    if (item) {
      return (
        <Card
          featuredTitle={item.name}
          featuredSubtitle={item.designation}
          image={{uri: baseURL + item.image}}>
          <Text style={Styles.renderItemText}>{item.description}</Text>
        </Card>
      );
    } else {
      return <View />;
    }
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <ScrollView>
        <RenderItem
          item={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          isLoading={this.props.dishes.isLoading}
          errMsg={this.props.dishes.errMsg}
        />
        <RenderItem
          item={
            this.props.leaders.leaders.filter((leader) => leader.featured)[0]
          }
          isLoading={this.props.leaders.isLoading}
          errMsg={this.props.leaders.errMsg}
        />
        <RenderItem
          item={
            this.props.promotions.promotions.filter(
              (promo) => promo.featured,
            )[0]
          }
          isLoading={this.props.promotions.isLoading}
          errMsg={this.props.promotions.errMsg}
        />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(Home);
