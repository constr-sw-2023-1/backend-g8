const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");

const mock = new MockAdapter(axios);

const resourceEndpoint = "http://localhost:8084/resources/";
const resourceId = "7920e5df-ee80-417e-a9a6-2115f840014b";
const resourceData = { _id: resourceId, description: "Laboratório 310" };

mock.onGet(`${resourceEndpoint}${resourceId}`).reply((config) => {
  console.log("Resposta simulada:", { success: true, data: resourceData });
  return [200, { success: true, data: resourceData }];
});

module.exports = mock;
