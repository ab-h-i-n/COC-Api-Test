import axios from "axios";

async function getClanDetails(msg) {
  try {
    await axios
      .get(`${process.env.API_URL}/clans/%232G00R8P0G`, {
        headers: {
          Authorization: `Bearer ${process.env.COC_TOKEN}`,
        },
      })
      .then((response) => {
        console.log(response);
        const clanDetails = response.data;
        msg.reply("Clan Name: " + clanDetails.name);
        const clanMembers = clanDetails?.memberList.map((member) => {
          return member.name;
        });
        const message = "Clan Members : \n" + clanMembers.join("\n");
        msg.reply(message);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    msg.reply("Failed to fetch clan details");
  }
}

export { getClanDetails };
