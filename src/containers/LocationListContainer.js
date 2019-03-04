import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from '../components/LocationList';
import { setSelectedCity } from '../actions';

class LocationListContiner extends Component {

    handleSelectedLocation = city => {
        this.props.setCity(city);
      }

    render() {
        return (
            <LocationList cities={this.props.cities}
            onSelectedLocation={this.handleSelectedLocation}>
          </LocationList>    
        );
    }
}

LocationListContiner.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value))
  });

export default connect(null,mapDispatchToPropsActions)(LocationListContiner);
