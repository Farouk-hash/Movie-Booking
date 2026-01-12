import React from 'react';
import { addMoviesStyle } from '../../styles/addmovies.js';
import { Plus } from 'lucide-react';
export const SlotsMovies = ({
  addSlot,
  movieSlots,
  removeSlot,
  handleSlotChange,
}) => {
  return (
    <div className={addMoviesStyle.slots.container}>
      <div className="flex justify-between items-center mb-4">
        <h3 className={addMoviesStyle.slots.title}>Movie Showtimes</h3>
        <button
          type="button"
          onClick={addSlot}
          className={addMoviesStyle.slots.addButton}
        >
          <Plus className="h-4 w-4" />
          Add Showtime
        </button>
      </div>

      <div className={addMoviesStyle.slots.slotGrid}>
        {movieSlots.map((slot, index) => (
          <div key={index} className={addMoviesStyle.slots.slotCard}>
            <div className={addMoviesStyle.slots.slotHeader}>
              <span className={addMoviesStyle.slots.slotNumber}>
                Showtime #{index + 1}
              </span>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeSlot(index)}
                  className={addMoviesStyle.slots.removeButton}
                >
                  Remove
                </button>
              )}
            </div>

            <div className={addMoviesStyle.slots.inputGroup}>
              {/* Date Selection */}
              <label className={addMoviesStyle.slots.label}>
                Date *
                <input
                  type="date"
                  value={slot.day}
                  onChange={(e) =>
                    handleSlotChange(index, 'day', e.target.value)
                  }
                  className={addMoviesStyle.slots.input}
                  required
                  min={new Date().toISOString().split('T')[0]} // Optional: restrict to future dates
                />
              </label>

              {/* Time Input */}
              <label className={addMoviesStyle.slots.label}>
                Time (24-hour format) *
                <input
                  type="number"
                  min="0"
                  max="23"
                  value={slot.time}
                  onChange={(e) =>
                    handleSlotChange(
                      index,
                      'time',
                      parseInt(e.target.value) || 0,
                    )
                  }
                  className={addMoviesStyle.slots.input}
                  placeholder="Enter hour (0-23)"
                  required
                />
              </label>

              {/* AM/PM Selection */}
              <label className={addMoviesStyle.slots.label}>
                Time Period *
                <select
                  value={slot.ampm}
                  onChange={(e) =>
                    handleSlotChange(index, 'ampm', e.target.value)
                  }
                  className={addMoviesStyle.slots.select}
                  required
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </label>
            </div>

            {/* Display formatted date and time */}
            {slot.day && slot.time > 0 && (
              <div className="mt-3 p-2 bg-gray-600 rounded text-sm text-white">
                <span className="font-medium">Scheduled: </span>
                {new Date(slot.day).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}{' '}
                at {slot.time}:00 {slot.ampm}
              </div>
            )}

            {/* Display formatted time */}
            {slot.time > 0 && slot.day && (
              <div className="mt-3 p-2 bg-gray-600 rounded text-sm text-white">
                <span className="font-medium">Scheduled: </span>
                {slot.day} at {slot.time}:00 {slot.ampm}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
