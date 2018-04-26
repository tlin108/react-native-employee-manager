import React from 'react'

import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { Card, CardSection, Input, Button, Spinner } from './common'
import {
    emailChanged,
    passwordChanged,
    loginUser
} from '../actions'

class LoginForm extends React.Component {
    onButtonPress = () => {
        const { email, password } = this.props
        this.props.loginUser({ email, password })
    }

    render() {
        const { email, emailChanged, password, passwordChanged, error, loading } = this.props

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={text => emailChanged(text) }
                        value={ email } />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={text => passwordChanged(text) }
                        value={ password }/>
                </CardSection>
                { error ? (
                    <View style={ styles.errorContainerStyle }>
                        <Text style={ styles.errorTextStyle }>
                            { error }
                        </Text>
                    </View>
                ) : null }
                <CardSection>
                    { loading ? (
                        <Spinner size='large' />
                    ): (
                        <Button onPress={ this.onButtonPress }>
                            Login
                        </Button>
                    )}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    errorContainerStyle: {
        backgroundColor: 'white'
    }
}

const mapStateToProps = ({ auth: { email, password, error, loading }}) => ({ email, password, error, loading })

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser, 
})(LoginForm)