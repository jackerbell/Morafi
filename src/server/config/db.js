var mysql= require('mysql')
const db=mysql.createPool({
    host:'localhost',// 로컬에서 동작
    user:'root',//sql 설치시 최초로 지정한 사용자명
    password:'*wish13241320',// 본인이 설정한 비밀번호
    database:'moviedata',// 사용할 sql 상에서의 데이터베이스
    port:3306 // sql default port
})

module.exports = db; //외부에서 호출할 수 있도록 함