import { StyleSheet, Platform, DeviceInfo } from 'react-native';
import { colors, fonts, boxes } from '../../constants/styleGuide';
import { deviceHeight } from '../../utilities/device';

const height = deviceHeight();

const styles = {
  wrapper: {
    backgroundColor: colors.light.white,
    flex: 1,
  },
  container: {
    height: '100%',
    paddingTop: height <= 640 ? 110 : 170,
  },
  innerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: colors.light.white,
    paddingTop: 36,
    paddingBottom: 20,
  },
  paddingBottom: {
    paddingBottom: height <= 640 ? 0 : 40,
  },
  placeholder: {
    width: '100%',
    height: 20,
  },
  connectionErrorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  connectionError: {
    color: colors.light.gray1,
    fontFamily: fonts.family.context,
    fontSize: fonts.size.input,
  },
  connectionErrorIcon: {
    color: colors.light.red,
    marginRight: 5,
  },
  visible: {
    opacity: 1,
  },
  title: {
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
    textAlign: 'center',
    color: colors.light.gray2,
    fontSize: fonts.size.base,
    opacity: height <= 640 ? 0 : 1,
  },
  button: {
    marginRight: boxes.boxPadding,
    marginLeft: boxes.boxPadding,
    marginBottom: 60,
  },
  errorMessage: {
    fontSize: 14,
    height: 42,
  },
  input: {
    borderRightColor: 'transparent',
    color: 'black',
    fontFamily: fonts.family.passphrase,
    textAlign: 'justify',
    paddingTop: 10,
    paddingBottom: 10,
    minHeight: 40,
  },
  allWhite: {
    borderTopColor: colors.light.white,
    backgroundColor: colors.light.white,
  },
  sticky: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  buttonSticky: {
    borderRadius: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  linkWrapper: {
    width: '100%',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  question: {
    color: colors.light.gray2,
    textAlign: 'center',
  },
  link: {
    color: colors.light.blue,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fillWidth: {
    width: '100%',
  },
  splashContainer: {
    backgroundColor: colors.light.white,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
  },
  splashBg: {
    backgroundColor: colors.light.actionBlue,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  splashTopButtons: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 375,
    height: 97,
    zIndex: 3,
  },
  topBubbles: {
    width: '100%',
    height: '100%',
    top: 0,
  },
  splashFigure: {
    height: 60,
    width: 153,
    left: '50%',
    marginLeft: -76,
    position: 'absolute',
  },
  splashStatic: {
    zIndex: 2,
    top: height <= 640 ? 40 : 100,
  },
  splashAnimating: {
    zIndex: 1,
    top: '50%',
    marginTop: -30,
  },
  splashImage: {
    height: 60,
    width: 153,
  },
  waves: {
    width: '100%',
    height: '100%',
    borderBottomColor: 'transparent',
    borderBottomWidth: 125,
    marginBottom: -125,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  invalidAuthBg: {
    width: 84,
    height: 84,
    backgroundColor: colors.light.red,
    borderRadius: 42,
    zIndex: 1,
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -42,
    marginTop: -42,
    opacity: 0,
  },
  authTypeIcon: {
    zIndex: 2,
  },
  error: {
    color: colors.light.red,
  },
  invisible: {
    color: 'transparent',
  },
  scanButton: {
    position: 'absolute',
    right: 6,
    zIndex: 99,
    top: 46,
    paddingRight: 15,
    paddingLeft: 10,
    paddingBottom: 10,
    width: 80,
    height: 30,
  },
  scanButtonTitle: {
    fontSize: 14,
    width: 39,
    paddingLeft: 5,
    color: colors.light.blue,
  },
  cameraRoll: {
    borderTopColor: colors.light.white,
    borderTopWidth: (Platform.OS === 'ios' &&
      DeviceInfo.isIPhoneX_deprecated) ? 74 : 50,
  },
  cameraOverlay: {
    borderTopColor: 'rgba(57, 68, 81, 0.85)',
    borderTopWidth: (Platform.OS === 'ios' &&
      DeviceInfo.isIPhoneX_deprecated) ? 34 : 10,
  },
  christmasHatContainer: {
    position: 'absolute',
    left: -12,
  },
  christmasHat: {
    width: 58,
    height: 43,
  },
};

export default StyleSheet.create(styles);
