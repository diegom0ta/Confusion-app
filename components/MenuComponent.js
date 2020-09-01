import React, {Component} from 'react';
import {FlatList, View, Text} from 'react-native';
import {Tile} from 'react-native-elements';
import {connect} from 'react-redux';
import baseURL from '../shared/baseURL';
import Loading from './LoadingComponent';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
  };
};

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Menu',
  };

  render() {
    const renderMenuItem = ({item, index}) => {
      return (
        <Tile
          key={index}
          title={item.name}
          caption={item.description}
          featured
          onPress={() => navigate('DishDetail', {dishId: item.id})}
          imageSrc={{uri: baseURL + item.image}}
        />
      );
    };

    const {navigate} = this.props.navigation;

    if (this.props.dishes.isLoading) {
      return <Loading />;
    } else if (this.props.dishes.errMsg) {
      return (
        <View>
          <Text>{this.props.dishes.errMsg}</Text>
        </View>
      );
    } else {
      return (
        <FlatList
          data={this.props.dishes.dishes}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.id.toString()}
        />
      );
    }
  }
}

export default connect(mapStateToProps)(Menu);
