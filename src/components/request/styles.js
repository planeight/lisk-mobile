import { themes, colors, boxes } from '../../constants/styleGuide';

export default () => ({
  common: {
    wrapper: {
      flex: 1,
    },
    container: {
      height: '100%',
    },
    innerContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1,
      paddingTop: 36,
      paddingBottom: 60,
    },
    headerContainer: {
      marginRight: boxes.boxPadding,
      marginLeft: boxes.boxPadding,
    },
    subHeader: {
      marginTop: 7,
    },
    main: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingTop: 40,
      paddingBottom: 20,
    },
    address: {
      marginBottom: 15,
    },
    shareContainer: {
      marginTop: 15,
    },
    fieldset: {
      height: 100,
    },
  },

  [themes.light]: {
    wrapper: {
      backgroundColor: colors.light.white,
    },
    innerContainer: {
      backgroundColor: colors.light.white,
    },
    header: {
      color: colors.light.black,
    },
    subHeader: {
      color: colors.light.gray2,
    },
    address: {
      color: '#263344',
    },
    share: {
      color: colors.light.blue,
    },
  },

  [themes.dark]: {
    wrapper: {
      backgroundColor: colors.dark.screenBgNavy,
    },
    innerContainer: {
      backgroundColor: colors.dark.screenBgNavy,
    },
    header: {
      color: colors.dark.white,
    },
    subHeader: {
      color: colors.dark.gray4,
    },
    address: {
      color: colors.dark.white,
    },
    share: {
      color: colors.dark.blue,
    },
  },
});
