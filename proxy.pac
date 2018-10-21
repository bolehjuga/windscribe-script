function FindProxyForURL(url, host) {
                    if (isPlainHostName(host) ||  shExpMatch(host, "*.local") || shExpMatch(host, "*.int") || shExpMatch(url, "*://api.windscribe.com/*"))
                        return "DIRECT";
                
                    var lanIps = /(^127.)|(^192.168.)|(^10.)|(^172.1[6-9].)|(^172.2[0-9].)|(^172.3[0-1].)/;
                    if(lanIps.test(host))
                        return "DIRECT";
                
                
                    if (url.substring(0, 5) == 'http:' || url.substring(0, 6) == 'https:' || url.substring(0, 4) == 'ftp:' || url.substring(0, 3) == 'ws:') {
                        return "HTTPS ext-start.windscribe.com";
                    }
                
                    return 'DIRECT';
                }
