import {Platform} from "react-native";
import * as ImagePicker from "expo-image-picker";

export const cameraPermission = async () => {
    if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
        }
    }
}
