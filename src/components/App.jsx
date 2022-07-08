import React, { useState } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback()) {
      return (good / countTotalFeedback()) * 100;
    }
  };

  const onLeaveFeedback = name => {
    switch (name) {
      case options[0]:
        setGood(prev => prev + 1);
        break;
      case options[1]:
        setNeutral(prev => prev + 1);
        break;
      case options[2]:
        setBad(prev => prev + 1);
        break;
      default:
        console.log('It is heppened something wrong');
    }
  };

  const sum = countTotalFeedback();
  const percent = countPositiveFeedbackPercentage();
  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {sum ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={sum}
            positivePercentage={percent}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
