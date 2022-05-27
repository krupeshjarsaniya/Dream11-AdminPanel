const express = require('express');
const router = express.Router();
const async = require('hbs/lib/async');

router.get('/', (req, res) => {
    // if (req.session.user)
    //     return res.redirect('/admin/dashboard');
    var dataObject = {
        'title': 'Dashboard'
    };
    // res.render('admin/dashboard');
    res.render('admin/dashboard', {data: dataObject});
});

router.get('/login', (req, res) => {
    var dataObject = {
        'title': 'Login'
    };
    // res.render('admin/auth/login');
    res.render('admin/auth/login', {data: dataObject});
});

router.get('/register', (req, res) => {
    var dataObject = {
        'title': 'Register'
    };
    // res.render('admin/auth/login');
    res.render('admin/auth/register', {data: dataObject});
});

router.get('/forgot-password', (req, res) => {
    var dataObject = {
        'title': 'Forgot Password'
    };
    // res.render('admin/auth/login');
    res.render('admin/auth/forgot-password', {data: dataObject});
});

router.get('/profile', (req, res) => {
    var dataObject = {
        'title': 'Profile'
    };
    res.render('admin/user/profile', {data: dataObject});
});

router.get('/notification', (req, res) => {
    var dataObject = {
        'title': 'Notification'
    };
    res.render('admin/user/notification', {data: dataObject});
});

router.get('/connection', (req, res) => {
    var dataObject = {
        'title': 'Connections'
    };
    res.render('admin/user/connection', {data: dataObject});
});

router.get('/user-list', (req, res) => {
    var dataObject = {
        'title': 'User List'
    };
    res.render('admin/user/user_list', {data: dataObject});
});


router.get('/form-layouts', (req, res) => {
    var dataObject = {
        'title': 'Form Layouts'
    };
    res.render('admin/user/form-layouts', {data: dataObject});
});


router.get('/forms-input-groups', (req, res) => {
    var dataObject = {
        'title': 'Forms-input-groups'
    };
    res.render('admin/user/forms-input-groups', {data: dataObject});
});


router.get('/tables-basic', (req, res) => {
    var dataObject = {
        'title': 'tables-basic'
    };
    res.render('admin/user/tables-basic', {data: dataObject});
});




router.get('/error', (req, res) => {
    // if (req.session.user)
    //     return res.redirect('/admin/dashboard');
    var dataObject = {
        'title': 'Error-Pages'
    };
    // res.render('admin/dashboard');
    res.render('admin/page_not_found', {data: dataObject});
});
module.exports = router;
