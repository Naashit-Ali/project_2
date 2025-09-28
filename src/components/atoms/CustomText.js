import {View, Text} from 'react-native';
import React from 'react';

const CustomText = ({children, style, ...props}) => {
  return (
    <Text
      {...props}
      style={style}>
      {children}
    </Text>
  );
};

export default CustomText;
