
const seasonal = {

    /**
     * 更新一个<seasonal>元素
     */
    update: function(el) {
        let x_values = el.getAttribute("x-seasonal");
        let x_offset = el.getAttribute("x-start");

        if(!x_offset || !x_values) {
            el.innerHTML = "数据丢失";
            return false;
        }

        let offset = parseInt(x_offset);
        let values = x_values.split(";");

        if(!offset) {
            el.innerHTML = "开始周错误";
            return;
        }

        let index = app.week - offset;
        if(index < 0) {
            el.innerHTML = "无数据";
        }
        else if(index >= values.length) {
            el.innerHTML = "无数据";
        }
        else {
            el.innerHTML = values[index];
        }

        return true;
    },

    /**
     * 更新所有文档内的<seasonal>元素
     */
    updateAll: function() {
        console.log("Update all <seasonal>")
        document.querySelectorAll("seasonal").forEach(el => seasonal.update(el));
    }

};
