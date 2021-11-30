import {Platform, StyleSheet} from "react-native";

export const news = StyleSheet.create({
  container: {
    paddingLeft: Platform.OS === 'ios' ? 16 : 8,
    alignItems: 'center',
    paddingBottom: 40,

  },
  newsInner: {
    paddingTop: Platform.OS === 'ios' ? 10 : 45,
  },
  newsItem: {
    marginRight: 20,
    marginLeft: 20,
  },
  newsItemActive: {
    marginRight: 20,
    marginLeft: 20,
    borderBottomWidth: 3,
    borderBottomColor: "#FFC90A",
    paddingBottom: 8,
    color: 'red',
  },
  newsNavText: {
    fontSize: 18,
    color: '#999999'
  },
  newsNavTextActive: {
    fontSize: 18,
    color: '#1F8BA7',
  },
  farmCard: {
    flex: 1,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1F8BA7',
    marginBottom: 16,
    marginRight: 16,
    marginLeft: 8
  },
  farmCardInfo: {
    flex: 0.5,
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
  },
  nameFarm: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    fontSize: 11,
    color: '#F3F3F3',
    marginRight: 4,
  },
  farmName: {
    fontSize: 11,
    fontWeight: '500',
    color: '#fff'
  },
  farmDesc: {
    fontSize: 13,
    lineHeight: 16,
    color: '#fff',
    marginBottom: 8,
    width: 171
  },
  farmDate: {
    fontSize: 11,
    fontWeight: '500',
    color: '#CCCCCC',
    marginBottom: 20,
  },
  farmCardBtn: {
    backgroundColor: '#4BCCED',
    borderRadius: 8,
    width: 82,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 45,
  },
  farmCardBtnText: {
    fontSize: 11,
    color: '#ffffff',
  },
  farmCardImage: {
    flex: 0.5,
    width: 140,
    height: '100%',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  }
})