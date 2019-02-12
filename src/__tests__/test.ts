import proxyToString from '../index';

describe('loginPassFirst: false or null', () => {
  test('all', () => {
    expect(
      proxyToString({
        protocol: 'https',
        ipAddress: '123.123.2.42',
        port: 8080,
        login: 'superLogin',
        password: 'superPassword'
      })
    ).toBe('https://123.123.2.42:8080@superLogin:superPassword');
  });
});

describe('loginPassFirst: true', () => {
  test('all', () => {
    expect(
      proxyToString({
        protocol: 'https',
        ipAddress: '123.123.2.42',
        port: 8080,
        login: 'superLogin',
        password: 'superPassword',
        loginPassFirst: true
      })
    ).toBe('https://superLogin:superPassword@123.123.2.42:8080');
  });
});
