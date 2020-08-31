const { RestApiError } = require('../../../lib/error');
const PraasAPI = require('../../../lib/praas');

function ConduitsAccessToken({ debug = false }) {
  async function requestAccessToken(credentials) {
    if (debug) {
      console.log('conduits-access-token: ', credentials);
    }
    const { email, password } = credentials;
    if (!email || !password) {
      throw new RestApiError(500, {
        email: 'required',
        password: 'required',
        error: 'INVALID_CREDENTIALS',
      });
    }

    const data = await PraasAPI.user.login({
      user: {
        email,
        password,
      },
    });

    return data;
  }

  return { requestAccessToken };
}

module.exports = { ConduitsAccessToken };
