const express = require('express')


const router = express.Router();

router.use("/users", userRouter);
router.use("/users", accountRouter);

module.exports = router;
// api/v1/users