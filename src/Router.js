import React from 'react'

import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/employee/List'
import EmployeeCreateForm from './components/employee/CreateForm'
import EmployeeEditForm from './components/employee/EditForm'

const RouterComponent = () => (
    <Router>
        <Scene key='root' hideNavBar>
            <Scene key='auth'>
                <Scene key='login' component={ LoginForm } title='Please Login' initial/>
            </Scene>
            <Scene key='main'>
                <Scene
                    rightTitle='Add'
                    onRight={() => { Actions.employeeCreate() }}
                    key='employeeList'
                    component={ EmployeeList }
                    title='Employees'
                    initial/>
                <Scene
                    key='employeeCreate'
                    component={ EmployeeCreateForm }
                    title='Create Employee'/>
                <Scene
                    key='employeeEdit'
                    component={ EmployeeEditForm }
                    title='Edit Employee'/>
            </Scene>
        </Scene>
    </Router>
)

export default RouterComponent