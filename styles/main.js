import {Platform, StyleSheet} from "react-native";

export const main = StyleSheet.create({
  text: {
    color: 'red',
  },
  container: {
    paddingTop: Platform.OS == 'android' ? 40 : 0,
    paddingBottom: 30,
  },
  banner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 8,
    paddingRight: 8,
    paddingLeft: 8,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cart: {
    marginLeft: 30,
  },
  cartNumber: {
    width: 13,
    height: 13,
    borderRadius: 50,
    backgroundColor: '#4BCCED',
    position: 'absolute',
    top: -10,
    right: -5,
  },
  cartNumberText: {
    color: '#fff',
    fontSize: 7,
    textAlign: 'center',
    lineHeight: 13,
  },
  search: {
    marginLeft: 20,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 19,
    paddingRight: 8,
    paddingLeft: 8,
  },
  watchAll: {
    color: '#1F8BA7',
    fontSize: 13,
    textDecorationLine: 'underline'
  },
  farmSliderElem: {
    margin: 0,
    width: 132,
    height: 132,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',

  },
  symptomsSliderElem: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 7,
    paddingRight: 7,
    marginLeft: 8,
    marginRight: 8,
    alignItems: 'center'
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingRight: 8,
    paddingLeft: 8,
  },
  categoriesItem: {
    width: '48%',
    height: 131,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingTop: 12,
    paddingBottom: 8,
    paddingLeft: 22,
    paddingRight: 22,
    alignItems: 'center',
    marginBottom: 16,
  },
  categoriesImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  categoriesItemText: {
    textAlign: 'center',
    marginTop: 4,
    color: '#1F8BA7',
    fontSize: 13,
    lineHeight: 15,
  },
  hitsItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    marginLeft: 8,
    marginRight: 8,
  },
  hitsDiscount: {
    backgroundColor: '#21B727',
    opacity: 0.7,
    borderRadius: 5,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 1,
    paddingBottom: 1,
    width: 69,
  },
  hitsDiscountText: {
    color: '#fff',
    fontSize: 9,
  },
  hitsImage: {
    width: 120,
    height: 70,
    marginLeft: -10,
    marginBottom: 4,
  },
  hitsName: {
    fontSize: 11,
  },
  hitsPrices: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 8,
  },
  hitsOldPrice: {
    fontSize: 11,
    color: '#999999',
    textDecorationLine: 'line-through'
  },
  hitsPrice: {
    fontSize: 11,
    color: '#1F8BA7',
    marginLeft: 16,
  },
  hitsBtn: {
    backgroundColor: '#4BCCED',
    borderRadius: 10,
  },
  hitsBtnText: {
    fontSize: 9,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  },
  appInfo: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 5,
    marginTop: 10
  },
  appInfoText: {
    fontSize: 15,
    lineHeight: 17,
    marginBottom: 24,
  }
})