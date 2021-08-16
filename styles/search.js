import {Platform, StyleSheet} from "react-native";

export const search = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: Platform.OS == 'android' ? 60 : 20,
    height: '100%'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#999999',
    height: 50,
    paddingLeft: 20,
    paddingRight: 15,
    borderRadius: 9,
  },
  searchLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  searchLogoText: {
    fontSize: 18,
    marginTop: 45,
    color: '#999999',
  }
})