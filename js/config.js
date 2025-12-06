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

// ====================== 新增：彻底干掉全屏底部细进度条（2025终极版）======================
document.addEventListener('DOMContentLoaded', () => {
    // 每当有新节点加入页面时（DPlayer 是动态创建的）
    const killProgressBar = () => {
        const bars = document.querySelectorAll(`
            .dplayer-controller,
            .dplayer-bar-wrap,
            .dplayer-bar,
            .dplayer-controller-mask,
            .dplayer-bar-time,
            .dplayer-ptime,
            .dplayer-fulllive .dplayer-bar-wrap,
            .dplayer-full .dplayer-bar-wrap
        `);
        bars.forEach(el => {
            el.style.cssText += 'height:0!important;min-height:0!important;opacity:0!important;overflow:hidden!important;pointer-events:none!important;display:none!important;';
        });
    };

    // 立即执行一次
    killProgressBar();

    // 持续监听（DPlayer 全屏切换时会重新生成）
    const observer = new MutationObserver(killProgressBar);
    observer.observe(document.body, { childList: true, subtree: true });

    // 全屏切换时再强制杀一次（双保险）
    document.addEventListener('fullscreenchange', () => {
        setTimeout(killProgressBar, 100);
        setTimeout(killProgressBar, 500);
    });
});
// ====================================================================================
