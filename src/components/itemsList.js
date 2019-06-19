import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Item from './Item'
import { removeFilter } from '../actions/'

class ItemList extends React.Component {
  onRemoveFilter = (id) => {
    this.props.removeFilter(id)
  }
  render() {
    const { data } = this.props
    return (
      <div className=''>
        {[...data].map(result => {
          return (
            <div id={result.ID} key={result.ID} className='mB5'>
              <Item removeID={this.onRemoveFilter} item={result} />
            </div>
          )
        })}
      </div>
    )
  }
}

ItemList.defaultProps = {
  data: []
}

ItemList.propTypes = {
  data: PropTypes.array.isRequired,
  removeFilter: PropTypes.func,
  onRemoveFilter: PropTypes.func
}

const mapStateToProps = state => ({
  data: state.hierarchy.data
})

const mapDispatchToProps = {
  removeFilter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)
