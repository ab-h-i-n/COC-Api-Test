import {
  getClanDetails,
  getWarDetails,
  getWarLeagueDetails,
} from "./cocFuctions.js";


const commandConfig = {
  "#clan": getClanDetails,
  "#war": getWarDetails,
  "#warleague": getWarLeagueDetails,
};


export default commandConfig;