const _ = require("underscore");
const axios = require("axios").default;

exports.hentKommuner = function() {
  return new Promise(async function(resolve, reject) {
    try {
      let response = await axios.get("https://dawa.aws.dk/kommuner/");
      let kommuner = response.data;
      // skab et array af objekter med navn og kode (skærer resten fra)
      let navne = _.map(kommuner, (o) => ({
        navn: o.navn,
        kode: o.kode,
      }));
      resolve(navne);
    } catch (error) {
      reject(error);
    }
  });
};
