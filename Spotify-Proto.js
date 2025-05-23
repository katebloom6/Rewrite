// ==Spotify Proto 解锁==
// 解锁部分 Premium 功能（bootstrap & customize）
let body = $response.body;
let url = $request.url;

if (url.includes('customize')) {
    let obj = JSON.parse(body);
    obj.ads = {};
    obj.policies = {
        audio: {
            ad: false,
            shuffle: false,
            skip: true,
            repeat: true,
            high_quality: true
        }
    };
    body = JSON.stringify(obj);
}

$done({ body });
