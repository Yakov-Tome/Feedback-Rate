import React, { useState } from "react";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };

  return (
    <Card>
      <form>
        <h2>Rate The Service</h2>
        {/* Rate Select Component */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
