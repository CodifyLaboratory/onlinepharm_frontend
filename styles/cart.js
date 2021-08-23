import {StyleSheet, Platform} from "react-native";


export const cart = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS == "android" ? 50 : 0
  },
  btn: {
    marginHorizontal: 16,
    backgroundColor: '#4BCCED',
    borderRadius: 27,
    alignItems: 'center',
    paddingVertical: 14,
    marginBottom: 16,
  },
  btnText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600'
  }
})