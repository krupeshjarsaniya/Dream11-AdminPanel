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

router.get('/without-menu', (req, res) => {
    var dataObject = {
        'title': 'without-menu'
    };
    res.render('admin/user/without-menu', {data: dataObject});
});

router.get('/without-navbar', (req, res) => {
    var dataObject = {
        'title': 'without-navbar'
    };
    res.render('admin/user/without-navbar', {data: dataObject});
});

router.get('/container', (req, res) => {
    var dataObject = {
        'title': 'Container'
    };
    res.render('admin/user/container', {data: dataObject});
});

router.get('/fluid', (req, res) => {
    var dataObject = {
        'title': 'Fluid'
    };
    res.render('admin/user/fluid', {data: dataObject});
});

router.get('/blank', (req, res) => {
    var dataObject = {
        'title': 'Blank'
    };
    res.render('admin/user/blank', {data: dataObject});
});

router.get('/login', (req, res) => {
    var dataObject = {
        'title': 'Login'
    };
    res.render('admin/auth/login', {data: dataObject});
});

router.get('/register', (req, res) => {
    var dataObject = {
        'title': 'Register'
    };
    res.render('admin/auth/register', {data: dataObject});
});

router.get('/forgot-password', (req, res) => {
    var dataObject = {
        'title': 'Forgot Password'
    };
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


router.get('/form-layouts-horizontal', (req, res) => {
    var dataObject = {
        'title': 'Form Layouts Horizontal'
    };
    res.render('admin/user/form-layouts-horizontal', {data: dataObject});
});

router.get('/form-layouts-vertical', (req, res) => {
    var dataObject = {
        'title': 'Form Layouts Vertical'
    };
    res.render('admin/user/form-layouts-vertical', {data: dataObject});
});

router.get('/forms-input-groups', (req, res) => {
    var dataObject = {
        'title': 'Forms-input-groups'
    };
    res.render('admin/user/forms-input-groups', {data: dataObject});
});

router.get('/forms-basic-inputs', (req, res) => {
    var dataObject = {
        'title': 'Forms-basic-inputs'
    };
    res.render('admin/user/forms-basic-inputs', {data: dataObject});
});

router.get('/tables-basic', (req, res) => {
    var dataObject = {
        'title': 'tables-basic'
    };
    res.render('admin/user/tables-basic', {data: dataObject});
});

router.get('/under-maintenance', (req, res) => {
    var dataObject = {
        'title': 'under-maintenance'
    };
    res.render('admin/user/under-maintenance', {data: dataObject});
});

router.get('/cards', (req, res) => {
    var dataObject = {
        'title': 'cards'
    };
    res.render('admin/user/cards', {data: dataObject});
});

router.get('/perfect-scrollbar', (req, res) => {
    var dataObject = {
        'title': 'perfect-scrollbar'
    };
    res.render('admin/user/perfect-scrollbar', {data: dataObject});
});

router.get('/text-divider', (req, res) => {
    var dataObject = {
        'title': 'text-divider'
    };
    res.render('admin/user/text-divider', {data: dataObject});
});

router.get('/boxIcons', (req, res) => {
    var dataObject = {
        'title': 'boxIcons'
    };
    res.render('admin/user/boxIcons', {data: dataObject});
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
