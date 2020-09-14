// nødvendig for at kunne håndtere promise i Parcel
const regeneratorRuntime = require("regenerator-runtime");
const $ = require("jquery");
const modul = require("../shared/kommuner.js");

(async function() {
  const kommuner = await modul.hentKommuner();
  const ul = $("#lst");
  kommuner.forEach((v) => {
    let li = $("<li/>").html(`${v.kode}: ${v.navn}`);
    ul.append(li);
  });
})();
