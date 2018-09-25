//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import { COLORS, DIMENSION, APPEARANCES } from '../../module';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'
import PrimaryHeader from '../../component/primaryHeader';
var ImagePicker = require('react-native-image-picker');

var options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };

class AddPostScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            businessType: null,
            logo: null,
            cover: null,
            location: null,
            selectedLocation: null,
            businessType:null,
        }
    }

    showImagePicker(){
       ImagePicker.showImagePicker(options, (response) => {
         console.log('Response = ', response);
       
         if (response.didCancel) {
           console.log('User cancelled image picker');
         }
         else if (response.error) {
           console.log('ImagePicker Error: ', response.error);
         }
         else if (response.customButton) {
           console.log('User tapped custom button: ', response.customButton);
         }
         else {
           let source = { uri: response.uri };
         }
       });
    }

    showActionSheet = () => {
        this.ActionSheet.show()
    }

    onSelectBusinessType(index){
        switch (index){
            case 1 : return( this.setState({businessType:'drinks'}) );
            case 2 : return( this.setState({businessType:'foods'}) );
            case 3 : return( this.setState({businessType:'shopping'}) );
            case 4 : return( this.setState({businessType:'streetFoods'}) );
        }
    }

    showBusinessType(type){
        switch (type){
            case 'drinks' : return('Drinks');
            case 'foods' : return('Foods');
            case 'shopping' : return('Shopping');
            case 'streetFoods' : return('Street Foods');

        }
    }

    returnData(forShow, name) {
        this.setState({
            location: forShow,
            selectedLocation: name
        })
    }

    render() {
        const { businessType, logo, cover, location } = this.state;
        return (
            <View style={{ flex: 1 }}>
                {/* <Image resizeMode={'contain'} style={{ position: 'absolute' }} source={require('../../asset/img/postBG.jpg')} /> */}
                <PrimaryHeader
                    backgroundColor = {'#fff'}
                    backPressed={() => this.props.navigation.goBack()}
                    headerTittle={'LOCATIONS'}
                />
                <View
                    style={styles.container}>
                    <View style={styles.form}>
                        <View style={styles.textInput}>
                            <Text style={styles.label}>Business Name</Text>
                            <TextInput
                                style={[styles.textBox]}
                                onChangeText={(value) => this.setState({ nameKh: value })}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholder={'Your business name'}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('SelectProvince', {
                                returnData: this.returnData.bind(this)
                            })}
                            style={styles.textInput} >
                            <Text style={styles.label}>Location</Text>
                            <Text style={[styles.textInPicker, location && { color: COLORS.TEXT_DARK }]}>{location ? location : 'Location'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.showActionSheet}
                            style={styles.textInput} >
                            <Text style={styles.label}>Type</Text>
                            <Text style={[styles.textInPicker, businessType && { color: COLORS.TEXT_DARK }]}>{businessType ? this.showBusinessType(businessType) : 'Business Type'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.showImagePicker()}
                            style={styles.textInput} >
                            <Text style={styles.label}>Logo</Text>
                            <Text style={[styles.textInPicker, logo && { color: COLORS.TEXT_DARK }]}>{logo ? 'Image' : 'Select your logo'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            // onPress={() => this.showActionSheet('cover')}
                            style={styles.textInput} >
                            <Text style={styles.label}>Cover</Text>
                            <Text style={[styles.textInPicker, cover && { color: COLORS.TEXT_DARK }]}>{cover ? 'Image' : 'Select your cover'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('AddDescription')}
                            style={styles.textInput} >
                            <Text style={styles.label}>Description</Text>
                            <Text style={[styles.textInPicker, cover && { color: COLORS.TEXT_DARK }]}>{cover ? 'Image' : 'About your business'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.policy}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.policyLabel}>TERMS & CONDITIONS</Text>
                        </View>
                        <Text style={styles.policyDecription}>
                            When you click on confirm button, it means you have accepted all terms and condition of our Policy of this app.
                            Our app will get your business's information to store in our database, but don't worry will encrypt all your data and won't spread it.
                            </Text>
                        <TouchableOpacity style={styles.acceptButton}><Text style={styles.acceptButtonText}>Confirm</Text></TouchableOpacity>
                    </View>
                    <ActionSheet
                    ref={o => { this.ActionSheet = o }}
                    title={'Select your business Type'}
                    options={['Cancel', 'Drinks', 'Food', 'Shopping', 'Street Foods']}
                    cancelButtonIndex={0}
                    destructiveButtonIndex={0}
                    onPress={(index) => { this.onSelectBusinessType(index) }}
                />
                </View>
              
            </View>

        );
    }
}

const styles = StyleSheet.create({
    policyDecription: {
        textAlign: 'center',
        color: '#333',
        fontSize: 16,
    },
    labelContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    acceptButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '900'
    },
    acceptButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: 'red',
        marginTop: 25,
        borderRadius: 12,
        backgroundColor: '#1DC263'
    },
    policyLabel: {
        marginVertical: 25,
        color: '#0254FE',
        fontSize: 18,
        fontWeight: '800'
    },
    policy: {
        flex: 1,
        marginHorizontal: 15,
    },
    textInPicker: {
        paddingVertical: DIMENSION(2),
        width: DIMENSION(100),
        backgroundColor: '#fff',
        fontSize: 18,
        color: 'rgba(0,0,0,0.18)'
    },
    textInput: {
        paddingVertical: DIMENSION(2),
        paddingHorizontal: DIMENSION(6),
        width: DIMENSION(100),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 0.2,
        borderColor: 'rgba(0,0,0,1)'
    },

    label: {
        width: DIMENSION(40),
        fontSize: 16,
        fontWeight: '700',
        color: '#333'
    },

    textBox: {
        color: COLORS.TEXT_DARK,
        paddingHorizontal: DIMENSION(1),
        width: DIMENSION(50),
        height: DIMENSION(10),
        fontSize: 18,
        fontWeight: '300',
    },
    form: {
        marginTop: 15,
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    body: {
        flex: 1,
    },
});
export default AddPostScreen;
