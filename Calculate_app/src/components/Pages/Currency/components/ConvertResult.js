import React from "react";
import Spinner from "./Spinner";
import "../Converter/currencyStyle.css";

function ConvertResult({ Loading, result, rate, amount, from, into }) {
  return (
    <>
      {Loading ? (
        <Spinner />
      ) : (
        result &&
        rate && (
          <>
            <h1 className="result">
              {amount} {from} is: {result} {into}
            </h1>
            <h4 className="rate ">Current Rate is: {rate}</h4>
          </>
        )
      )}
    </>
  );
}

export default ConvertResult;
