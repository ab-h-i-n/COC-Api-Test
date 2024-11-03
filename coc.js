import client from "./wwcli.js";


async function getClanDetails(msg) {
  try {
    const response = await fetch(`${process.env.API_URL}/clans/%${process.env.CLAN_TAG}`, {
      headers: {
        Authorization: `Bearer ${process.env.COC_TOKEN}`,
      },
    });

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    const clanDetails = await response.json();
    console.log("Clan details fetched");
    msg.reply("*Clan Name:* " + clanDetails.name);
    const clanMembers = clanDetails?.memberList.map((member) => {
      return member.name;
    });
    const message = "*Clan Members :* \n\n" + clanMembers.join("\n");
    msg.reply(message);
  } catch (error) {
    console.log(error);
    client.sendMessage(process.env.ADMIN_CHAT_ID, "Failed to fetch clan details : \n\n" + error);
  }
}

export { getClanDetails };
