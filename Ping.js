
async function Ping() {
  await fetch(`${process.env.SERVER_URL}/ping`);
}

export default Ping;