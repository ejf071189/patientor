import React from "react";
import Rating from '@mui/material/Rating';
import { Favorite } from '@mui/icons-material';

type BarProps = {
  rating: number;
  showText: boolean;
};

const HEALTHBAR_TEXTS = [
  "The patient is in great shape",
  "The patient has a low risk of getting sick",
  "The patient has a high risk of getting sick",
  "The patient has a diagnosed condition",
];

const HealthRatingBar = ({ rating, showText }: BarProps) => {
  return (
    <div className="health-bar">
      <Rating
        readOnly
        value={4 - rating}
        max={4}
        icon={<Favorite htmlColor="red" fontSize="inherit" />}
        emptyIcon={<Favorite color="disabled" fontSize="small" />}
      />

      {showText ? <p>{HEALTHBAR_TEXTS[rating]}</p> : null}
    </div>
  );
};

export default HealthRatingBar;
