const URL_BASE = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts";

const ApiService = {
  ListContacts: () => {
    return fetch(`${URL_BASE}`).then((res) => res.json());
  },
};

export default ApiService;
