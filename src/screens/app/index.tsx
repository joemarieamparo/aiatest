import React, {Component} from 'react'
import {SafeAreaView} from 'react-native'
import Orientation from 'react-native-orientation-locker'
import styles from './styles'
import AppStackContainer from './navigator'

class App extends Component {
    componentDidMount() {
      Orientation.lockToPortrait()
    }

    public render() {
        return (
            <SafeAreaView style={styles.container}>
                <AppStackContainer />
            </SafeAreaView>
        )
      }
}
export default App