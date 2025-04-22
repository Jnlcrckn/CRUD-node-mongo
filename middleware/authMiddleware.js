const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'Token requerido' });

    const token = authHeader.split(' ')[1];

    try {
    const decodificado = jwt.verify(token, 'secreto123');
    req.usuarioId = decodificado.id;
    next();
    } catch (err) {
    return res.status(401).json({ error: 'Token inválido o expirado' });
    }
};
