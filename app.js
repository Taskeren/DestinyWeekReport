
const app = {

    week: 9999

};

/**
 * 获取周数
 */
function updateWeekNumber() {
    //　获取周数（是否设置）
    let search = document.location.search;
    if(search) {
        let weekStr = search.substr(1, search.length);
        let week = parseInt(weekStr);
        if(week) { // 确保周数是个数
            app.week = week;
        }
        else {
            app.week = Math.ceil(new Date().getTime() / (7 * 24 * 60 * 60 * 1000));
        }
    }
    else {
        app.week = Math.ceil(new Date().getTime() / (7 * 24 * 60 * 60 * 1000));
    }

    console.log("Automatic-Week", app.week);
}

/**
 * 重算周数，用于跳转回本周
 */
function resetWeekNumber() {
    return app.week = Math.ceil(new Date().getTime() / (7 * 24 * 60 * 60 * 1000));
}

/**
 * 更新组件
 */
function updateComponents() {
    // 显示周数
    document.querySelector("#week").innerHTML = app.week;

    // 设置+1周按钮
    document.querySelector(".week-add").onclick = ()=>{
        changeWeek(app.week+1);
    };

    // 更新所有<challenge>元素
    rotate.updateAll();

    // 更新所有<seasonal>元素
    seasonal.updateAll();
}

function init() {
    updateWeekNumber();
    updateComponents();
}

/**
 * 更换周数
 */
function changeWeek(week) {
    console.log("Set Week", week);
    app.week = week;
    history.pushState(null, "", "?"+week);
    updateComponents();
}
