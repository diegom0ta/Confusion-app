import React, {Component} from 'react';
import {Text, FlatList, ScrollView} from 'react-native';
import {Card, ListItem} from 'react-native-elements';
import {connect} from 'react-redux';
import baseURL from '../shared/baseURL';
import {Loading} from './LoadingComponent';

const mapStateToProps = (state) => {
  return {
    leaders: state.leaders,
  };
};

const History = (
  <Card title="Our History">
    <Text>
      Started in 2010, Ristorante con Fusion quickly established itself as a
      culinary icon par excellence in Hong Kong. With its unique brand of world
      fusion cuisine that can be found nowhere else, it enjoys patronage from
      the A-list clientele in Hong Kong. Featuring four of the best three-star
      Michelin chefs in the world, you never know what will arrive on your plate
      the next time you visit us. The restaurant traces its humble beginnings to
      The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that
      featured for the first time the world's best cuisines in a pan.
    </Text>
  </Card>
);

class About extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'About us',
  };

  render() {
    const renderLeaderItem = ({item, index}) => {
      return (
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.description}
          hideChevron={true}
          leftAvatar={{source: {uri: baseURL + item.image}}}
        />
      );
    };

    if (this.props.leaders.isLoading) {
      return (
        <ScrollView>
          <History />
          <Loading />
        </ScrollView>
      );
    } else if (this.props.leaders.errMsg) {
      return (
        <>
          <History />
          <Text>{this.props.leaders.errMsg}</Text>
        </>
      );
    } else {
      <ScrollView>
        <History />
        <Card title="Corporate Leadership">
          <FlatList
            data={this.props.leaders.leaders}
            renderItem={renderLeaderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </Card>
      </ScrollView>;
    }
  }
}
export default connect(mapStateToProps)(About);
