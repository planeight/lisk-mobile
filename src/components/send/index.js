import React from 'react';
import connect from 'redux-connect-decorator';
import MultiStep from '../multiStep';
import Form from './form';
import Overview from './overview';
import Confirm from './confirm';
import Result from './result';
import styles from './styles';
import { IconButton } from '../toolBox/button';
import { colors } from '../../constants/styleGuide';
import MenuIcon, { SettingButton } from '../router/menuIcon';
import Bg from '../headerBackground';
import Logo from '../router/logo';

@connect(state => ({
  account: state.accounts.active,
}), {})
class Send extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    console.log(params);
    return {
      headerBackground: <Bg />,
      headerRight: <SettingButton navigation={navigation} />,
      headerTitle: <Logo />,
      tabBarLabel: 'Send',
      tabBarIcon: ({ focused }) => <MenuIcon name='send' focused={focused} />, //eslint-disable-line
      tabBarVisible: !(params && params.tabBar),
      headerStyle: {
        overflow: 'hidden',
      },
      headerLeft: (params && params.showButtonLeft) ? <IconButton
        icon='back'
        title=''
        onPress={() => {
          params.action();
        }}
        style={styles.back}
        color={colors.white} /> : null,
    };
  };
  componentDidMount() {
    const { navigation } = this.props;
    this.subs = [
      navigation.addListener('didFocus', () => this.didFocus()),
    ];
    navigation.setParams({ showButtonLeft: false });
  }

  componentWillUnmount() {
    this.subs.forEach(sub => sub.remove());
  }

  didFocus() {
    const { navigation } = this.props;
    if (navigation.getParam('initialize', false)) {
      this.nav.move({
        to: 2,
        stepData: {
          address: this.props.account.address,
          amount: 0.1,
          reference: 'Account initialization',
        },
      });
    } else this.nav.reset();
  }

  render() {
    const { navigation } = this.props;
    return (<MultiStep
        finalCallback={() => {
          navigation.navigate({ routeName: 'OwnWallet' });
        }}
        navStyles={{ multiStepWrapper: styles.multiStepWrapper }}
        ref={(el) => { this.nav = el; }}>
        <Form title='form' navigation={navigation}/>
        <Confirm title='confirm' navigation={navigation} />
        <Overview title='overview' navigation={navigation} />
        <Result title='result' navigation={navigation}/>
      </MultiStep>);
  }
}

export default Send;
