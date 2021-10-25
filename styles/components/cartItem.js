import {StyleSheet} from "react-native";

export const cartItem = StyleSheet.create({
  card: {
    height: 130,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(198, 198, 198, 0.25)'
  },
  left: {
    flex: .3
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
    resizeMode: 'contain'
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
    flex: .7,
  },
  title: {
    color: '#1F8BA7',
  },
  priceText: {
    fontSize: 14,
    color: '#999999',
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    color: '#1F8BA7',
  },
  button: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 93,
    borderWidth: 1,
    borderColor: '#4BCCED',
    borderRadius: 8,
    marginRight: 13,
  },
  buttonText: {
    color: '#4BCCED',
    fontWeight: 'bold',
  },
  counter: {
    width: 100,
    flexDirection: 'row',
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 14,
  },
  counterText: {
    color: '#4B4747'
  },
  counterImg: {
    width: 27,
    height: 27,
    borderRadius: 50
  },
  heart: {
    width: 21,
    height: 18,
    marginLeft: 94
  }
})