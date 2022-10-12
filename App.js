import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const initialState = {
  type: '',
  price: '',
  neighborhood: '',
  zipcode: '',
  sqft: '',
  bed: '',
  bath: '',
}

const ListingArray = [];
const App = () => {
  const [state, setState] = useState(initialState);

  const setValue = (mainKey, text) => {
    setState(prev => ({ ...prev, [mainKey]: text }));
  }

  const submit = () => {
    ListingArray.push({ id: ListingArray?.length, ...state });
    setState(initialState);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Add your listing</Text>
      <View style={styles.row}>
        <TextInput placeholderTextColor={'rgba(0, 0, 0, 0.3)'} placeholder='Type' style={styles.textInput} value={state.type} onChangeText={(text) => setValue('type', text)} />
        <TextInput keyboardType='numeric' placeholderTextColor={'rgba(0, 0, 0, 0.3)'} placeholder='Sq Feet' style={styles.textInput} value={state.sqft} onChangeText={(text) => setValue('sqft', text)} />
      </View>
      <View style={styles.row}>
        <TextInput keyboardType='numeric' placeholderTextColor={'rgba(0, 0, 0, 0.3)'} placeholder='Bedrooms' style={styles.textInput} value={state.bed} onChangeText={(text) => setValue('bed', text)} />
        <TextInput keyboardType='numeric' placeholderTextColor={'rgba(0, 0, 0, 0.3)'} placeholder='Bathrooms' style={styles.textInput} value={state.bath} onChangeText={(text) => setValue('bath', text)} />
      </View>
      <View style={styles.row}>
        <TextInput keyboardType='numeric' placeholderTextColor={'rgba(0, 0, 0, 0.3)'} placeholder='Price' style={styles.textInput} value={state.price} onChangeText={(text) => setValue('price', text)} />
        <TextInput keyboardType='numeric' placeholderTextColor={'rgba(0, 0, 0, 0.3)'} placeholder='Zip Code' style={styles.textInput} value={state.zipcode} onChangeText={(text) => setValue('zipcode', text)} />
      </View>
      <View style={styles.row}>
        <TextInput placeholderTextColor={'rgba(0, 0, 0, 0.3)'} placeholder='Neighborhood' style={[styles.textInput, { flex: 1 }]} value={state.neighborhood} onChangeText={(text) => setValue('neighborhood', text)} />
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={submit} style={styles.buttonStyle}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  headText: {
    fontSize: 15
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    width: '48%',
    marginTop: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 10,
    paddingLeft: 20
  },
  buttonStyle: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#12273a',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: '600',
    padding: 13,
  }
})

export default App;