import React from "react";
import { Link } from "react-router-dom";
import Progress from "./../progress-labeled/";

const Card = () => {
  return (
    <div className="key-emergencies-item col col-6-sm col-4-mid" key="key">
      <Link to="/emergencies/">
        <div className="card_box card_box_left card_box_title">
          <div className="row flex">
            <div className="card__title__wrap col col-7 col-8-mid">
              <h2 className="card__title">hello</h2>
            </div>
          </div>
          <small className="last_updated">dgdgd &nbsp;</small>
        </div>

        <div className="card_box_container card_box_container--op">
          <div className="card_box card_box_left card_box--op">
            <div className="card_box_no">bvbv</div>
            <span className="affected_population_icon"></span>
            <small className="heading-tiny">dgggd</small>
          </div>
          <div className="card_box card_box_left card_box--op">
            <span className="affected_population_icon"></span>
            <div className="card_box_no">vbv</div>
            <small className="heading-tiny">dgdgd</small>
          </div>
        </div>

        <div className="card_box_container card_box_container--op">
          <div className="card_box card_box_left card_box--op">
            <div className="card_box_no">vbvb</div>
            <small className="heading-tiny">vbvbvb</small>
          </div>
          <div className="card_box card_box_left card_box--op">
            <span className="deployed_personnel_icon"></span>
            <div className="card_box_no">vbvb</div>
            <small className="heading-tiny">vbvbb</small>
          </div>
        </div>

        <div className="card_box_footer">
          <Progress value={40} max={100} />
          <div className="card_box_full card_box_container card_box_container--op">
            <div className="heading-tiny">vbvbv</div>
            <div className="card_box_fc">bvbvcbcv</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
