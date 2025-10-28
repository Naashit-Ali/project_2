import React from 'react';
import {FlatList} from 'react-native';

const SafeFlatList = ({
  removeClippedSubviews = false,
  initialNumToRender = 10,
  maxToRenderPerBatch = 5,
  windowSize = 10,
  showsVerticalScrollIndicator = false,
  ...props
}) => {
  return (
    <FlatList
      removeClippedSubviews={removeClippedSubviews}
      initialNumToRender={initialNumToRender}
      maxToRenderPerBatch={maxToRenderPerBatch}
      windowSize={windowSize}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      {...props}
    />
  );
};

export default SafeFlatList;
