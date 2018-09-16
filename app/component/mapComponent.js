//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps'
import { DIMENSION, APPEARANCES, COLORS } from '../module';

// create a component
class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        region: null,
        detail: null,
        open: false,
    };
}
changeRegion() {
  this.setState({ region: this.getRegion(), open: true, detail: 'hello' })
}
  render() {
    const { region } = this.props;
    console.log(region);

    return (
      <View style={styles.container}>
        <MapView
          // provider={"google"}
          style={styles.map}
          region={{
            latitude: 11.546932,
            longitude: 104.920049,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
        >
          <MapView.Marker
            imageStyle={{ width: 1, height: 1 }}
            coordinate={{ 
              latitude: 11.546932,
              longitude: 104.920049,
            }}
            image={this.props.image}
            onPress={() => this.changeRegion}
          />
        </MapView>
        {this.state.detail && this.state.open ?
                    <View style={{ bottom: 20, backgroundColor: 'red', position: 'absolute', width: 200, height: 200 }}>

                        <Text>hello</Text>
                    </View>
                : null
                }

      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: DIMENSION(195),
    width: DIMENSION(100),
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

});

//make this component available to the app
export default MapComponent;
