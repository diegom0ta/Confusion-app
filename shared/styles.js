import React from 'react';
import {StyleSheet, Platform} from 'react-native';

const Styles = StyleSheet.create({
  textDishDetail: {
    margin: 10
  },
  viewMain: {
    flex: 1,
    paddingTop:
      Platform.OS === 'ios' ? 0 : global.Expo.Constants.statusBarHeight
  },
  renderItemText: {
    margin: 10
  },
  viewImageDrawerHeader: {
    flex: 1
  },
  viewTextDrawerHeader: {
    flex: 2
  },
  container: {
    flex: 1
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerHeaderImage: {
    margin: 10,
    width: 80,
    height: 60
  },
  viewRenderComments: {
    margin: 10
  },
  textComment: {
    fontSize: 14
  },
  textRating: {
    fontSize: 12
  },
  textAuthorAndDate: {
    fontSize: 12
  },
  loadingView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  loadingText: {
    color: '#512DA8',
    fontSize: 14,
    fontWeight: 'bold'
  },
  formRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 20
  },
  formLabel: {
    fontSize: 10,
    flex: 2
  },
  formItem: {
    flex: 1
  },
  datePickerItem: {
    flex: 1,
    marginRight: 20
  },
  modal: {
    justifyContent: 'center',
    margin: 20
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#512DA8',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20
  },
  modalText: {
    fontSize: 18,
    margin: 10
  }
});

export default Styles;
