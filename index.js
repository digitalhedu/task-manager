const express = require("express");
const body = require("body-parser");
const methodOverride = require("method-override");

const app = express();

app.use(body.urlencoded({
    extended: true
}));

app.use(methodOverride('_method'));

app.listen(3000);

app.get("/", function (req, res) {
    const tasks = [{
            "id": 1,
            "user": 1,
            "status": 1,
            "title": "New Task"
        },
        {
            "id": 2,
            "user": 2,
            "status": 1,
            "title": "Write Coding"
        }
    ];
    const users = [{
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz"
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv"
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net"
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org"
        }
    ];
    const status = [{
            "id": 1,
            "label": "In Progress",
            "color": "warning"
        },
        {
            "id": 2,
            "label": "New",
            "color": "primary"
        },
        {
            "id": 3,
            "label": "Done",
            "color": "success"
        },
        {
            "id": 4,
            "label": "Error",
            "color": "danger"
        }
    ];

    let list =[];

    tasks.forEach(item => {
        item.user = users.find(one => one.id == item.user);
        item.status = status.find(one => one.id == item.status);
        list.push(item)
    });

    return res.send(JSON.parse(JSON.stringify(list)));

});


app.get("/:id", function (req, res) {
    const tasks = [{
        "id": 1,
        "user": 1,
        "status": 1,
        "title": "New Task"
    },
    {
        "id": 2,
        "user": 2,
        "status": 1,
        "title": "Write Coding"
    }
    ];
    const users = [{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv"
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net"
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org"
    }
    ];
    const status = [{
        "id": 1,
        "label": "In Progress",
        "color": "warning"
    },
    {
        "id": 2,
        "label": "New",
        "color": "primary"
    },
    {
        "id": 3,
        "label": "Done",
        "color": "success"
    },
    {
        "id": 4,
        "label": "Error",
        "color": "danger"
    }
    ];
    let task = tasks.find(item => item.id == req.params.id);
    if (task) {
        
        task.user = users.find(item => item.id == task.user);
        task.status = status.find(item => item.id == task.status);
        return res.send(task);
    }
    return res.status(400).send(
        {
            "msg":"No se encontro el recurso"
        }
    )
    
})