const base = {
    get() {
        return {
            url : "http://localhost:8080/xueshengsushebaoxiu/",
            name: "xueshengsushebaoxiu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xueshengsushebaoxiu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "学生宿舍设备报修管理系统"
        } 
    }
}
export default base
