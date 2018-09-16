import { createStackNavigator } from 'react-navigation';
import MapScreen from '../screen/map';
const MapRouting = createStackNavigator({
    MapScreen:{
        screen: MapScreen,
    }
},{
    headerMode:'none',
})

export default MapRouting;