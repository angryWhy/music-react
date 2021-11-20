//导入path
const path=require("path");
//拼接路径
const resolve=dir=> path.resolve(__dirname,dir)
module.exports={
    webpack:{
        alias:{
            // 配置别名，src
            "@":resolve("src"),
            // 配置components别名
            "components":resolve("src/components")
        }
    } 
}