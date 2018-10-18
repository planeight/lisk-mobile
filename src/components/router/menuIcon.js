import React from 'react';
import Icon from '../toolBox/icon';
import { colors } from '../../constants/styleGuide';
import { IconButton } from '../toolBox/button';
import styles from './styles';

const MenuIcon = ({ focused, name }) => {
  const color = focused ? colors.primary5 : colors.grayScale3;
  return <Icon name={name} size={24} color={color} />;
};

export const SettingButton = ({ navigation }) =>
  <IconButton
    icon='settings'
    iconSize={20}
    onPress={() => navigation.navigate({ routeName: 'Settings' })}
    style={styles.settings}
    color={colors.white} />;
export default MenuIcon;
