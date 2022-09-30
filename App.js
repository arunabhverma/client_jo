import React, {useState} from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const RANDOM_COLOR_ARRAY = new Array(5).fill(1).map(item => {
  var randomColor = getRandomColor();
  return randomColor;
});

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

  const PickComponent = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => setColor(`${item}`)}
        style={[styles.pickCircle, {backgroundColor: `${item}`}]}>
        <Text style={styles.pickerText}>{`${item}`}</Text>
      </TouchableOpacity>
    );
  };

  const ColorsList = () => {
    return (
      <View style={styles.modalBackdrop}>
        <View style={styles.modalContainer}>
          <CloseIcon />
          <FlatList
            numColumns={3}
            contentContainerStyle={styles.flatListContent}
            style={styles.flatListStyle}
            data={RANDOM_COLOR_ARRAY}
            renderItem={({item}) => <PickComponent item={item} />}
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
    height: '80%',
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
