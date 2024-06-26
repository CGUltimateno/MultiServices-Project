// const express = require('express');
// const UserCtrl = require('../controllers/user-ctrl');
// const router = express.Router();

// router.post('/user/auth', UserCtrl.checkUserAuth);
// router.get('/', UserCtrl.checkServiceRunning);

// module.exports = router;
const express = require('express');
const UserCtrl = require('../controllers/user-ctrl');
const router = express.Router();

router.post('/user/auth', UserCtrl.checkUserAuth);
router.post('/user/register', UserCtrl.registerUser); // Added route for user registration
router.get('/', UserCtrl.checkServiceRunning);

module.exports = router;
