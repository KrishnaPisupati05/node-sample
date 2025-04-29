const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // ✅ Use Azure-assigned port

app.get('/', (req, res) => {
    res.send('Hello, Azure User!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
