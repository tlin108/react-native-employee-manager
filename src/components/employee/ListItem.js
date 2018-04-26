import React from 'react'

import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { CardSection } from '../common'

class EmployeeListItem extends React.Component {
    render() {
        const { employee } = this.props

        return (
            <TouchableWithoutFeedback onPress={() => Actions.employeeEdit({ employee }) }>
                <View>
                    <CardSection>
                        <Text style={ styles.titleStyle }>
                            { employee.name }
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default EmployeeListItem