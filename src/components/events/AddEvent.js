import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEvent } from '../../actions/eventActions';
import DateTimePicker from 'react-datetime-picker';

class AddEvent extends Component {
  state = {
    id: '',
    name: '',
    date: new Date(),
    details: '',
    errors: {},
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, date, details } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (date === '') {
      this.setState({ errors: { date: 'Date is required' } });
      return;
    }

    if (details === '') {
      this.setState({ errors: { details: 'Details are required' } });
      return;
    }

    const newEvent = {
      name,
      date,
      details,
    };

    //// SUBMIT EVENT ////
    this.props.addEvent(newEvent);

    // Clear State
    this.setState({
      name: '',
      date: '',
      details: '',
      errors: {},
    });

    this.props.history.push('/');
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, date, details, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Event</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
         
            <div className="form-group">
              <label htmlFor={date}>Date:</label>
              <DateTimePicker
                onChange={(date) => this.setState({ date })}
                value={this.state.date}
                className="form-control form-control-lg"
                minDate={new Date()}
                dateFormat="dddd, MMMM Do YYYY"
                timeFormat="h:mm:ss a"
              />
            </div>
            <TextInputGroup
              label="Details"
              name="details"
              placeholder="Enter Details"
              value={details}
              onChange={this.onChange}
              error={errors.details}
            />
            <input
              type="submit"
              value="Add Event"
              className="btn btn-block btn-outline-info"
              style={{ cursor: 'pointer' }}
            />
          </form>
        </div>
      </div>
    );
  }
}

AddEvent.propTypes = {
  addEvent: PropTypes.func.isRequired,
};

export default connect(null, { addEvent })(AddEvent);
