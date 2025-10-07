import React, { useState } from "react";

function Counter() {
  // Step 1: Declare a state variable for the count
  const [count, setCount] = useState(0);

  // Step 2: Define handlers for increasing and decreasing
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Optional: Display message when threshold is reached
  const limitMessage = count >= 10 ? "🎉 You've reached the limit!" : "";

  return (
    <div style={styles.container}>
      <h1>Click Counter App</h1>
      <h2>{count}</h2>
      <div>
        <button style={styles.button} onClick={increase}>Increase</button>
        <button style={styles.button} onClick={decrease}>Decrease</button>
      </div>
      <p style={styles.message}>{limitMessage}</p>
    </div>
  );
}

// Basic inline styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
  },
  message: {
    color: "red",
    fontWeight: "bold",
  },
};

export default Counter;