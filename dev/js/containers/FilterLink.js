import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => { // ownprops are passed in Footer.js <FilterLink filter="SHOW_ALL"> etc
    return {
        active: ownProps.filter === state.visibilityFilter // ownProps.filter is ownProps.SHOW_ALL ?
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink