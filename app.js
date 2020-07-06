
const app = {

    week: Math.ceil(new Date().getTime() / (7 * 24 * 60 * 60 * 1000))

};

function init() {

    //　获取周数（是否设置）
    let search = document.location.search;
    if(search) {
        let weekStr = search.substr(1, search.length);
        let week = parseInt(weekStr);
        if(week) { // 确保周数是个数
            app.week = week;
        }
    }

    // 显示周数
    document.querySelector("#week").innerHTML = app.week;

    // 设置+1周按钮
    document.querySelector(".week-add").href = "?"+(app.week+1);

    // 更新所有<challenge>元素
    rotate.updateAll();

}
