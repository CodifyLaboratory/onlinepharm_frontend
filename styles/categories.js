import {Platform, StyleSheet} from "react-native";

export const categories = StyleSheet.create({
  text: {
    color: 'red',
  },
  container: {
    backgroundColor: '#E6EFF9',
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: Platform.OS == 'android' ? 21 : 0
  },
  banner: {
    borderRadius: 20,
    marginLeft: -45,
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
    alignItems: 'center'
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 19
  },
  pillsContainer: {
    marginTop: 16,
  },
  pillsListElem: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  pillsListElemText: {
    color: '#1F8BA7',
    fontSize: 13,
  }
})