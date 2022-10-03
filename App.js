import React, {useState} from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const isColor = (h) => {
  var a = parseInt(h,16);
  return (a.toString(16) === h)
  }

const RANDOM_COLOR_ARRAY = [
  {
    backgroundColor: '#26de81',
    value: 1,
  },
  {
    backgroundColor: '#fc5c65',
    value: 2,
  },
  {
    backgroundColor: '#fed330',
    value: 3,
  },
  {
    backgroundColor: '#4b7bec',
    value: 4,
  },
  {
    backgroundColor: 'defaultStyles.colors.medium',
    value: 5,
  },
];

const SimplePicker = () => {
  const [state, setState] = useState({
    isModalVisble: false,
    selectedColor: 'gray',
  });

  const toggleModal = () => {
    setState(prev => ({...prev, isModalVisble: !prev.isModalVisble}));
  };

  const setColor = color => {
    setState(prev => ({
      ...prev,
      selectedColor: color,
      isModalVisble: !prev.isModalVisble,
    }));
  };

  const CloseIcon = () => {
    return (
      <TouchableOpacity onPress={toggleModal} style={styles.closeIconContainer}>
        <Text style={styles.crossIcon}>X</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => {
    if(isColor(item?.backgroundColor)){
      return null;
    }
    return (
      <TouchableOpacity
        onPress={() => setColor(`${item?.backgroundColor}`)}
        style={[styles.pickCircle, {backgroundColor: `${item?.backgroundColor}`}]}>
        <Text style={styles.pickerText}>{`${item?.backgroundColor}`}</Text>
      </TouchableOpacity>
    );
  };

  const ColorsList = () => {
    return (
      <View style={styles.modalBackdrop}>
        <View style={styles.modalContainer}>
          <CloseIcon />
          <FlatList
            numColumns={2}
            contentContainerStyle={styles.flatListContent}
            style={styles.flatListStyle}
            data={RANDOM_COLOR_ARRAY}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleModal}
        style={[styles.circleButton, {backgroundColor: state.selectedColor}]}>
        <Text style={styles.pickerText}>Picker</Text>
      </TouchableOpacity>
      <Modal visible={state.isModalVisble} animationType={'fade'}>
        <ColorsList />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickCircle: {
    width: 90,
    height: 90,
    borderRadius: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerText: {
    color: 'white',
  },
  modalBackdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '90%',
    height: '50%',
    borderRadius: 20,
  },
  crossIcon: {
    fontSize: 20,
  },
  closeIconContainer: {
    alignSelf: 'flex-end',
    padding: 10,
    paddingRight: 15,
    position: 'absolute',
    zIndex: 1,
  },
  flatListStyle: {
    flex: 1,
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SimplePicker;
