import { createStackNavigator } from 'react-navigation';
import NewFeed from '../screen/newFeed';
import SelectPlace from '../screen/newFeed/selectPlace';
import ListRouting from './listRouting';
import ViewDetails from '../screen/newFeed/ViewDetails';
const NewFeedRouting = createStackNavigator({
    NewFeed:{
        screen: NewFeed,
    },
    List:{
        screen:ListRouting
    },
    SelectPlace: {
        screen:SelectPlace
    },
    ViewDetail: {
        screen:ViewDetails
    }


},{
    headerMode:'none',
    mode : 'card'
})

// NewFeedRouting.navigationOptions = ({ navigation }) => {
//     let tabBarVisible = true;
//     if (navigation.state.index > 0) {
//       tabBarVisible = false;
//     }
  
//     return {
//       tabBarVisible,
//     };
//   };

export default NewFeedRouting;