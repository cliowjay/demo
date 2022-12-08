const express = require('express');
const app = express();
const route = express.Router();
const ipMgr = require('./ipMgr');
console.log(JSON.stringify(ipMgr));

const getMenu = () => {
    const links = [
        {node : '/', head : '首頁'}, 
        {node : '/store', head : '商店'}, 
        {node : '/members', head : '會員'}, 
    ];
    let menu = '';
    links.map((item) => {
        menu = `${menu}<a href="${item.node}">${item.head}</a>
        <p>`;
    });
    return menu;
}

route.get('/', (req, res) => {
    const html = `IP:${JSON.stringify(ipMgr)}<h1>Web App首頁</h1>
    ${getMenu()}
    `;

    res.status(200).send(html);
});

route.get('/store', (req, res) => {
    const html = `<h1>Web App商店</h1>
    ${getMenu()}
    `;

    res.status(200).send(html);
});

route.get('/members', (req, res) => {
    const html = `<h1>Web App會員</h1>
    ${getMenu()}
    `;

    res.status(200).send(html);
});

app.use(route);
app.listen(80, () => {
    console.log('app is running');
})
