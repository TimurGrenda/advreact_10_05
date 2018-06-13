import {createStackNavigator} from 'react-navigation'
import AuthScreen from './screens/auth'
import EventListScreen from './screens/event-list'
import EventScreen from './screens/event'
import TabNavigator from './tab-navigator'

export default createStackNavigator({
    tabs: {
        screen: TabNavigator
    },
    auth: {
        screen: AuthScreen
    },
    eventList: {
        screen: EventListScreen
    },
    event: {
        screen: EventScreen
    }
})