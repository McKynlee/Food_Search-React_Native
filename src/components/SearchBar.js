import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

// Import search icon from already-include expo libraries:
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange }) => {
  return <View style={styles.backgroundStyle}>
    <Feather name="search" style={styles.iconStyle} />
    <TextInput style={styles.inputStyle}
      placeholder="Search"
      value={term}
      onChangeText={newTerm => onTermChange(newTerm)}
    />
  </View>
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: 'row',
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;