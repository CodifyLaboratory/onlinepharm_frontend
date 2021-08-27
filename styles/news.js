import {Platform, StyleSheet} from "react-native";

export const news = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
    paddingBottom: 40,

  },
  newsInner: {
    paddingTop: Platform.OS === 'ios' ? 10 : 0,
  },
  newsNav: {
    flexDirection: 'row',
    paddingLeft: 16,
    marginBottom: 24,
    paddingTop: Platform.OS == 'android' ? 45 : 0,
    marginLeft: Platform.OS == 'android' ? 20 : 0
  },
  newsNavText: {
    fontSize: 18,
    marginRight: Platform.OS == 'android' ? 20 : 40,
    color: '#999999'
  },
  farmCard: {
    width: 343,
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: '#1F8BA7',
    marginBottom: 16,
  },
  farmCardInfo: {
    width: 203,
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
  },
  farmDate: {
    fontSize: 11,
    fontWeight: '500',
    color: '#F3F3F3',
    marginBottom: 25,
  },
  farmCardBtn: {
    backgroundColor: '#FFD60A',
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
    color: '#4B4747',
  },
  farmCardImage: {
    width: 140,
    height: 150,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  }
})