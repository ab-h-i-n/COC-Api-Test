async function pingCall() {
  await fetch(`${process.env.SERVER_URL}/api/ping`);
}

async function ping() {
  // setInterval(async () => {
  //   await pingCall();
  // }, 30000);
}

export default ping;
