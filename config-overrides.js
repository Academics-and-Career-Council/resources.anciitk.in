const { useBabelRc, override } = require("customize-cra");
module.exports = override(
  // eslint-disable-next-line
  useBabelRc()
);
