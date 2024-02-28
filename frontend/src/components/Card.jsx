import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, name, state, user }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="h-48 overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        {/* Conditionally render Link based on state */}
        {state === "start learning" ? (
          <Link
            to="/:user/selectedLanguageLevels"
            className="text-gray-700 text-base"
          >
            {state}
          </Link>
        ) : (
          <Link to="" className="text-gray-700 text-base">
            {state}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
