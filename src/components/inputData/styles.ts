import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 48,
    backgroundColor: 'black',
    color: '#FFF',
    borderRadius: 8,
    fontFamily: theme.fonts.title400,
    fontSize: 13,
    marginRight: 4,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#f8b700'
  }
});