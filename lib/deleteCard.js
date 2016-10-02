import { AsyncStorage } from 'react-native'

deleteCard = (key) => {
	AsyncStorage
		.removeItem(key)
}

export default deleteCard
