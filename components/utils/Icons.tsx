// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

export function Icons({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Ionicons size={22} style={[{ marginBottom: 0 }, style]} {...rest} />;
}
export function Icons2({ style, ...rest }: IconProps<ComponentProps<typeof Fontisto>['name']>) {
  return <Fontisto size={22} style={[{ marginBottom: 0 }, style]} {...rest} />;
}

export function MaterialIcon({ style, ...rest }: IconProps<ComponentProps<typeof MaterialIcons>['name']>) {
  return <MaterialIcons size={22} style={[{ marginBottom: 0 }, style]} {...rest} />;
}

export function FontAwesomeIcons({ style, ...rest }: any) {
  return <FontAwesome size={22} style={[{ marginBottom: 0 }, style]} {...rest}/>;
}
