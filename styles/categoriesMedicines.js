import { Platform, StyleSheet } from 'react-native'
import {Colors} from "../constants/colors";

export const categoriesMedicines = StyleSheet.create({
    text: {
        color: 'red',
    },
    container: {
        backgroundColor: Colors.white,
        // paddingRight: 16,
        // paddingLeft: 16,
        paddingTop: 20,
    },
    banner: {
        borderRadius: 20,
        marginLeft: -45,
    },
    medicineContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 24,
        justifyContent: 'center',
    },
    medicineCard: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 9,
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    medicineImage: {
        width: 70,
        height: 44,
    },
    medicineName: {
        fontSize: 9,
        color: '#1A1717',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'SF-Pro-Regular',
        color: Colors.primary,
        marginLeft: 16
    }
})
