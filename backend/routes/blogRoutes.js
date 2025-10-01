const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const blogs = new Blog(req.body);
    const savedBlog = await blogs.save();
    res.json(savedBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const blogs = await Blog.findById(id);
    res.json(blogs);
  } catch (err) {
    res.status(404).json({ error: "Blog not found" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Blog.findByIdAndDelete(id);
    res.json({ message: "Blog Deleted" });
  } catch (err) {
    res.status(404).json({ error: "Blog not found" });
  }
});

module.exports = router;
