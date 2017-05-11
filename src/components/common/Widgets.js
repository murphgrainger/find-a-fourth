import React from 'react';

import moment from 'moment'

import { Calendar, DateRange } from 'react-date-range';

class Widget extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
};
  this.handleSelect = this.handleSelect.bind(this)
}

handleSelect(range){
        console.log(range);
}


    render() {
        return (
          <div className="container">
              <DateRange
                onInit={this.handleSelect}
                onChange={this.handleSelect}
                calendars= {1}
              />
          </div>
        );
    }
}

export default Widget;
