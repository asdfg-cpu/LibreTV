// 全局常量配置
const PROXY_URL = '/proxy/';    
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  
    verificationTTL: 90 * 24 * 60 * 60 * 1000  
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    }
};

function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;

// 聚合搜索等其他配置……（你原来的全部保留）
const AGGREGATED_SEARCH_CONFIG = { enabled: true, timeout: 8000, maxResults: 10000, parallelRequests: true, showSourceBadges: true };
const API_CONFIG = { /* 你原来的内容 */ };
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;
const CUSTOM_PLAYER_URL = 'player.html';
const PLAYER_CONFIG = { autoplay: true, allowFullscreen: true, width: '100%', height: '600', timeout: 15000, filterAds: true, autoPlayNext: true, adFilteringEnabled: true, adFilteringStorage: 'adFilteringEnabled' };
const ERROR_MESSAGES = { /* 你原来的内容 */ };
const SECURITY_CONFIG = { enableXSSProtection: true, sanitizeUrls: true, maxQueryLength: 100 };
const CUSTOM_API_CONFIG = { separator: ',', maxSources: 5, testTimeout: 5000, namePrefix: 'Custom-', validateUrl: true, cacheResults: true, cacheExpiry: 5184000000, adultPropName: 'isAdult' };
const HIDE_BUILTIN_ADULT_APIS = false;

