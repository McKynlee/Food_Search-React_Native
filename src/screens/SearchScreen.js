import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    // Use baseURL you set up in yelp.js
    const response = await yelp.get(`/search`, {
      // 'params' as a second argument in the call will auto concatenate necessary params to the url
      params: {
        limit: 50,
        term,
        location: 'kansas city'
      }
    });

    setResults(response.data.businesses);
  }

  return <View>
    <SearchBar
      term={term}
      onTermChange={(newTerm) => setTerm(newTerm)}
      onTermSubmit={() => searchApi()}
    />
    <Text>We have found {results.length} results</Text>
  </View>
}

const styles = StyleSheet.create({});

export default SearchScreen;