import { createStackNavigator } from 'react-navigation';
import NewFeed from '../screen/newFeed';
const NewFeedRouting = createStackNavigator({
    NewFeed:{
        screen: NewFeed,
    }
},{
    headerMode:'none',
})

export default NewFeedRouting;