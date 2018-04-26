import React from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'

import { employeesFetch } from '../../actions'
import EmployeeListItem from './ListItem'

import map from 'lodash/map'

class EmployeeList extends React.Component {
    componentWillMount() {
        this.props.employeesFetch()
        this.createDataSource(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps)
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.dataSource = ds.cloneWithRows(employees)
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={ this.dataSource }
                renderRow={ employee => <EmployeeListItem employee={ employee } /> }/>
        )
    }
}

const mapStateToProps = (state) => {
    const employees = map(state.employees, (val, uid) => {
        return { ...val, uid }
    })

    return { employees }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)