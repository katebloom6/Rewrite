/**
 * @file BakingColors.js
 * @desc 属于 katebloom6 的专属色库注入脚本
 */

// 链接已确认对应你仓库中的英文文件名 BakingColors.json
const dataUrl = "https://raw.githubusercontent.com/katebloom6/Rewrite/main/BakingColors.json";

if ($request.url.indexOf("daily_color_cards") !== -1) {
    let body = $response.body;
    try {
        let obj = JSON.parse(body);
        $httpClient.get(dataUrl, function(error, response, data) {
            if (!error && data) {
                let bakingData = JSON.parse(data);
                if (obj.data && Array.isArray(obj.data)) {
                    // 将你仓库中的 105 个色号注入灵感流最前方
                    obj.data = bakingData.concat(obj.data);
                }
                $done({ body: JSON.stringify(obj) });
            } else {
                // 如果获取失败，返回原数据防止 App 报错
                $done({ body });
            }
        });
    } catch (e) {
        $done({ body });
    }
} else {
    $done({ body });
}
