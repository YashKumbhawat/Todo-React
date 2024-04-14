require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to the database
;(async () => {
    try {
        await mongoose.connect("mongodb+srv://kid:yash12345@todo.yzplnl9.mongodb.net/");
        console.log("Connected to the database");

        app.listen(process.env.PORT || 3000, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error("DB connection error:", error);
    }
})();

// Define the schema for the todos collection
const todoSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
        default: "",
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default: false,
    }
}, { timestamps: true });

const Todo = mongoose.model("Todo", todoSchema);

// Create routes

// Endpoint to add a new todo
app.post("/", async (req, res) => {
    try {
        const { id, message, isCompleted } = req.body;
        const todo = new Todo({
            id: id,
            message: message,
            isCompleted: isCompleted
        });
        await todo.save();
        res.status(200).send(`Your Data is Added`);
    } catch (error) {
        console.error("Error adding todo:", error);
        res.status(500).send("Error adding todo");
    }
});

// Endpoint to get all todos
app.get("/", async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        console.error("Error getting todos:", error);
        res.status(500).send("Error getting todos");
    }
});


// Route to Make changes in Todo:

app.put("/", async (req,res)=>{
    try {
        const {id,isCompleted} = req.body;

        const updatedTodo = await Todo.findOneAndUpdate(
            { id: id },
            { isCompleted: isCompleted },
            { new: true }
        )

        if (!updatedTodo) {
            return res.status(404).send("Todo not found");
        }

        res.status(200).json(updatedTodo);
        
    } catch (error) {
        console.log(`Not able to update the Todo`)
        res.status(500).send("Error while updating Todos")
    }
})


// Route to Delete the Todos

app.delete("/", async (req,res)=>{
    try {
        const id = req.body;
        const deletedTodo = await Todo.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).send("Todo not found");
        }

        res.status(200).json({ message: "Todo deleted successfully", deletedTodo });
    } catch (error) {
        console.log(`Not able to delete the Todo`)
        res.status(500).send("Error while deleting Todos")
    }
})