var url = $request.url;
let obj = JSON.parse($response.body);

// 用户信息接口
if (url.indexOf("/user/getIndexUser") != -1) {
    obj.data.membershipLevel = 1;  // 会员等级
    obj.data.membershipExpirationTime = 4070880000;  // 会员过期时间
    obj.data.membershipType = "VR";  // 会员类型
    obj.data.membershipStartTime = 1672502400;  // 会员开始时间
    obj.data.membershipDuration = 4070880000;  // 会员时长
    obj.data.memberCount = 999999;  // 会员计数
    obj.data.isVip = true;  // 添加VIP标识
    obj.data.vipStatus = 1;  // VIP状态
    delete obj.data.nonMember;  // 删除非会员标记
}

// 课程详情接口
if (url.indexOf("/course/getCourseDetails") != -1) {
    obj.data.canPlay = true;  // 可以播放
    obj.data.membershipStatus = 1;  // 会员状态
    obj.data.playPermission = true;  // 播放权限
    obj.data.isVip = true;  // VIP标识
    obj.data.vipStatus = 1;  // VIP状态
    if (obj.data.courseInfo) {
        obj.data.courseInfo.canPlay = true;
        obj.data.courseInfo.playPermission = true;
    }
}

// 课程列表接口
if (url.indexOf("/course/getCoursePeriodList") != -1) {
    if (obj.data.list) {
        for (var i = 0; i < obj.data.list.length; i++) {
            obj.data.list[i].canPlay = true;
            obj.data.list[i].playPermission = true;
            obj.data.list[i].membershipStatus = 1;
            obj.data.list[i].isVip = true;
            obj.data.list[i].vipStatus = 1;
        }
    }
}

// 直播课程接口
if (url.indexOf("/v2/live/getLiveDetails") != -1) {
    obj.data.membershipLevel = 1;
    obj.data.membershipStatus = 1;
    obj.data.isVip = true;
    obj.data.vipStatus = 1;
    obj.data.playPermission = true;
}

$done({body: JSON.stringify(obj)}); 
