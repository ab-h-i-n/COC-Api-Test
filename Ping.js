async function Ping() {
  await axios.get(`${process.env.SERVER_URL}/ping`);
}

export default Ping;