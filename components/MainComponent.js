import React, {Component} from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import Reservation from './ReservationComponent';
import {View, Image, ScrollView, Text} from 'react-native';
import Styles from '../shared/styles';
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView
} from 'react-navigation';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {
  fetchComments,
  fetchDishes,
  fetchLeaders,
  fetchPromos
} from '../redux/ActionCreators';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  fetchPromos: () => dispatch(fetchPromos())
});

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={Styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <View style={Styles.drawerHeader}>
        <View style={Styles.viewImageDrawerHeader}>
          <Image
            source={require('./images/logo.png')}
            style={Styles.drawerHeaderImage}
          />
        </View>
        <View style={Styles.viewTextDrawerHeader}>
          <Text style={Styles.drawerHeaderText}>Ristorante Con Fusion</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MenuNavigator = createStackNavigator(
  {
    Menu: {
      screen: Menu,
      navigationOptions: ({navigation}) => ({
        headerLeft: (
          <Icon
            name='menu'
            size={24}
            color='white'
            onPress={() => navigation.toggleDrawer()}
          />
        )
      })
    },
    DishDetail: {screen: DishDetail}
  },
  {
    initialRouteName: 'Menu',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#512DA8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: {screen: Home}
  },
  {
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#512DA8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      },
      headerLeft: (
        <Icon
          name='menu'
          size={24}
          color='white'
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
);

const AboutNavigator = createStackNavigator(
  {
    About: {screen: About}
  },
  {
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#512DA8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      },
      headerLeft: (
        <Icon
          name='menu'
          size={24}
          color='white'
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
);

const ContactNavigator = createStackNavigator(
  {
    Contact: {screen: Contact}
  },
  {
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#512DA8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      },
      headerLeft: (
        <Icon
          name='menu'
          size={24}
          color='white'
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
);

const ReservationNavigator = createStackNavigator(
  {
    Reservation: {screen: Reservation}
  },
  {
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#512DA8'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      },
      headerLeft: (
        <Icon
          name='menu'
          size={24}
          color='white'
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({tintColor}) => (
          <Icon name='home' type='font-awesome' size={24} color={tintColor} />
        )
      }
    },
    Menu: {
      screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu',
        drawerIcon: ({tintColor}) => (
          <Icon name='list' type='font-awesome' size={24} color={tintColor} />
        )
      }
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        title: 'About us',
        drawerLabel: 'About us',
        drawerIcon: ({tintColor}) => (
          <Icon
            name='info-circle'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        title: 'Contact',
        drawerLabel: 'Contact',
        drawerIcon: ({tintColor}) => (
          <Icon
            name='address-card'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    },
    Reservation: {
      screen: ReservationNavigator,
      navigationOptions: {
        title: 'Reserve table',
        drawerLabel: 'Reserve table',
        drawerIcon: ({tintColor}) => (
          <Icon
            name='cutlery'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    drawerBackgroundColor: '#D1C4E9',
    contentComponent: CustomDrawerContentComponent
  }
);

class Main extends Component {
  componentDidMount() {
    this.props.fetchComments();
    this.props.fetchDishes();
    this.props.fetchLeaders();
    this.props.fetchPromos();
  }

  render() {
    return (
      <View style={Styles.viewMain}>
        <MainNavigator />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
