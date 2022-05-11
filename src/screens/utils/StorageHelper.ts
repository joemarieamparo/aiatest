import AsyncStorage from '@react-native-async-storage/async-storage'
import { Liker } from '../app/data/model/Liker'

export const storeDataObject = async (key: string, value: Liker[]) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        // saving error
    }
}

export const getDataObject = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        // error reading value
    }
}