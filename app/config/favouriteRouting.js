import { createStackNavigator } from 'react-navigation';
import FavouriteScreen from '../screen/favourite';
import ViewDetails from '../screen/favourite/ViewDetails';
import AddReview from '../screen/favourite/AddReview';
import ListMenu from '../screen/favourite/ListMenu';
import ListReviews from '../screen/favourite/listReview';
import SelectPlace from '../screen/newFeed/selectPlace';

const FavouriteRouting = createStackNavigator({
    Favourite:{
        screen: FavouriteScreen,
    },

    ViewDetail: {
        screen: ViewDetails
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

export default FavouriteRouting;