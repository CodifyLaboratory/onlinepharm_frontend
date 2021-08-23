import {StyleSheet} from "react-native";

export const registration = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: '#00A0B6',
  },
  input: {
    width: '100%',
    padding: 17,
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#BCBCBC',
    marginBottom: 35,
    fontSize: 15,
  },
  forgotContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  forgotAccount: {
    color: '#828282',
    fontSize: 14,
  },
  forgotText: {
    color: '#00A0B6',
    fontSize: 14
  },
  forgotPassword: {
    color: '#00A0B6',
    fontSize: 14,
  },
  next: {
    backgroundColor: '#1F8BA7',
    padding: 10,
    width: 345,
    alignItems: 'center',
    borderRadius: 23,
    marginBottom: 80,
  },
  nextText: {
    color: '#ffffff',
    fontSize: 20,
  }
})