import React, { Component } from "react";
import { InfoConsumer } from "../../Context";
import ReviewCard from "./ReviewCard";

class Reviews extends Component {
  render() {
    return (
      <InfoConsumer>
        {(data) => {
          return data.reviews.map((person) => {
            return <ReviewCard key={person.id} person={person} />;
          });
        }}
      </InfoConsumer>
    );
  }
}
export default Reviews;
