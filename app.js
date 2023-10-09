const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 라우터 설정
const routes = require('./router/index');

app.use('/', routes);


app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 포트에서 실행 중입니다.`);
});