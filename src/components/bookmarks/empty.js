import React from 'react';
import { View, Image } from 'react-native';
import noActivityLight from '../../assets/images/send/noBookmarks3xLight.png';
import noActivityDark from '../../assets/images/send/noBookmarks3xDark.png';
import { P } from '../toolBox/typography';
import withTheme from '../withTheme';
import getStyles from './styles';
import { themes } from '../../constants/styleGuide';

const EmptyState = ({ theme, styles, usedIn }) => (
  <View style={styles.emptyState}>
    <View style={styles.noActivity}>
      {
        theme === themes.light ?
          <Image
            style={styles.emptyImage}
            source={noActivityLight}
          /> :
          <Image
            style={styles.emptyImage}
            source={noActivityDark}
          />
      }
    </View>
    <P style={[styles.emptyTitle, styles.theme.emptyTitle]}>
      {
        usedIn === 'bookmarks' ?
        'You don’t have any bookmarks. Start adding them by tapping the + button on the top right.' :
        'Start adding them through the sending process.'
      }
    </P>
  </View>
);

export default withTheme(EmptyState, getStyles());
