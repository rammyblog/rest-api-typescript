export default {
  port: 1337,
  dbUri: 'mongodb://localhost:27017/rest-api-tut',
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  publicKey: `-----BEGIN RSA PUBLIC KEY-----
  MEgCQQC3Lz+NNaQ2Xv576rtHyEH6P3yEIqEoJOd7wtXK7OMnClRQ2z2Cgkl6rL2b
  KiSy7fi4aCymvd5m8oVMmrMZrB2TAgMBAAE=
  -----END RSA PUBLIC KEY-----`,
  privateKey: `ghjbjdfghgfhnbxcvfhgfhkgghffhhh`,
};
