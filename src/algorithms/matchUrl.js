function domainName(url) {
  if (!url.match('://')) {
    url = `http://${url}`;
  }

  let urlObj = new URL(url);
  let domainStr = urlObj.host.split('.')[0].match('www')
    ? urlObj.host.split('.')[1]
    : urlObj.host.split('.')[0];

  return domainStr;
}
