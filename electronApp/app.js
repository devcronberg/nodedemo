const $ = require("jquery");
const modul = require("../shared/kommuner.js");
const ipc = require("electron").ipcRenderer;
const { desktopCapturer, shell, clipboard } = require("electron");
const fs = require("fs");
const os = require("os");
const path = require("path");

ipc.on("updateLi", function(event, arg) {
  $("li").css("color", arg.color);
});

ipc.on("gemData", async function(event, arg) {
  const kommuner = await modul.hentKommuner();
  const json = JSON.stringify(kommuner);
  clipboard.writeText(json);
  alert("Data er gemt i udklipsholder");
});

(async function() {
  const kommuner = await modul.hentKommuner();
  const ul = $("#lst");
  kommuner.forEach((v) => {
    let li = $("<li/>").html(`${v.kode}: ${v.navn}`);
    ul.append(li);
  });
})();
