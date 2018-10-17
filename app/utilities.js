import RNFetchBlob from 'react-native-fetch-blob';
import firebase from 'react-native-firebase';
import { Platform } from 'react-native';
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

export function getImageUrl(uri,businessName, imageFunction) {
        return new Promise((resolve, reject) => {
          let mime = 'image/jpeg';
          let imgUri = uri; let uploadBlob = null;
          const uploadUri = Platform.OS === 'ios' ? imgUri.replace('file://', '') : imgUri;
          const imageRef = firebase.storage().ref(`/restaurant/${imageFunction == 'cover'?businessName+'cover':businessName+'logo'}`)
          fs.readFile(uploadUri, 'base64')
            .then(data => {
              return Blob.build(data, { type: `${mime};BASE64` });
            })
            .then(blob => {
              uploadBlob = blob;
              return imageRef.put(blob, { contentType: mime, name: businessName });
            })
            .then(() => {
              uploadBlob.close()
              return imageRef.getDownloadURL();
            })
            .then(url => {
              resolve(url);
            })
            .catch(error => {
              reject(error)
          })
        })
      }

      export function pushToArray(docs) {
        const data = []
        docs.forEach(d => {
          const all=d.data();
          data.push({
            id: d.id,...all
          })
        })
        return data;
      }
    
      export function pushToObject(doc){
        return {...doc.data()}
      }

    

  