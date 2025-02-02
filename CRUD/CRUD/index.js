 import express from 'express';
 import fs from "fs";
 import bodyParser from "body-parser";


 const app = express();
 app.use(bodyParser.json());

 const readData = () => {
    try {
        const data = fs.readFileSync("./db.json");
        return JSON.parse(data);
    } catch(error){
        console.log(error);
    }
 };

const writeData = (data) => {
    try {
        fs.writeFileSync("./db.json", JSON.stringify(data))
    } catch(error){
        console.log(error);
    }
};

 app.get("/", (req, res) =>{
    res.send("welcome to my first API with Node js")
 });

//BUSCAR TODAS LAS TAREAS
 app.get("/tasks", (req, res) => {
    const data = readData();
    res.json(data.tasks);
 });

  //AGREGAR TAREA
  app.post("/tasks", (req, res) => {
    const data = readData();
    const body = req.body;
    const newtasks = {
        id: data.tasks.length + 1,
        ...body,
    };
    data.tasks.push(newtasks);
    writeData(data);
    res.json(newtasks);
 });

 //CANTIDAD TOTAL DE TAREAS
 app.get("/tasks/count", (req, res) => {
    const data = readData();
    console.log("Data cargada:", data); // 🛠️ Verifica la estructura
    
    if (!data || !Array.isArray(data.tasks)) {
        return res.status(500).json({ error: "Error al cargar las tareas" });
    }

    res.json({ totalTasks: data.tasks.length });
});

//TAREA MAS RECIENTE
app.get("/tasks/latest", (req, res) => {
    const data = readData();
    const latestTask = data.tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
    res.json(latestTask);
});

//TAREA MAS ANTIGUA
app.get("/tasks/oldest", (req, res) => {
    const data = readData();
    const oldestTask = data.tasks.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))[0];
    res.json(oldestTask);
});

//CANTIDAD DE TAREAS COMPLETADAS Y PENDIENTES
app.get("/tasks/status", (req, res) => {
    const data = readData();
    const completedTasks = data.tasks.filter(task => task.completed).length;
    const pendingTasks = data.tasks.filter(task => !task.completed).length;
    res.json({ completedTasks, pendingTasks });
});


 //BUSCAR TAREA POR ID
 app.get("/tasks/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const tasks = data.tasks.find((tasks) => tasks.id === id);
    res.json(tasks);
 });



 //EDITAR CIERTOS CAMPOS DE UNA TAREA
 app.put("/tasks/:id", (req, res) => {
    const data = readData();
    const body = req.body;
    const id = parseInt(req.params.id);
    const tasksIndex = data.tasks.findIndex((tasks) => tasks.id === id);
    data.tasks[tasksIndex] = {
        ...data.tasks[tasksIndex],
        ...body,
    };
    writeData(data);
    res.json({message: "Tasks updated successfully"});
 });

//BORRAR UNA TAREA
app.delete("/tasks/:id", (req,res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const tasksIndex = data.tasks.findIndex((tasks) => tasks.id === id);
    data.tasks.splice(tasksIndex, 1);
    writeData(data);
    res.json({message: "Tasks deleted successfully"});
});




 //TAREA MAS RECIENTE (FECHA DE CREACION MAS RECIENTE)



 //TAREA MAS ANTIGUA (FEHCA DE CREACION MAS ANTIGUA)

 //CANTIDAD DE TAREAS COMPLETADAS Y PENDEIENTES

 app.listen(3000,()=> {
    console.log('server listening on port 3000');
 });
