import React, { Component } from "react";
import { endpointPath } from "../config/api";
import Dropdowns from "../components/Dropdowns";
import ConvertResult from "../components/ConvertResult";
import "./currencyStyle.css";
import NavBarComplete from "../../../Navbar/Navbar";
import { AiOutlineSwap } from "react-icons/ai";
import { FaRedoAlt } from "react-icons/fa";

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.default = {
      from: "USD",
      into: "TRY",
      loading: false,
      amount: 1,
      conversionResult: "",
      conversionRate: "",
    };
    this.state = this.default;
  }
  convertCurrency = async ({ from, into, amount }) => {
    this.setState({ loading: true });
    let url = endpointPath(from, into);

    let data = await fetch(url);
    let parsedData = await data.json();
    const conversionRate = parsedData[`${from}_${into}`];
    const conversionResult = (conversionRate * amount).toFixed(2);
    this.setState({
      conversionRate: conversionRate,
      conversionResult: conversionResult,
      loading: false,
    });
  };

  handleInput = (event) => {
    this.setState({ amount: event.target.value });
  };

  handleFrom = (event) => {
    this.setState({ from: event.currentTarget.value });
  };

  handleInto = (event) => {
    this.setState({ into: event.currentTarget.value });
  };

  handleReset = () => {
    this.setState(this.default);
  };

  handleSwitch = () => {
    const { from, into } = this.state;
    this.setState({ from: into, into: from });
  };

  render() {
    const { from, into, amount, conversionRate, conversionResult, loading } =
      this.state;
    return (
      <div>
        <NavBarComplete />

        <div className="currencyApp">
          <div className="currency_wrapper">
            <div className="container-fluid ">
              <input
                id="currencyInputArea"
                className="form-control-lg mt-5"
                placeholder="Enter Amount"
                value={amount}
                type="number"
                onChange={this.handleInput}
                style={{
                  width: "12rem",
                  textAlign: "center",
                  fontSize: "16px",
                }}
              />

              <div className="labelSection">
                <div className="fromdrop">
                  <Dropdowns
                    id="currDropdowns"
                    labelName="From"
                    handleChange={this.handleFrom}
                    value={from}
                  />
                </div>
                <div className="text-center swap">
                  <button
                    className="btn shadow text-center"
                    id="swapButton"
                    onClick={this.handleSwitch}
                  >
                    <AiOutlineSwap />
                  </button>
                </div>

                <div className="intodrop">
                  <Dropdowns
                    id="currDropdowns"
                    labelName="Into"
                    handleChange={this.handleInto}
                    value={into}
                  ></Dropdowns>
                </div>
              </div>

              <div className="mt-5 text-center">
                <button
                  id="convertButton"
                  className="btn  btn-lg shadow"
                  disabled={amount === "0" || amount === "" || amount < 0}
                  onClick={() => this.convertCurrency(this.state)}
                >
                  Convert
                </button>
              </div>
              <div className="mt-4 text-center">
                <button
                  id="resetButton"
                  className="btn btn-rcolor btn-lg shadow"
                  text="Reset"
                  onClick={this.handleReset}
                >
                  Reset <FaRedoAlt id="redoButton" />
                </button>
              </div>
              <div className="mt-5 mb-2 text-center">
                <ConvertResult
                  Loading={loading}
                  amount={amount}
                  from={from}
                  into={into}
                  result={conversionResult}
                  rate={conversionRate}
                ></ConvertResult>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrencyConverter;
