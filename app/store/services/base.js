import firebase from 'react-native-firebase';

export function restaurantDB(){
    return(
        firebase.firestore().collection('restaurant')
    )
};

export function auth(){
    return (
        firebase.auth()
    )
}

