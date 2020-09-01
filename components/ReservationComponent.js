import React, {Component} from 'react';
import {
  Text,
  View,
  Scrollview,
  Switch,
  Picker,
  Button,
  Modal
} from 'react-native';
import {Card} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import Styles from '../shared/styles';

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: 1,
      smoking: false,
      date: '',
      showModal: false
    };
  }

  static navigationOptions = {
    title: 'Reserve table'
  };

  toggleModal() {
    this.setState({showModal: !this.state.showModal});
  }

  handleReservation() {
    console.log(JSON.stringify(this.state));
    this.toggleModal();
  }

  resetForm() {
    this.setState({
      guests: 1,
      smoking: false,
      date: ''
    });
  }

  render() {
    return (
      <Scrollview>
        <View style={Styles.formRow}>
          <Text style={Styles.formLabel}>Number of guests</Text>
          <Picker
            style={Styles.formItem}
            selectedValue={this.state.guests}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({guests: itemValue});
            }}>
            <Picker.Item label='1' value='1' />
            <Picker.Item label='2' value='2' />
            <Picker.Item label='3' value='3' />
            <Picker.Item label='4' value='4' />
            <Picker.Item label='5' value='5' />
            <Picker.Item label='6' value='6' />
          </Picker>
        </View>
        <View style={Styles.formRow}>
          <Text style={Styles.formLabel}>Smoking?</Text>
        </View>
        <Switch
          style={Styles.formItem}
          value={this.state.smoking}
          onTintColor='#512DA8'
          onValueChange={(value) => this.setState({smoking: value})}
        />
        <View style={Styles.formRow}>
          <Text style={Styles.formLabel}>Date</Text>
          <DatePicker
            style={Styles.datePickerItem}
            date={this.state.date}
            format=''
            mode='datetime'
            placeholder='Select date and time'
            minDate='2021-1-1'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 34
              }
            }}
            onDateChange={(date) => this.setState({date: date})}
          />
        </View>
        <View style={Styles.formRow}>
          <Button
            title='Reserve'
            color='#512DA8'
            onPress={() => this.handleReservation()}
          />
        </View>
        <Modal
          animationType='slide'
          transparent={false}
          visible={this.state.showModal}
          onDismiss={() => {
            this.toggleModal();
            this.resetForm;
          }}
          onRequestClose={() => {
            this.toggleModal();
            this.resetForm;
          }}>
          <View style={Styles.modal}>
            <Text style={Styles.modalTitle}>Your Reservation</Text>
            <Text style={Styles.modalText}>Guests: {this.state.guests}</Text>
            <Text style={Styles.modalText}>
              Smoking: {this.state.smoking ? 'Yes' : 'No'}
            </Text>
            <Text style={Styles.modalText}>Date: {this.state.date}</Text>
            <Button
              onPress={() => {
                this.toggleModal();
                this.resetForm;
              }}
              title='Reserve'
              color='#512DA8'
            />
          </View>
        </Modal>
      </Scrollview>
    );
  }
}

export default Reservation;
