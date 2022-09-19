export default (req, res) => {
  if (req.method === 'GET') {
    // const { userId } = req.query
    res.status(200).json({
      username: 'Usuario',
      userlastname: 'pruebas',
      useremail: 'user@ejemplo.com',
      docIdentification: '1700000001',
      profile: 'Administrador'
    })
  }
}
