const getContent = (specialty, users) => {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${specialty}</title>
</head>
<body>

  <nav>
    <a href="/">Home</a> |
    <a href="/marketing">Marketing</a> |
    <a href="/developers">Developers</a> |
    <a href="/QAs">QAs</a> |
    <a href="/ventas">Ventas</a>
  </nav>

  <hr>

  <h1>${specialty}</h1>
  <p>Número de personas: ${users.length}</p>

  <ul>
    ${users.map(user => `
      <li>
        <strong>Nombre:</strong> ${user.name}<br>
        <strong>Edad:</strong> ${user.age}<br>
        <strong>ID:</strong> ${user.id}
      </li>
    `).join("")}
  </ul>

</body>
</html>
`;
};

module.exports = getContent;
