//Import a library to help create a component
import React from 'react';
import {Text, View} from 'react-native';

//create  a component
const Header = ({headerText}) => {
  const {textStyle, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 3,
    position: 'relative',
    marginBottom: 20
  },
  textStyle: {
    fontSize: 20,
  },
};

//make the component availble to other parts of the app
export  { Header };
