import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import CalculateButton from "../../CalculateButton/CalculateButton";
import "./TimeApp/timeStyle.css";

const countryOptions = [
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "al", flag: "al", text: "Albania" },
  { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  { key: "as", value: "as", flag: "as", text: "American Samoa" },
  { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
  { key: "ao", value: "ao", flag: "ao", text: "Angola" },
  { key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
  { key: "ag", value: "ag", flag: "ag", text: "Antigua" },
  { key: "ar", value: "ar", flag: "ar", text: "Argentina" },
  { key: "am", value: "am", flag: "am", text: "Armenia" },
  { key: "aw", value: "aw", flag: "aw", text: "Aruba" },
  { key: "au", value: "au", flag: "au", text: "Australia" },
  { key: "at", value: "at", flag: "at", text: "Austria" },
  { key: "az", value: "az", flag: "az", text: "Azerbaijan" },
  { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
  { key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
  { key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
  { key: "bb", value: "bb", flag: "bb", text: "Barbados" },
  { key: "by", value: "by", flag: "by", text: "Belarus" },
  { key: "be", value: "be", flag: "be", text: "Belgium" },
  { key: "bz", value: "bz", flag: "bz", text: "Belize" },
  { key: "bj", value: "bj", flag: "bj", text: "Benin" },
  { key: "tr", value: "tr", flag: "tr", text: "Turkey" },
];

export default class TimeApp extends Component {
  render() {
    return (
      <div className="timeApp">
        <div id="time-card1" className="card text-center">
          {/* Actual Left Panel is "time-note" */}
          <span id="time-note">
            Please select the countries and result will be displayed in the
            middle box
          </span>
          <div id="leftPanel">
            <Dropdown
              id="time-dropdown"
              placeholder="Select Country"
              fluid
              search
              selection
              options={countryOptions}
            />
            <Dropdown
              id="time-dropdown2"
              placeholder="Select Country"
              fluid
              search
              selection
              options={countryOptions}
            />
            <CalculateButton />
          </div>
        </div>

        {/* Actual Right Panel */}
        <div id="time-card2" className="card text-center">
          <span id="time-note">
            Timezones calculated according to Country's capitals
          </span>
          <table>
            <tbody>
              <tr>
                <tr>
                  <td>
                    Timezone of <br />
                    "Country 1"
                  </td>
                  <td>
                    <input></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    Timezone of <br />
                    "Country 2"
                  </td>
                  <td>
                    <input></input>
                  </td>
                </tr>
                <tr>
                  <td>Timezone Difference</td>
                  <td>
                    <input></input>
                  </td>
                </tr>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
