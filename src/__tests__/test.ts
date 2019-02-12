import proxyToString from '../index';

describe('loginPassFirst: false or null', () => {
  test('all', () => {
    expect(
      proxyToString({
        protocol: 'https',
        ipAddress: '123.123.2.42',
        port: '8080',
        login: 'superLogin',
        password: 'superPassword'
      })
    ).toBe('https://123.123.2.42:8080@superLogin:superPassword');
  });
  test('all localhost', () => {
    expect(
      proxyToString({
        protocol: 'https',
        ipAddress: 'localhost',
        port: 8080,
        login: 'superLogin',
        password: 'superPassword'
      })
    ).toBe('https://localhost:8080@superLogin:superPassword');
  });
  test('no login and pass', () => {
    expect(
      proxyToString({
        protocol: 'https',
        ipAddress: '123.123.2.42',
        port: 8080
      })
    ).toBe('https://123.123.2.42:8080');
  });
  test('no protocol', () => {
    expect(
      proxyToString({
        ipAddress: '123.123.2.42',
        port: 8080,
        login: 'superLogin',
        password: 'superPassword'
      })
    ).toBe('123.123.2.42:8080@superLogin:superPassword');
  });
  test('protocol, loginPassword and ipAddressPort', () => {
    expect(
      proxyToString({
        protocol: 'https',
        loginPassword: 'superLogin:superPassword',
        ipAddressPort: '123.123.2.42:8080'
      })
    ).toBe('https://123.123.2.42:8080@superLogin:superPassword');
  });
  test('loginPassword and ipAddressPort', () => {
    expect(
      proxyToString({
        loginPassword: 'superLogin:superPassword',
        ipAddressPort: '123.123.2.42:8080'
      })
    ).toBe('123.123.2.42:8080@superLogin:superPassword');
  });
  test('all all', () => {
    expect(
      proxyToString({
        protocol: 'http',
        loginPassword: 'superLogin:superPassword',
        ipAddressPort: '123.123.2.42:8080',
        ipAddress: '123.123.2.42',
        port: 8080,
        login: 'superLogin',
        password: 'superPassword'
      })
    ).toBe('http://123.123.2.42:8080@superLogin:superPassword');
  });
});

describe('loginPassFirst: true', () => {
  test('all', () => {
    expect(
      proxyToString({
        protocol: 'https',
        ipAddress: '123.123.2.42',
        port: '8080',
        login: 'superLogin',
        password: 'superPassword',
        loginPassFirst: true
      })
    ).toBe('https://superLogin:superPassword@123.123.2.42:8080');
  });
  test('all localhost', () => {
    expect(
      proxyToString({
        protocol: 'https',
        ipAddress: 'localhost',
        port: 8080,
        login: 'superLogin',
        password: 'superPassword',
        loginPassFirst: true
      })
    ).toBe('https://superLogin:superPassword@localhost:8080');
  });
  test('no login and pass', () => {
    expect(
      proxyToString({
        protocol: 'https',
        ipAddress: '123.123.2.42',
        port: 8080,
        loginPassFirst: true
      })
    ).toBe('https://123.123.2.42:8080');
  });
  test('no protocol', () => {
    expect(
      proxyToString({
        ipAddress: '123.123.2.42',
        port: 8080,
        login: 'superLogin',
        password: 'superPassword',
        loginPassFirst: true
      })
    ).toBe('superLogin:superPassword@123.123.2.42:8080');
  });
  test('protocol, loginPassword and ipAddressPort', () => {
    expect(
      proxyToString({
        protocol: 'https',
        loginPassword: 'superLogin:superPassword',
        ipAddressPort: '123.123.2.42:8080',
        loginPassFirst: true
      })
    ).toBe('https://superLogin:superPassword@123.123.2.42:8080');
  });
  test('loginPassword and ipAddressPort', () => {
    expect(
      proxyToString({
        loginPassword: 'superLogin:superPassword',
        ipAddressPort: '123.123.2.42:8080',
        loginPassFirst: true
      })
    ).toBe('superLogin:superPassword@123.123.2.42:8080');
  });
  test('all all', () => {
    expect(
      proxyToString({
        protocol: 'http',
        loginPassword: 'superLogin:superPassword',
        ipAddressPort: '123.123.2.42:8080',
        ipAddress: '123.123.2.42',
        port: 8080,
        login: 'superLogin',
        password: 'superPassword',
        loginPassFirst: true
      })
    ).toBe('http://superLogin:superPassword@123.123.2.42:8080');
  });
});
