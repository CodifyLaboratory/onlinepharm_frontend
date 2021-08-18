import {StyleSheet} from "react-native";

export const myMedicine = StyleSheet.create({
  container: {
    backgroundColor: '#E6EFF9',
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 30,
    paddingBottom: 16,
  },
  medicineCard: {
    width: '100%',
    height: 109,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    marginBottom: 8,
    shadowColor: "#000",
    paddingTop: 16,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F3F3F3',
  },
  name: {
    color: '#1f8ba7',
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 8,

  },
  desc: {
    fontSize: 11,
    marginBottom: 4,
    color: '#999999',
  },
  category: {
    color: '#4bcced',
    fontSize: 11,
  },
  find: {
    backgroundColor: '#4BCCED',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    marginTop: 55,
    height: 30,
  },
  findText: {
    color: '#fff',
  }
})