import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Modal,
  Button,
  Input
} from 'react-native';
import {Card, Icon, Rating} from 'react-native-elements';
import Styles from '../shared/styles';
import {connect} from 'react-redux';
import baseURL from '../shared/baseURL';
import {postFavorite, postComment} from '../redux/ActionCreators';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    favorites: state.favorites
  };
};

const mapDispatchToProps = (dispatch) => ({
  postFavorite: (dishId) => dispatch(postFavorite(dishId)),
  postComment: (dishId, author, comment, rating) =>
    dispatch(postComment(dishId, author, comment, rating))
});

const RenderDish = (props) => {
  const dish = props.dish;

  if (dish != null) {
    return (
      <Card featuredTitle={dish.name} image={{uri: baseURL + dish.image}}>
        <Text style={Styles.text}>{dish.description}</Text>
        <Icon
          raised
          reverse
          name={props.favorite ? 'heart' : 'heart-o'}
          type='font-awesome'
          color='#f50'
          onPress={() =>
            props.favorite ? console.log('Favorite') : props.onPress()
          }
        />
        <Icon
          name='pencil'
          type='font-awesome'
          color='#512DA8'
          onPress={() => props.toggleModal()}
        />
      </Card>
    );
  } else {
    return <View />;
  }
};

const RenderComments = (props) => {
  const comments = props.comments;
  const renderCommentItem = ({item, index}) => {
    return (
      <View key={index} style={Styles.viewRenderComments}>
        <Text style={Styles.textComment}>{item.comment}</Text>
        <Text style={Styles.textRating}>{item.rating} Stars</Text>
        <Text style={Styles.textAuthorAndDate}>
          {'-- ' + item.author + ', ' + item.date}
        </Text>
      </View>
    );
  };
  return (
    <Card title='Comments'>
      <FlatList
        data={comments}
        renderItem={renderCommentItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Card>
  );
};

class DishDetail extends Component {
  constructor(props) {
    super(props);
    var d = new Date();
    this.state = {
      rating: 0,
      author: '',
      comment: '',
      date: d.toISOString(),
      showModal: false
    };
  }

  toggleModal() {
    this.setState({showModal: !this.state.showModal});
  }

  resetForm() {
    this.setState({
      rating: 0,
      author: '',
      comment: '',
      date: ''
    });
  }

  handleComment(state) {
    this.props.postComment(state);
  }

  markFavorite(dishId) {
    this.props.postFavorite(dishId);
  }

  static navigationOptions = {
    title: 'Dish Details'
  };

  render() {
    const dishId = this.props.navigation.getParam('dishId', '');
    return (
      <ScrollView>
        <RenderDish
          dish={this.props.dishes.dishes[+dishId]}
          favorite={this.props.favorites.some((el) => el === dishId)}
          onPress={() => this.markFavorite(dishId)}
        />
        <RenderComments
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === dishId
          )}
        />
        <Modal
          animationType='slide'
          transparent={false}
          visible={this.state.showModal}
          onDismiss={() => {
            this.toggleModal();
            this.resetForm();
          }}
          onRequestClose={() => {
            this.toggleModal();
            this.resetForm();
          }}>
          <View style={Styles.modal}>
            <Rating
              type='star'
              ratingCount={5}
              imageSize={60}
              showRating
              onFinishRating={this.ratingCompleted}
            />
            <Input
              placeholder='Author'
              leftIcon={{type: 'font-awesome', name: 'user'}}
              onChangeText={(value) => this.setState({author: value})}
            />
            <Input
              placeholder='Comment'
              leftIcon={{type: 'font-awesome', name: 'comment'}}
              onChangeText={(value) => this.setState({comment: value})}
            />
            <Button
              title='SUBMIT'
              color='#512DA8'
              onPress={() => this.handleComment(this.state)}
            />
            <Button
              onPress={() => {
                this.toggleModal();
                this.resetForm();
              }}
              title='CANCEL'
              color='#FFF'
            />
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);
