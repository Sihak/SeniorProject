import { createStackNavigator } from 'react-navigation';
import NewFeed from '../screen/newFeed';
import SelectPlace from '../screen/newFeed/selectPlace';
import ListRouting from './listRouting';
import ViewDetails from '../screen/newFeed/ViewDetails';
import AddReview from '../screen/newFeed/AddReview';
import ListMenu from '../screen/newFeed/ListMenu';
import ListReviews from '../screen/newFeed/listReview';
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
    },
    AddReview:{
        screen:AddReview
    },
    ReviewList: {
        screen:SelectPlace
    },
    ViewReview:{
        screen:SelectPlace
    },
    ListMenu:{
       screen:ListMenu
    },
    ListReview:{
        screen:ListReviews
     },


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