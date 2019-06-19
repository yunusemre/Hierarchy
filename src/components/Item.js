import React from 'react'
import PropTypes from 'prop-types'

export default class Item extends React.Component {
  constructor() {
    super()

    this.state = {
      collapsed: false
    }
  }

  onCollapsed() {
    const { collapsed } = this.state
    this.setState({ collapsed: !collapsed })
  }

  render() {
    const { collapsed } = this.state
    const { item, removeID } = this.props
    return (
      <ul className='list-unstyled mB10'>
        <li className='card-header'>
          <span
            className={`${item.children.length > 0 ? 'cp' : 'ncp disabled'}`}
            onClick={this.onCollapsed.bind(this)}>
            {item.Name}
          </span>
          <button onClick={() => removeID(item.ID)} type='button' className='close'>
            <span aria-hidden='true'>&times;</span>
          </button>
        </li>
        <ul className='mT10'>
          {collapsed &&
            item.children &&
            item.children.length > 0 &&
            item.children.map(res => {
              return <Item key={res.ID} id={res.ID} item={res} removeID={removeID} />
            })}
        </ul>
      </ul>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object,
  removeID: PropTypes.func
}

Item.defaultProps = {
  item: {},
  removeID: () => { }
}
