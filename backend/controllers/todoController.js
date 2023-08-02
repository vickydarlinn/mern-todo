const Todo = require("../models/todoModel");
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      message: "successful",
      data: todos,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message || error,
    });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({
      message: "created successfully",
      data: todo,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message || error,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "created successfully",
      data: todo,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message || error,
    });
  }
};
exports.getTodo = (req, res) => {
  res.send("get the specific book");
};
exports.updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "updated successfully",
      data: updatedTodo,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message || error,
    });
  }
};
