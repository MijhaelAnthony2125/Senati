const roleCheck = (requiredRoles) => {
    return (req, res, next) => {
        if (!req.user || !req.user.rol) {
            return res.status(403).json({ message: 'Acceso denegado: Rol de usuario no encontrado.' });
        }

        const userRole = req.user.rol;

        if (requiredRoles.includes(userRole)) {
            next();
        } else {
            return res.status(403).json({ message: 'Acceso prohibido. No tiene permisos suficientes.' });
        }
    };
};

module.exports = roleCheck;