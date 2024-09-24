const express = require('express') // impor modul express
const app = express()// inisialisasi express
const port = 3000 // port

// route /
app.get('/', (req, res) => {
    // res.send('Hello');
    res.sendFile(__dirname + '/home.html');
});

// route /about
app.get('/about', (req, res) => {
    // res.send('About Us');
    res.sendFile(__dirname + '/about.html');
});

// route /contact
app.get('/contact', (req, res) => {
    // res.send('Contact Us');
    res.sendFile(__dirname + '/contact.html');
});

// route /mahasiswa
app.get('/mahasiswa', (req, res) => {
    res.json({
        'status' : 'success',
        'message' : 'Data Mahasiswa',
        'data' : [{npm : 2226240001, nama : 'ahmad'},
            {npm : 2226240002, nama : 'ahmad 2'},
            {npm : 2226240003, nama : 'ahmad 3'}]
    })
});

// route /dosen
app.get('/dosen', (req, res) => {
    res.json({
        'status' : 'success',
        'message' : 'data dosen',
        'data' : [
            {
                prodi : 'Sistem Informasi', 
                nama : ['Iis', 'Faris', 'Dafid']
            },
            {
                prodi : 'Informatika', 
                nama : ['Derry', 'Siska' , 'Yohannes']
            },
        ]
    })
});
// handle route yang tidak terdaftar
app.use('/', (req, res) => {
    req.send('<h1>404 Not Found</h1>');
});

// jalankan server
app.listen(port, () => {
    console.log(`Server dapat di akses di http://localhost:${port}`);
});