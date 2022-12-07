import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';

const EndDateScreen = ({ route, navigation }) => {

  const { startDate } = route.params;

  const [endDate, setEndDate] = useState('');

  const handleClick = () => {
    if (!endDate) return alert('Please select end date')
    console.log(startDate, endDate);
    navigation.navigate('SearchResultsScreen', { startDate, endDate })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select end date</Text>
      <Text style={styles.subtitle}>Date you want to end rent your car</Text>
      <DatePicker
        style={styles.picker}
        onSelectedChange={date => setEndDate(date)}
        mode="calendar"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
          <Text>Go back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClick} style={styles.button}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
    // start date(next) -> end date(search) -> car tiles -> car details -> reservation
  );
};

export default EndDateScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 30
  },
  picker: {
    height: '50%',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '40%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  },
})