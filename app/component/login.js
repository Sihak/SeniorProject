
import { Modal, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

// create a component
class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          display: true
        };
      }
    setModalVisible(visible) {
        this.setState({ display: visible });
    }
    render() {
        return (
            <Modal
                visible={this.props.display}
                animationType="slide"
                onRequestClose={() => Alert("Hello")}>
                <View>
                    <TouchableOpacity
                        // onPress={() =>  }
                        style={{ width: 150, height: 45, backgroundColor: 'green' }}>
                        <Text>Dismiss</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default LoginModal;
