import React, { useState } from 'react';
import './FeedbackForm.css';
const FeedbackForm = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState({
    day1: '',
    day2: '',
    day3: '',
    day4: '',
    day5: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(feedback);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Day 1:
          <input
            type="number"
            name="day1"
            value={feedback.day1}
            onChange={handleChange}
            min="0"
            max="10"
          />
        </label>
      </div>
      <div>
        <label>
          Day 2:
          <input
            type="number"
            name="day2"
            value={feedback.day2}
            onChange={handleChange}
            min="0"
            max="10"
          />
        </label>
      </div>
      <div>
        <label>
          Day 3:
          <input
            type="number"
            name="day3"
            value={feedback.day3}
            onChange={handleChange}
            min="0"
            max="10"
          />
        </label>
      </div>
      <div>
        <label>
          Day 4:
          <input
            type="number"
            name="day4"
            value={feedback.day4}
            onChange={handleChange}
            min="0"
            max="10"
          />
        </label>
      </div>
      <div>
        <label>
          Day 5:
          <input
            type="number"
            name="day5"
            value={feedback.day5}
            onChange={handleChange}
            min="0"
            max="10"
          />
        </label>
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
