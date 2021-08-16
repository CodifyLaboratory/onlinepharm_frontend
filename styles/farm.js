import {StyleSheet} from "react-native";

export const farm = StyleSheet.create({
  container: {
    backgroundColor: '#E6EFF9',
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 30,
    paddingBottom: 16,
  },
  farmCard: {
    width: 327,
    height: 130,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    marginBottom: 16,
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
  },
  farmName: {
    color: '#0A0A0A',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 9,

  },
  farmCount: {
    color: '#1F8BA7',
    fontSize: 12,
    marginBottom: 10,
    width: 105
  },
  farmLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  farmClose: {
    color: '#999',
    fontSize: 13,
  },
  farmFind: {
    backgroundColor: '#4BCCED',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    marginBottom: -54
  },
  farmFindText: {
    color: '#fff',
  }
})