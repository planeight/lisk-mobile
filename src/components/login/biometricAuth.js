import React from 'react';
import { Platform, View, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { bioMetricAuthentication } from '../../utilities/passphrase';
import Icon from '../toolBox/icon';
import styles from './styles';
import { colors } from '../../constants/styleGuide';
import { P, A } from '../toolBox/typography';
import waves from '../../assets/animations/waves.json';

class BiometricAuth extends React.Component {
  state = {
    opacity: new Animated.Value(0),
  }

  componentDidMount() {
    this.animation.play();
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: this.props.animate ? 300 : 0,
    }).start();
    setTimeout(() => {
      bioMetricAuthentication(
        () => this.props.login({ value: this.props.passphrase }),
        () => this.props.toggleView('form'),
      );
    }, 1500);
  }

  componentWillUnmount() { // eslint-disable-line
    FingerprintScanner.release();
  }

  render() {
    const { opacity } = this.state;

    return (<View style={styles.container}>
      <View style={styles.titleContainer}>
        <Animated.Text style={[styles.title, { opacity }]}>
          Look at the front camera to authenticate.
        </Animated.Text>
      </View>
      <View style={styles.waves}>
        <LottieView
          source={waves}
          loop={false}
          ref={(el) => { this.animation = el; }}/>
        <Animated.View style={{ opacity }}>
          <Icon size={40} color={colors.white}
            name={ this.props.sensorType === 'Face ID' ? 'face-id-full' : 'touch-id-full'}
            style={styles.authTypeIcon} />
        </Animated.View>
      </View>
      <Animated.View style={[styles.linkWrapper, styles.column, { opacity }]}>
        <P style={[styles.question, styles.fillWidth]}>
          {
            `Don't want to use ${Platform.os === 'ios' ? 'Face ID' : 'facial recognition'}?`
          }
        </P>
        <A
          style={[styles.link, styles.fillWidth]}
          onPress={() => this.props.toggleView('form')}>Sign in manually</A>
      </Animated.View>
    </View>);
  }
}

export default BiometricAuth;
