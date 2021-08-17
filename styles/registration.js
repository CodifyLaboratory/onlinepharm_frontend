import {StyleSheet} from "react-native";

export const registration = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: '#00A0B6',
    marginTop: 55,
    marginBottom: 100
  },
  input: {
    width: 345,
    padding: 17,
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#BCBCBC',
    marginBottom: 35,
    fontSize: 15
  },
  forgotContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  forgotAccount: {
    color: '#828282',
    fontSize: 14
  },
  forgot: {
    marginLeft: 76,
  },
  forgotTextContainer: {
    marginLeft: 32,
  },
  forgotText: {
    color: '#00A0B6',
    fontSize: 14
  },
  forgotPassword: {
    color: '#00A0B6',
    fontSize: 14,
    marginBottom: 70,
    marginTop: 14
  },
  next: {
    backgroundColor: '#1F8BA7',
    padding: 10,
    width: 345,
    alignItems: 'center',
    borderRadius: 23,
    marginTop: 100
  },
  nextText: {
    color: '#ffffff',
    fontSize: 20
  }
})