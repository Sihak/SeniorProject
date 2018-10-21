import { createStackNavigator } from 'react-navigation';
import MeScreen from '../screen/me';
import AddPostScreen from '../screen/me/addPost';
import SelectPlaceScreen from '../screen/me/FilterScreen';
import AddDescription from '../screen/me/addDescription';
import EditPostScreen from '../screen/me/editPost';

const MeRouting = createStackNavigator({
  Me:{
      screen:MeScreen
  },

  AddPost:{
      screen: AddPostScreen
  },
  SelectProvince:{
    screen: SelectPlaceScreen
},
AddDescription:{
    screen:AddDescription
},
EditPost:{
    screen:EditPostScreen
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

export default MeRouting;