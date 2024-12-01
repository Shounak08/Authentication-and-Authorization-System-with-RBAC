const rbac = (permission) => {
    return (req, res, next) => {
      const { roles } = req.user;
  
      const hasPermission = roles.some((role) => role.permissions.includes(permission));
      if (!hasPermission) return res.status(403).json({ message: 'Forbidden' });
  
      next();
    };
  };
  
  module.exports = rbac;
  