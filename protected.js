const express = require('express');
const authenticate = require('../middleware/auth');
const rbac = require('../middleware/rbac');
const router = express.Router();

router.get('/view', authenticate, rbac(['READ']), (req, res) => {
  res.json({ message: 'This is a viewable resource' });
});

router.post('/create', authenticate, rbac(['CREATE']), (req, res) => {
  res.json({ message: 'Resource created successfully' });
});

router.put('/edit', authenticate, rbac(['UPDATE']), (req, res) => {
  res.json({ message: 'Resource updated successfully' });
});

router.delete('/delete', authenticate, rbac(['DELETE']), (req, res) => {
  res.json({ message: 'Resource deleted successfully' });
});

module.exports = router;
