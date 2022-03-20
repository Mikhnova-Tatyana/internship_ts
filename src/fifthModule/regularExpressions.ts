function checkIsPhoneNumber(phoneNumber: string): boolean {
  return /\+\d{2}\(\d{3}\)\d{3}(-\d{2}){2}/.test(phoneNumber);
}

function checkIsEmail(email: string): boolean {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email);
}

function checkIsSite(site: string): boolean {
  return /^https?\:\/\/(\w+\.?)+$/.test(site);
}

function checkIsValidPassword (password: string): boolean {
  return /^[a-zA-Z0-9_]{6,25}$/.test(password);
}

function checkIpv4IsValid(ipv4String: string): boolean {
  let pattern: RegExp = /^(([01]?\d\d?|2[0-4]\d|25[0-5])\.){3}([01]?\d\d?|2[0-4]\d|25[0-5])$/;
  return pattern.test(ipv4String);
}