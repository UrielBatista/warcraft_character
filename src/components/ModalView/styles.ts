import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100
  },
  overlay: {
    flex: 1,
    backgroundColor: 'black'
  },
  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: '#FFF',
    alignSelf: 'center',
    marginTop: 13,
  }
});