import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackChart from './components/FeedbackChart';
import './App.css';
const App = () => {
  const [feedback, setFeedback] = useState(null);

  // Function to handle form submission and save feedback data
  const handleFeedbackSubmit = (feedbackData) => {
    setFeedback(feedbackData);
  };

  return (
    <div>
      <h1>Feedback Analysis</h1>
      <FeedbackForm onSubmit={handleFeedbackSubmit} />
      {feedback && <FeedbackChart feedback={feedback} />}
    </div>
  );
};

export default App;
