import {StyleSheet} from "react-native";

export const cartItem = StyleSheet.create({
  card: {
    width: '100%',
    height: 86,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  left: {
    flexDirection: 'row'
  },
  img: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    color: '#000',
  },
  desc: {
    fontSize: 12,
    color: '#000',
    lineHeight: 20,
    marginTop: 5,
  },
  descBox: {
    width: 160,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 97,
    justifyContent: 'space-between'
  },
  counterBtn: {
    width: 30,
    height: 30,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ECEEEF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    alignItems: 'center'
  },
  priceText: {
    fontSize: 10,
    color: '#999999',
    marginTop: 4,
  },
  price: {
    fontSize: 13,
    color: '#000',
    marginTop: 4,
  }
})