import React from "react";
import Spinner from "../_components/Spinner";

function loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl bg-primary-200">Loading Cabin Data</p>
    </div>
  );
}

export default loading;
