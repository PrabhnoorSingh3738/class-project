const movieModel = require("../model/movieSchema");
// const movieService = require("../services/movieServices");

// Read operation for movies
app.get("/movies", async (req, res) => {
    try {
      const data = await movieModel.find({});
      res.json({ success: true, data: data });
    } catch (err) {
      res.status(500).send({ success: false, message: "Error fetching data" });
    }
  });
  
  // Create operation for movies
  app.post('/movies/create', async (req, res) => {
    console.log(req.body);
    const data = new movieModel(req.body);
    await data.save();
    res.send({ success: true, message: "Data saved successfully" });
  });
  
  // Update operation for movies
  app.put('/movies/update', async (req, res) => {
    console.log(req.body);
    const { movieId, ...rest } = req.body;
  
    try {
      const updatedMovie = await movieModel.findOneAndUpdate(
        { _id: movieId },
        { $set: rest },
        { new: true }
      );
  
      res.json({ success: true, message: "Data updated successfully", updatedMovie });
    } catch (err) {
      res.status(500).send({ success: false, message: "Error updating data" });
    }
  });
  
  // delete
  app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id; // Correct parameter name
  
    console.log(id);
  
    try {
      const data = await userModel.deleteOne({ _id: id });
      res.send({ success: true, message: "Data deleted successfully" });
    } catch (error) {
      res.status(500).send({ success: false, message: "Error deleting data" });
    }
  });
  
  