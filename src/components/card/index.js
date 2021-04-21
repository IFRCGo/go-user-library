import React from "react";
import Progress from "./../progress-labeled/";
import Button from "./../button/";

const Card = ({
  linkTo,
  operationName,
  emergencyDeployments,
  emergencyDeploymentsErus,
  beneficiaries,
  lastUpdate,
  requested,
  operationPopulation,
  operationCardUnits,
  operationCardFunding,
  operationCardDeployed,
  operationCardFundingCoverage,
  requestedPercentage,
  progressNumber,
}) => {
  return (
    <div className="key-emergencies-item col col-6-sm col-5-mid" key="key">
      <a href={linkTo}>
        <div className="card_box card_box_left card_box_title">
          <div className="row flex">
            <div className="card__title__wrap col col-7 col-8-mid">
              <h2 className="card__title">{operationName}</h2>
            </div>
            <div className="card__title__wrap col col-5 col-4-mid">
              <Button size="small" type="primary-filled">
                follow
              </Button>
            </div>
          </div>
          <small className="last_updated">
            Last updated: &nbsp;{lastUpdate}
          </small>
        </div>

        <div className="card_box_container card_box_container--op">
          <div className="card_box card_box_left card_box--op">
            <div className="card_box_no">{beneficiaries}</div>
            <span className="affected_population_icon"></span>
            <small className="heading-tiny">{operationPopulation}</small>
          </div>
          <div className="card_box card_box_left card_box--op">
            <span className="affected_population_icon"></span>
            <div className="card_box_no">{emergencyDeploymentsErus}</div>
            <small className="heading-tiny">{operationCardUnits}</small>
          </div>
        </div>

        <div className="card_box_container card_box_container--op">
          <div className="card_box card_box_left card_box--op">
            <div className="card_box_no">{requested}</div>
            <small className="heading-tiny">{operationCardFunding}</small>
          </div>
          <div className="card_box card_box_left card_box--op">
            <span className="deployed_personnel_icon"></span>
            <div className="card_box_no">{emergencyDeployments}</div>
            <small className="heading-tiny">{operationCardDeployed}</small>
          </div>
        </div>

        <div className="card_box_footer">
          <Progress value={progressNumber} max={100} />
          <div className="card_box_full card_box_container card_box_container--op">
            <div className="heading-tiny">{operationCardFundingCoverage}</div>
            <div className="card_box_fc">{requestedPercentage}</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
