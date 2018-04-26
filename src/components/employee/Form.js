import React from 'react'
import { connect } from 'react-redux'
import { Picker, Text, View } from 'react-native'

import { employeeUpdate, clearForm } from '../../actions'
import { Card, CardSection, Input } from '../common'

class EmployeeForm extends React.Component {
    componentWillUnmount() {
        this.props.clearForm()
    }

    render() {
        const { name, phone, shift, employeeUpdate } = this.props

        return (
            <View>
                <Card>
                    <CardSection>
                        <Input
                            label="Name"
                            placeholder="John Doe"
                            value={ name }
                            onChangeText={value => employeeUpdate({ prop: 'name', value })}/>
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Phone"
                            placeholder="555-555-5555"
                            value={ phone }
                            onChangeText={value => employeeUpdate({ prop: 'phone', value })}/>
                    </CardSection>
                    <CardSection style={ styles.pickerSectionStyle }>
                        <Text style={ styles.pickerTextStyle }>Shift</Text>
                        <Picker
                            style={ styles.pickerContainerStyle }
                            selectedValue={ shift }
                            onValueChange={value => employeeUpdate({ prop: 'shift', value })}>
                            <Picker.Item label='Monday' value='Monday' />
                            <Picker.Item label='Tuesday' value='Tuesday' />
                            <Picker.Item label='Wednesday' value='Wednesday' />
                            <Picker.Item label='Thursday' value='Thursday' />
                            <Picker.Item label='Friday' value='Friday' />
                            <Picker.Item label='Saturday' value='Saturday' />
                            <Picker.Item label='Sunday' value='Sunday' />
                        </Picker>
                    </CardSection>
                </Card>
            </View>
        )
    }
}

const styles = {
    pickerSectionStyle: {
        flexDirection: 'column',
        height: 200
    },
    pickerContainerStyle: {
        flex: 1
    },
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = ({ employeeForm: { name, phone, shift } }) => ({ name, phone, shift })

export default connect(mapStateToProps, { employeeUpdate, clearForm })(EmployeeForm)