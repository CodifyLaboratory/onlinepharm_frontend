import {StyleSheet} from "react-native";

export const farms = StyleSheet.create({
  container: {
    backgroundColor: '#E6EFF9',
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 30,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  type: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24
  },
  typeElem: {
    width: 150,
    alignItems: 'center',
    paddingBottom: 7,
  },
  typeElemActive: {
    width: 150,
    alignItems: 'center',
    paddingBottom: 7,
    borderBottomWidth: 2,
    borderBottomColor: '#FFC90A'
  },
  typeText: {
    color: '#999999',
    fontSize: 18
  },
  typeTextActive: {
    color: '#1F8BA7',
    fontSize: 18,

  },
  farmCard: {
    width: '100%',
    height: 135,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  farmImg: {
    height: 70,
    width: 70,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F3F3F3',
    resizeMode: 'contain'
  },
  farmName: {
    color: '#1F8BA7',
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 8,
    width: 140
  },
  farmAdress: {
    color: '#1F8BA7',
    fontSize: 11,
    marginBottom: 10,
    width: 90,
  },
  farmClose: {
    color: '#999',
    fontSize: 13,
  },
  farmImage: {
    width: 21,
    height: 18,
    marginTop: 7,
    marginRight: 2,
    marginBottom: 52
  },
  farmFind: {
    backgroundColor: '#4BCCED',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
  },
  farmFindText: {
    color: '#fff',
  }
})