import { moderateScale } from "react-native-size-matters";
import { colors } from "../theme/colors";

export const globalStyles = {
  heading: {
    color: colors.white,
    fontSize: moderateScale(48, 0.3),
    fontFamily: 'PirataOne-Regular',
    textAlign: 'center',
  },
    subHeading: {
    color: colors.white,
    fontSize: moderateScale(14, 0.3),
    fontFamily: 'GeneralSans-Regular',
  },
}