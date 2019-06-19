import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import ItemList from '../../components/itemsList';
import { fetchData } from '../../actions';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { data, errorMessage } = this.props;
    return (
      <div className="container">
        <br />
        <ItemList data={data} />
        {errorMessage && errorMessage != null && "Somethings went wrong!"}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.hierarchy.data,
    errorMessage: state.hierarchy.errorMessage
  }
}

const mapDispatchToProps = {
  fetchData
}

HomePage.propTypes = {
  fetchData: PropTypes.func,
  removeFilter: PropTypes.func,
  data: PropTypes.array,
  errorMessage: PropTypes.string
}

HomePage.defaulfProps = {
  data: [],
  fetchData: () => { },
  errorMessage: null
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
