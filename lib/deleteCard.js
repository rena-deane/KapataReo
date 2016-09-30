import { AsyncStorage } from 'react-native'

function deleteCard (key) {
	AsyncStorage
		.removeItem(key)
}

export default deleteCard
