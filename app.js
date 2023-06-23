const express = require("express")
const collection = require("./mongoDB")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await collection.findOne({ email: email,password:password});

    if (user) {
      if (user.password === password) {
        res.json("exist"); // Valid password
      } else {
        res.json("notexist"); // Invalid password
      }
    } else {
      res.json("notexist"); // User does not exist
    }
  } catch (e) {
    res.json("fail");
  }
});

async function getData() {
  try {
    await mongoose.connect("mongodb+srv://junasnazarito:gutib04@cluster0.hogzp7v.mongodb.net/user");
    const data = await collection.find();
    return data;
  } catch (error) {
    console.error("Error retrieving data from MongoDB:", error);
    return [];
  } finally {
    mongoose.connection.close();
  }
}

// Route to render the page with the data
app.get("/", async (req, res) => {
  const data = await getData();
  res.render("index", { data });
});


app.post("/signup", async (req, res) => {
  const { email, password, fullName, phoneNumber, rank } = req.body

  const data = {
    email: email,
    password: password,
    fullName: fullName,
    phoneNumber:phoneNumber,
    rank: rank
  }

  try {
    const check = await collection.findOne({ email: email,password:password})

    if (check) {
      res.json("exist")
    }
    else {
      res.json("notexist")
      await collection.insertMany([data])
    }

  }
  catch (e) {
    res.json("fail")
  }

})

app.listen(8000, () => {
  console.log("port connected");
})

app.delete("/delete/:email", async (req, res) => {
  try {
    const { email } = req.params;

    const deletedR = await collection.findOneAndDelete({ email: email });

    if (!deletedR) {
      return res.status(404).send("Record not found");
    }

    res.send(deletedR);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/update/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const { newPassword } = req.body;

    const changePass= await collection.findOneAndUpdate(
      { email: email },
      { $set: { password: newPassword } },
      { returnOriginal: false }
    );

    res.send(changePass);
  } catch (error) {
    console.error(error);
    res.status(500).send("ERROR OCCURRED");
  }
});

app.get('/', cors(), async (req, res) => {
  try {
    const data = await collection.find();
    res.json(data);
  } catch (error) {
    console.error('Error retrieving data from MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})