interface ProxyObject {
  protocol?: string;
  ipAddress?: string;
  port?: string | number;
  ipAddressPort?: string;
  login?: string;
  password?: string;
  loginPassword?: string;
  loginPassFirst?: boolean;
}

function proxyProtocol(proxyObject: ProxyObject): string {
  if (proxyObject.protocol) {
    return proxyObject.protocol + '://';
  } else {
    return '';
  }
}

function proxyIpAddressPort(proxyObject: ProxyObject): string {
  if (proxyObject.ipAddressPort) {
    return proxyObject.ipAddressPort;
  } else {
    return proxyObject.ipAddress + ':' + proxyObject.port;
  }
}

function proxyLoginPasswordCheck(proxyObject: ProxyObject): boolean {
  if (
    proxyObject.loginPassword ||
    (proxyObject.login && proxyObject.password)
  ) {
    return true;
  } else {
    return false;
  }
}

function atSignPut(proxyObject: ProxyObject, put: boolean = true): string {
  if (proxyLoginPasswordCheck(proxyObject) && put) {
    return '@';
  } else {
    return '';
  }
}

function proxyLoginPassword(proxyObject: ProxyObject): string {
  if (proxyObject.loginPassword) {
    return proxyObject.loginPassword;
  } else if (proxyObject.login && proxyObject.password) {
    return proxyObject.login + ':' + proxyObject.password;
  } else {
    return '';
  }
}

function proxyToString(proxyObject: ProxyObject): string {
  if (proxyObject.loginPassFirst) {
    const proxyString =
      proxyProtocol(proxyObject) +
      proxyLoginPassword(proxyObject) +
      atSignPut(proxyObject) +
      proxyIpAddressPort(proxyObject);
    return proxyString;
  } else {
    const proxyString =
      proxyProtocol(proxyObject) +
      proxyIpAddressPort(proxyObject) +
      atSignPut(proxyObject) +
      proxyLoginPassword(proxyObject);
    return proxyString;
  }
}

module.exports = proxyToString;
export default proxyToString;
