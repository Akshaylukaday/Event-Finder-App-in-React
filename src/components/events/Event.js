import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEvent } from '../../actions/eventActions';
import Moment from 'moment';

class Event extends Component {
  state = {
    showEventInfo: true,
  };

  onDeleteClick = (id) => {
    console.log(id);
    this.props.deleteEvent(id);
  };

  render() {
    const { id, name, date, details } = this.props.event;
    const { showEventInfo } = this.state;

    return (
      <div className="card mb-3">
        <h5 className="card-header">
          {name}{' '}
          <i
            onClick={() =>
              this.setState({
                showEventInfo: !this.state.showEventInfo,
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
        </h5>
        {showEventInfo ? (
          <div className="card-body">
            <p className="card-text">
              <u>
                <b>To be conducted on:</b>
              </u>{' '}
              {Moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a')}
            </p>
            <p className="card-text">
              <u>
                <b>Details:</b>
              </u>{' '}
              {details}
            </p>
            <a
              href="#"
              className="btn btn-outline-danger"
              onClick={this.onDeleteClick.bind(this, id)}
            >
              Delete
            </a>
          </div>
        ) : null}
      </div>
    );
  }
}

Event.defaultProps = {
  date: new Date(),
};

Event.propTypes = {
  event: PropTypes.object.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

export default connect(null, { deleteEvent })(Event);
