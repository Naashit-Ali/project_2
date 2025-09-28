import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../theme/colors';
import CustomText from '../atoms/CustomText';
import {fonts} from '../../theme/font';
import {Icon} from 'native-base';
import AntDesign from '@react-native-vector-icons/ant-design';

const ModalSkeleton = ({visible, onClose, children, containerStyle}) => {
  const {width, height} = useWindowDimensions();
  const styles = customStyleSheet(width, height);

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback style={styles.modalOverlay} onPress={onClose}>
        <View style={styles.modalOverlay}>
          <View
            style={[
              styles.modalContainer,
              {
                ...containerStyle,
              },
            ]}>
            <View style={styles?.headerSection}>
              <CustomText style={styles?.text}>Rate this chat</CustomText>
              <Icon
                as={AntDesign}
                name={'close'}
                size={moderateScale(20, 0.3)}
                color={colors?.white}
                onPress={onClose}
              />
            </View>
            <View style={styles?.line} />
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const customStyleSheet = (width, height) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalOverlay: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(19, 20, 20, 0.7)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContainer: {
      backgroundColor: colors?.themeBlackV3,
      width: '90%',
      padding: moderateScale(16, 0.3),
      borderRadius: moderateScale(16, 0.3),
      marginHorizontal: moderateScale(20, 0.3),
      alignItems: 'center',
    },
    line: {
      width: '100%',
      height: 1,
      backgroundColor: colors?.primaryLightV1,
      marginVertical: moderateScale(16, 0.3),
    },
    text: {
      fontSize: moderateScale(16, 0.3),
      fontFamily: fonts?.medium,
      color: colors?.white,
    },
    headerSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
    },
  });
};

export default ModalSkeleton;
