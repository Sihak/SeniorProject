import { createStackNavigator } from 'react-navigation';
import ListScreen from '../screen/newFeed/List';
import ViewDetails from '../screen/newFeed/ViewDetails';
const ListRouting = createStackNavigator({
   
    List:{
        screen: ListScreen
    },

    ViewDetail:{
        screen:ViewDetails
    }


},{
    headerMode:'none',
    mode : 'card'
})

export default ListRouting;