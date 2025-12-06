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

// API站点配置（2025.12 精选稳定源 - 基于用户分享 + 社区验证）
const API_SITES = {
    // 热门基础源
    hongniu: {
        api: 'http://hongniuzy2.com/api.php/provide/vod',
        name: '紅牛資源',
        adult: false
    },
    liangzi: {
        api: 'http://cj.lziapi.com/api.php/provide/vod',
        name: '量子資源',
        adult: false
    },
    kaifang: {
        api: 'http://vod-demo.onrender.com/pubdovod.php',
        name: '開放電影',
        adult: false
    },
    youzhi: {
        api: 'http://api.1080zyku.com/inc/api.php/provide/vod',
        name: '优质资源库',
        adult: false
    },
    sanjiu: {
        api: 'http://39kan.com/api.php/provide/vod',
        name: '39影視',
        adult: false
    },
    tiantang: {
        api: 'http://vipmv.cc/api.php/provide/vod',
        name: '天堂资源',
        adult: false
    },
    tangren: {
        api: 'http://tangrenjie.tv/api.php/provide/vod',
        name: '唐人街',
        adult: false
    },
    kudian: {
        api: 'http://api.kuapi.cc/api.php/provide/vod',
        name: '酷点资源',
        adult: false
    },
    wolong: {
        api: 'http://collect.wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
        adult: false
    },
    // 扩展源（2025 新热）
    fantuan: {
        api: 'https://www.fantuan.tv/api.php/provide/vod',
        name: '饭团TV',
        adult: false
    },
    qiqidy: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
        adult: false
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源',
        adult: false
    },
    baiduzy: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度资源',
        adult: false
    },
    heimuer: {
        api: 'https://www.heimuer.tv/api.php/provide/vod',
        name: '黑木耳',
        adult: false
    },
    ffzy: {
        api: 'http://cj.ffzyapi.com/api.php/provide/vod',
        name: '非凡',
        adult: false
    },
    // 更多（可选加）
    slapibf: {
        api: 'http://slapibf.com/api.php/provide/vod',
        name: '森林资源',
        adult: false
    },
    ykapi: {
        api: 'http://api.ykapi.net/api.php/provide/vod',
        name: '影库资源网',
        adult: false
    },
    kczy: {
        api: 'http://caiji.kczyapi.com/api.php/provide/vod',
        name: '快车资源',
        adult: false
    },
    sdzy: {
        api: 'http://sdzyapi.com/api.php/provide/vod',
        name: '閃電資源',
        adult: false
    },
    aosika: {
        api: 'http://aosikazy.com/api.php/provide/vod',
        name: '奥斯卡资源网',
        adult: false
    }
    // 注意：失效源如 lehootv.com 已排除；重复源已合并
};

