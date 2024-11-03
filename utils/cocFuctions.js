import { fetchData, handleError } from "./dataFetch.js";
import { CLAN_TAG, CLAN_TAG_RAW } from "./env.js";
import log from "./log.js";
import { reply } from "./whatsappConfig.js";

async function getClanDetails(msg) {
  try {
    const url = `/clans/${CLAN_TAG}`;
    const clanDetails = await fetchData(url, "Failed to fetch clan details");

    log("Clan details fetched");

    const clanMembers = clanDetails?.memberList?.map((member) => member.name);
    const message = `*Clan Members:*\n\n${clanMembers.join("\n")}`;

    reply(msg, message);
    reply(msg, `*Clan Name:* ${clanDetails.name}`);
  } catch {
    handleError(msg, "Failed to fetch clan details");
  }
}

async function getWarDetails(msg) {
  try {
    const url = `/clans/${CLAN_TAG}/currentwar`;
    const clanWarDetails = await fetchData(
      url,
      "Failed to fetch clan war details"
    );

    log("Clan war details fetched");

    if (clanWarDetails?.state === "notInWar") {
      reply(msg, "Clan is not in war");
    } else {
      const messages = [
        `*Clan Name:* ${clanWarDetails.clan.name}`,
        `*Opponent:* ${clanWarDetails.opponent.name}`,
        `*War State:* ${clanWarDetails.state}`,
        `*War Type:* ${clanWarDetails.teamSize}`,
        `*War Start Time:* ${clanWarDetails.startTime}`,
        `*War End Time:* ${clanWarDetails.endTime}`,
      ];
      reply(msg, messages.join("\n"));
    }
  } catch {
    handleError(msg, "Failed to fetch clan war details");
  }
}

async function getWarLeagueDetails(msg) {
  try {
    const url = `/clans/${CLAN_TAG}/currentwar/leaguegroup`;
    const clanDetails = await fetchData(
      url,
      "Failed to fetch clan war league details"
    );

    log("Clan war league details fetched");

    if (clanDetails?.state === "notInWar") {
      reply(msg, "Clan is not in war league");
    } else {
      const opponents = clanDetails?.clans.filter(
        (clan) => clan.tag !== CLAN_TAG_RAW
      );
      const opponentDetails = opponents.map(
        (opponent) =>
          `*Name:* ${opponent.name}\n*Level:* ${opponent.clanLevel}\n`
      );

      reply(msg, `*Opponents:*\n\n${opponentDetails.join("\n")}`);
    }
  } catch {
    handleError(msg, "Failed to fetch clan war league details");
  }
}

export { getClanDetails, getWarDetails, getWarLeagueDetails };
