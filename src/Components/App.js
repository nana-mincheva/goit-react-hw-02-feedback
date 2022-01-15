import React, { Component } from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Notification from "./notification/Notification";
import Section from "./section/Section";
import Statistic from "./statistic/Statistic";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = (e) => {
    const name = e.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => (acc += value), 0);

  // countTotalFeedback = () => this.good + this.neutral + this.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.changeState}
          />
        </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification title="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
