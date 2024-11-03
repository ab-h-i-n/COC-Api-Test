import {
  getClanDetails,
  getWarDetails,
  getWarLeagueDetails,
} from "./cocFuctions.js";

function help(msg) {
  const message = `*Commands:*\n\n#help - Display available commands\n#clan - Get clan details\n#war - Get current war details\n#warleague - Get current war league details`;
  reply(msg, message);
}

const commandConfig = {
  "#help": help,
  "#clan": getClanDetails,
  "#war": getWarDetails,
  "#warleague": getWarLeagueDetails,
};

export default commandConfig;
