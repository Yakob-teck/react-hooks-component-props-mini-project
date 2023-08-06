import React from "react";

const Article = ({ title, date, preview, readingTime }) => {
  // Function to calculate 'Minutes to Read' based on the provided reading time
  const parsedDate = date ? new Date(date) : null;
  const formattedDate = parsedDate
    ? parsedDate.toDateString()
    : "January 1, 1970";

  const calculateMinutesToRead = (readingTime) => {
    const coffeeCupEmoji = "☕️";
    const bentoBoxEmoji = "🍱";

    if (readingTime < 30) {
      const coffeeCups = Math.ceil(readingTime / 5);
      return coffeeCupEmoji.repeat(coffeeCups) + ` ${readingTime} min read`;
    } else {
      const bentoBoxes = Math.ceil(readingTime / 10);
      return bentoBoxEmoji.repeat(bentoBoxes) + ` ${readingTime} min read`;
    }
  };

  console.log("Formatted Date:", formattedDate);
  const calculatedReadingTime = calculateMinutesToRead(preview);

  return (
    <article>
      <h3>{title}</h3>
      {formattedDate ? <small>{formattedDate}</small> : null}
      <p>{preview}</p>
      <p>{calculateMinutesToRead(readingTime)}</p>
    </article>
  );
};

export default Article;
