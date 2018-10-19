import { createStackNavigator } from 'react-navigation';
import MapScreen from '../screen/map';
import ViewDetails from '../screen/newFeed/ViewDetails';
const MapRouting = createStackNavigator({
    MapScreen:{
        screen: MapScreen,
    },
    ViewDetails:{
        screen: ViewDetails
    },
   

},{
    headerMode:'none',
})

export default MapRouting;