import Express from 'express';

const app = new Express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.listen(port, function() {
   console.log('Server started on port ... ' + port);
});