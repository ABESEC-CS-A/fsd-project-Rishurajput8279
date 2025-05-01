import React, { useState } from "react";

const FeedbackForm = ({ facultyName, courseId, onSubmit }) => {
  const [feedback, setFeedback] = useState({
    clarity: 0,
    engagement: 0,
    punctuality: 0,
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(feedback); // Pass feedback to the parent component or API call
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Feedback for {facultyName}</h2>

      <label className="block mb-2">
        Clarity of Explanation:
        <input
          type="range"
          name="clarity"
          min="1"
          max="5"
          value={feedback.clarity}
          onChange={handleChange}
          className="w-full"
        />
      </label>

      <label className="block mb-2">
        Engagement in Class:
        <input
          type="range"
          name="engagement"
          min="1"
          max="5"
          value={feedback.engagement}
          onChange={handleChange}
          className="w-full"
        />
      </label>

      <label className="block mb-2">
        Punctuality:
        <input
          type="range"
          name="punctuality"
          min="1"
          max="5"
          value={feedback.punctuality}
          onChange={handleChange}
          className="w-full"
        />
      </label>

      <label className="block mb-2">
        Comments:
        <textarea
          name="comments"
          value={feedback.comments}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Additional feedback..."
        ></textarea>
      </label>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;``