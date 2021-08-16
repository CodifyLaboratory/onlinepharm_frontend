import {StyleSheet} from "react-native";

export const profile = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E6EFF9',
    paddingLeft: 37,
    paddingRight: 37,
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  profileAvatar: {
    width: 88,
    height: 88,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 18,
    lineHeight: 27,
    marginTop: 16,
    marginBottom: 8,
    color: '#1A1717',
  },
  profileNumber: {
    fontSize: 12,
    lineHeight: 18,
    color: '#4B4747',
  },
  profilePersonalityBlocks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
    marginTop: 43,
    marginBottom: 62,
  },
  profilePersonalityBlock: {
    alignItems: 'center',
  },
  profilePersonalityIcon: {
    width: 58,
    height: 58,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  profilePersonalityText: {
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 15,
    color: '#4B4747',
  },
  profileLinks: {
    width: 302,
    height: 192,
    backgroundColor: '#fff',
    borderRadius: 18,
  },
  profileLink: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    height: 48,
    paddingLeft: 24,
    paddingRight: 34,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  profileLinkInner: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileLinkText: {
    fontSize: 16,
    marginLeft: 14,
  },
})