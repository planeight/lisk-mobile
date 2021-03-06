import React from 'react';
import { Platform, View, Image, ActivityIndicator } from 'react-native';
import noActivityLight from '../../assets/images/noActivity/noActivity3xLight.png';
import noActivityDark from '../../assets/images/noActivity/noActivity3xDark.png';
import { P } from '../toolBox/typography';
import withTheme from '../withTheme';
import getStyles from './styles';
import { themes } from '../../constants/styleGuide';

const EmptyState = ({
  theme,
  styles,
  refreshing,
  message = 'You do not have any recent activity.',
  style = {},
}) => (
  <View style={[styles.emptyState, style]}>
    <View style={styles.emptyStateActivityIndicator}>
      {(Platform.OS === 'ios' && refreshing) ? <ActivityIndicator size="large" /> : null}
    </View>

    <View style={styles.noActivity}>
      {theme === themes.light ?
        <Image style={styles.empty} source={noActivityLight} /> :
        <Image style={styles.empty} source={noActivityDark} />
      }

      <P style={[styles.noTxTitle, styles.theme.noTxTitle]}>
        {message}
      </P>
    </View>
  </View>
);

export default withTheme(EmptyState, getStyles());
