import { mode } from 'native-base/lib/typescript/theme/v33x-theme/tools';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../theme/colors';

const Tab = ({data, activeTab, onTabChange}) => {
  return (
    <View style={styles.container}>
      {data.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.tabButton, {
            borderBottomWidth: 2,
            borderBottomColor: activeTab === tab.value ? colors?.secondary : colors?.white,
          }]}
          onPress={() => onTabChange(tab.value)}
          activeOpacity={0.7}>
          <Text
            style={[
              styles.tabText, 
              activeTab === tab.value && styles.activeTabText,
            ]}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: moderateScale(10, 0.3),
  },
  tabButton: {
    flex: 1,
    paddingBottom: moderateScale(12, 0.3),
    alignItems: 'center',
    position: 'relative',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#8B8B8B',
  },
  activeTabText: {
    color: '#8B5CF6',
  },
//   indicator: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 3,
//     backgroundColor: '#8B5CF6',
//     borderRadius: 2,
//   },
});

export default Tab;