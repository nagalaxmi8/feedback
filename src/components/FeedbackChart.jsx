import React from 'react';
import { Bar } from 'react-chartjs-2';
import './FeedbackChart.css'; // Importing CSS for chart styles
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FeedbackChart = ({ feedback }) => {
  const feedbackValues = [
    parseInt(feedback.day1) || 0,
    parseInt(feedback.day2) || 0,
    parseInt(feedback.day3) || 0,
    parseInt(feedback.day4) || 0,
    parseInt(feedback.day5) || 0,
  ];

  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [
      {
        label: 'Feedback Ratings',
        data: feedbackValues,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Feedback Analysis',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Feedback Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default FeedbackChart;
