import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
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
          <Button version="primary" type="submit">
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
