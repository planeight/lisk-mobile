import React, { Fragment } from 'react';
import { View, Animated, Platform, ActivityIndicator } from 'react-native';
import connect from 'redux-connect-decorator';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {
  settingsUpdated as settingsUpdatedAction,
} from '../../actions/settings';
import List from './list';
import Footer from './footer';
import { H3, Small, A } from '../toolBox/typography';
import { fromRawLsk } from '../../utilities/conversions';
import Icon from '../toolBox/icon';
import colors from '../../constants/styleGuide/colors';
import easing from '../../utilities/easing';
import withTheme from '../withTheme';
import getStyles from './styles';
import { IconButton } from '../toolBox/button';

/**
 * This component is a HOC to decide which state to show:
 * Loading, Empty (No transactions) or the List view.
 *
 * It performs the initial animation after the user logged in.
 *
 */
@connect(state => ({
  incognitoMode: state.settings.incognito,
}), {
  settingsUpdated: settingsUpdatedAction,
})
class Transactions extends React.Component {
  state = {
    initialAnimations: {
      opacity: new Animated.Value(0),
      top: new Animated.Value(20),
    },
  }

  componentDidMount() {
    this.initialFadeIn();
  }

  initialFadeIn = () => {
    const { opacity, top } = this.state.initialAnimations;
    Animated.timing(opacity, {
      toValue: 1,
      duration: 400,
      delay: 100,
    }).start();
    Animated.timing(top, {
      toValue: 0,
      duration: 400,
      delay: 100,
      easing: easing.easeInOutQuart,
    }).start();
  }

  onPress = () => {
    this.props.navigate('Send', { initialize: true });
  }

  toggleIncognito = () => {
    ReactNativeHapticFeedback.trigger('selection');
    this.props.settingsUpdated({
      incognito: !this.props.incognitoMode,
    });
  }

  render() {
    const {
      styles, transactions, navigate,
      account, footer, theme, incognitoMode,
      followedAccounts, refreshing, type,
    } = this.props;

    const incognito = type === 'home' && incognitoMode;
    const balance = account ? parseFloat(fromRawLsk(account.balance)) : '';
    const Anim = Animated.View;
    const { opacity, top } = this.state.initialAnimations;
    const height = type === 'home' ? 170 : 205;

    return (<Anim style={[styles.container, { opacity, top }]}>
      {
        (!transactions ||
          (transactions.confirmed.length === 0 && transactions.pending.length === 0)) ?
          <Fragment></Fragment> :
          <Fragment>
            <View style={[styles.placeholder, { height }]}>
              {(Platform.OS === 'ios' && refreshing) ? <ActivityIndicator size="large" /> : null}
            </View>
            <View style={styles.innerContainer}>
              <H3 style={[styles.title, styles.theme.title]}>Activity</H3>
              {incognito ?
                <IconButton
                  title=''
                  icon={'disable-incognito'}
                  color={colors.dark.gray2}
                  iconSize={20}
                  onClick={this.toggleIncognito}
                /> : null
              }
            </View>
            {type === 'home' && !account.initialized && balance >= 0.2 ?
              <View style={[styles.initContainer, styles.theme.initContainer]}>
                <Icon name='warning' color={colors[theme].red} size={18} />
                <Small style={[styles.initText, styles.theme.initText]}>
                  Your account is not initialized.
                  <A style={[styles.link, styles.theme.link]}
                    onPress={this.onPress}> Initialize it now</A>
                </Small>
              </View> : null
            }
            <List
              incognito={incognito}
              navigate={navigate}
              account={account ? account.address : ''}
              followedAccounts={followedAccounts}
              pending={transactions.pending}
              transactions={transactions.confirmed}
            />
            {
              footer ? <Footer /> : null
            }
          </Fragment>
      }
    </Anim>);
  }
}
export default withTheme(Transactions, getStyles());
