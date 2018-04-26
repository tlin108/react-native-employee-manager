import React from 'react'
import { connect } from 'react-redux'

import { employeeUpdate, employeeCreate } from '../../actions'
import { Card, CardSection, Button } from '../common'
import Form from './Form'

class CreateForm extends React.Component {
    onButtonPress = () => {
        const { name, phone, shift } = this.props

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
    }

    render() {
        return (
            <Card>
                <Form { ...this.props } />
                <CardSection>
                    <Button onPress={ this.onButtonPress }>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = ({ employeeForm: { name, phone, shift } }) => ({ name, phone, shift })

export default connect(mapStateToProps, {
    employeeUpdate,
    employeeCreate
})(CreateForm)