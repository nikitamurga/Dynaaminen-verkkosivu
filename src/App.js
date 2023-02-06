
import './App.css';
import React, { useState } from "react";

const AlcoholCalculator = () => {
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState("male");
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;
    let res = 0;
    if (gender === "male") {
      res = gramsLeft / (weight * 0.7);
    } else {
      res = gramsLeft / (weight * 0.6);
    }
    res = res < 0 ? 0 : res;
    setResult(res);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Calculating alcohol blood level</h3>
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="bottles">Number of bottles:</label>
          <select name="bottles" value={bottles} onChange={(e) => setBottles(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label htmlFor="time">Time (hours):</label>
          <select name="time" value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button type="submit">Calculate</button>
      </form>
      <div>
        Blood Alcohol Level: <strong>{result.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default AlcoholCalculator;
