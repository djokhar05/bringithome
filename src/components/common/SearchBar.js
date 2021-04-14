import React from 'react';
import { SearchBar } from 'react-native-elements';


const Searchbar = ({ placeholder, onChangeText, value, onSubmit }) => {
  return(
    <SearchBar
        placeholder="Search for food ..."
        onChangeText={onChangeText}
        value={value}
        lightTheme
        round
        searchIcon={{size:25}}
        cancelIcon
        showCancel
        onSubmitEditing={onSubmit}
    />
  )
}

export { Searchbar }
