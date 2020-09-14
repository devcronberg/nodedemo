const modul = require("../shared/kommuner.js");

(async function() {
  const kommuner = await modul.hentKommuner();
  console.log("Kommunuer i Danmark via Node");
  console.log();
  kommuner.forEach((v) => console.log(`${v.kode}: ${v.navn}`));
})();
