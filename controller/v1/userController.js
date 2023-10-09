// userController.js
const users = [
    { id: 1, name: '사용자1' },
    { id: 2, name: '사용자2' },
  ];

const jwt = require('../../utils/jwt-util');
const redisClient = require('../../utils/redis');
  
function getAllUsers(req, res) {
    res.json(users);
}
  
function getUserById(req, res) {
    const userId = parseInt(req.params.id);
    const user = users.find((user) => user.id === userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('사용자를 찾을 수 없습니다.');
    }
}

function postUserByID(req, res) {
    const userId = parseInt(req.params.id);
    const user = users.find((user) => user.id === userId);
    if (user) {
        const accessToken = jwt.sign(user);
        const refreshToken = jwt.refresh();
        
        // 발급한 refresh token을 redis에 key를 user의 id로 하여 저장합니다.
        // redisClient.set(user.id, refreshToken);

        res.status(200).send({ // client에게 토큰 모두를 반환합니다.
            ok: true,
            data: {
              accessToken,
              refreshToken,
            },
          });
    } else {
      res.status(404).send('사용자를 찾을 수 없습니다.');
    }
}
  
module.exports = {
    getAllUsers,
    getUserById,
    postUserByID
};