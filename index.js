const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build', 'index.html'));
  });

app.listen(port, () => console.log(`Listening on port ${port}...`));