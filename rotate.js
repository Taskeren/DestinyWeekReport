
const rotate = {

    /**
     * 更新一个<rotate>元素
     */
    update: function(el) {
        let x_rotate = el.getAttribute("x-rotate");
        if(!x_rotate) {
            el.innerHTML = "NULL";
            return false;
        }

        let cha = x_rotate.split(";");

        let index = app.week % cha.length;

        el.innerHTML = cha[index];
        return true;
    },

    /**
     * 更新所有文档内的<rotate>元素
     */
    updateAll: function() {
        console.log("Update all <rotate>");
        document.querySelectorAll("rotate").forEach(el => rotate.update(el));
    }

};
