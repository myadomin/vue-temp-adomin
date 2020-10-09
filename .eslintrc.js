module.exports = {
  // eslint找当前配置文件不再往父级查找
  "root": true, 
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "extends": [
    "plugin:vue/essential", 
    "standard"   
  ],  
  "plugins": [
    "html",
    "vue"
  ],
  "rules": {
    // 关闭统一换行符，"\n" unix(for LF) and "\r\n" for windows(CRLF)，默认unix
    "linebreak-style": "off",
    // 某些变量未引用不报错
    "no-unused-vars": "off",
    "no-tabs": "off"
  }
}