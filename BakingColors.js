/**
 * @file BakingColors.js
 * @desc 属于 katebloom6 的专属色库注入脚本
 */

// 指向你同仓库下的 JSON 文件
const dataUrl = "https://raw.githubusercontent.com/katebloom6/Rewrite/main/%E7%83%98%E7%84%90%E9%A2%9C%E8%89%B2.json";

if ($request.url.indexOf("daily_color_cards") !== -1) {
    let body = $response.body;
    try {
        let obj = JSON.parse(body);
        $httpClient.get(dataUrl, function(error, response, data) {
            if (!error && data) {
                let bakingData = JSON.parse(data);
                if (obj.data && Array.isArray(obj.data)) {
                    // 将你 GitHub 仓库中的 105 个色号注入灵感流
                    obj.data = bakingData.concat(obj.data);
                }
                $done({ body: JSON.stringify(obj) });
            } else {
                $done({ body });
            }
        });
    } catch (e) {
        $done({ body });
    }
} else {
    $done({ body });
}
