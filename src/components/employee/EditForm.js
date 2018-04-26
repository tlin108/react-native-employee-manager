import React from 'react'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'

import { employeeUpdate, employeeSave, employeeDelete } from '../../actions'
import { Card, CardSection, Button, Confirm } from '../common'

import Form from './Form'

import Each from 'lodash/each'

class EditForm extends React.Component {
    state = {
        showModal: false
    }

    componentWillMount() {
        const { employee, employeeUpdate } = this.props
        
        Each(employee, (value, prop) => {
            employeeUpdate({ prop, value })
        })
    }

    onButtonPress = () => {
        const { name, phone, shift, employee, employeeSave } = this.props

        employeeSave({ name, phone, shift, uid: employee.uid })
    }

    onTextPress = () => {
        const { phone, shift } = this.props

        Communications.text(phone, `Your upcoming shift is on ${ shift }`)
    }

    render() {
        const { employee, employeeDelete } = this.props
        const { showModal } = this.state

        return (
            <Card>
                <Form { ...employee } />
                <CardSection>
                    <Button onPress={ this.onButtonPress }>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={ this.onTextPress }>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !showModal }) }>
                        Fire Employee
                    </Button>
                </CardSection>
                <Confirm
                    visible={ showModal }
                    onAccept={() => employeeDelete({ uid: employee.uid }) }
                    onDecline={() => this.setState({ showModal: false }) }>
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = ({ employeeForm: { name, phone, shift } }) => ({ name, phone, shift })

export default connect(mapStateToProps, {
    employeeUpdate, employeeSave, employeeDelete
})(EditForm)