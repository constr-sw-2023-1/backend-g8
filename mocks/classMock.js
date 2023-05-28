const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");

const mock = new MockAdapter(axios);

const classEndpoint = "http://localhost:8086/classes/";
const classId = "e74099e7-f394-42ef-87b9-8013fd9f0e21";
const classData = {
  numClass: "1105-03",
  schedule: "NP",
  userName: "Eduardo Arruda",
};

mock
  .onGet(`${classEndpoint}${classId}`)
  .reply(200, { success: true, data: classData });

module.exports = mock;
