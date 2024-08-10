
import React, { Component } from 'react';
import moment from 'moment-timezone';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TimeZoneDisplay from '../TimeZoneDisplay';
import AddTimeZone from '../AddTimeZone';
import './index.css';

class TimeZoneConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeZones: ['UTC', 'Asia/Kolkata'], // Default time zones
      currentTime: moment(),
      darkMode: false,
    };
  }

  handleTimeZoneAddition = (timeZone) => {
    this.setState(prevState => ({
      timeZones: [...prevState.timeZones, timeZone]
    }));
  };

  handleTimeZoneDeletion = (index) => {
    this.setState(prevState => ({
      timeZones: prevState.timeZones.filter((_, i) => i !== index)
    }));
  };

  onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(this.state.timeZones);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    this.setState({ timeZones: items });
  };

  handleDarkModeToggle = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode
    }));
  };

  handleDateChange = (date) => {
    this.setState({ currentTime: date });
  };

  
  handleScheduleMeet = () => {
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting&dates=${moment(this.state.currentTime).format('YYYYMMDDTHHmmss')}/${moment(this.state.currentTime).add(1, 'hour').format('YYYYMMDDTHHmmss')}`;
    window.open(url, '_blank');
  };

  render() {
    const { timeZones, currentTime, darkMode } = this.state;
    return (
      <div className={darkMode ? 'dark-mode' : ''}>
        <button onClick={this.handleDarkModeToggle}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <AddTimeZone onAdd={this.handleTimeZoneAddition} />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {timeZones.map((zone, index) => (
                  <Draggable key={zone} draggableId={zone} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TimeZoneDisplay
                          timeZone={zone}
                          currentTime={currentTime}
                          onDelete={() => this.handleTimeZoneDeletion(index)}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <button onClick={this.handleScheduleMeet}>Schedule Meet</button>
        
      </div>
    );
  }
}

export default TimeZoneConverter;
