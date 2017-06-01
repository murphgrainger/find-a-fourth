import React from 'react';


import './location.css'
import 'rc-slider/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';


import { Row, Col, Form, Checkbox, Input, FormControl, Button, FormGroup, ControlLabel, Label, Jumbotron, Container, Card, CardTitle, CardText } from 'reactstrap';


import PlacesAutocomplete from 'react-places-autocomplete'
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete'

import Icon from 'react-fontawesome';



class LocationForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      address: '',
      geocodeResults: null,
      loading: false
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSelect(address) {
    this.setState({
      address,
      loading: true
    })
    geocodeByAddress(address)
      .then((results) => {
        console.log(results);
        getLatLng(results[0])
        .then(({ lat, lng }) => {
          console.log('Success', { lat, lng })
          this.setState({
            geocodeResults: ([lat, lng]),
            loading: false
          })
        })
      .catch((error) => {
        console.log('Oh no!', error)
        this.setState({
          geocodeResults: (0, 0),
          loading: false
        })
      })
    })
    }

    handleChange(address) {
    this.setState({
      address,
      geocodeResults: null
    })
  }

  onFormSubmit(e) {
    e.preventDefault()
      this.props.onFormSubmit(this.state);
     }

  setInternalState(prop, val){
    console.log({prop, val});
    this.setState({
      [prop]: val
    })
  }

  componentDidMount() {
    console.log(this.props.initialState);
  }


    render() {

      const cssClasses = {
      root: 'form-group',
      input: 'Demo__search-input',
      autocompleteContainer: 'Demo__autocomplete-container',
    }

      const AutocompleteItem = ({ formattedSuggestion }) => (
        <div className="Demo__suggestion-item">
          <i className='fa fa-map-marker Demo__suggestion-icon'/>
          <strong>{formattedSuggestion.mainText}</strong>{' '}
          <small className="text-muted">{formattedSuggestion.secondaryText}</small>
        </div>)

      const inputProps = {
        type: "text",
        value: this.state.address,
        onChange: this.handleChange,
        onBlur: () => {},
        onFocus: () => {},
        autoFocus: true,
        placeholder: "Search Places",
        name: 'Demo__input',
        id: "autocomplete-input",
      }
      
        return (
          <div className="form-holder">
            <Jumbotron fluid className="search-jumbotron">
              <Container fluid>
                <h1 className="display-3">Select a Location</h1>
                <p className="lead">List your post with a specific course, or region you'd like to play.</p>
              </Container>
            </Jumbotron>
            <form onSubmit={(e) => this.onFormSubmit(e)} className="location-form">
              <p>Enter a city, region, zip code, address, or specificc course name:</p>
              <Row>
                <div className='container autocomplete-container'>
                  <div><Icon name='map-marker' size='2x'/>  &nbsp; &nbsp; &nbsp;  </div>
                          <PlacesAutocomplete
                            onSelect={this.handleSelect}
                            autocompleteItem={AutocompleteItem}
                            onEnterKeyDown={this.handleSelect}
                            classNames={cssClasses}
                            inputProps={inputProps}
                          />
                    {this.state.loading ? <div><i className="fa fa-spinner fa-pulse fa-3x fa-fw Demo__spinner" /></div> : null}
                </div>
              </Row>
              <Row className="location-button-row">
                <Button className="highlight-color">
                  Back
                </Button>
              <Button type="submit" className="color-hit-orange">
                Preview
              </Button>
              </Row>
              </form>
          </div>
        );
    }
}

export default LocationForm;
