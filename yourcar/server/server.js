const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 5000;
const User = require("./users");

const app = express();
app.use(cors(), express.json());


const crypto = require('crypto');
async function connectToDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/pelitry", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
}

connectToDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
});
mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

app.post('/register', async (req, res) => {
    const { email, password, budget, cartype, Accomodation, driveoption, transmission, carBrands } = req.body;

    try {

          const existingUser = await User.findOne({ email });

          if (existingUser) {
              return res.status(400).json({ status: 'error', message: 'this email already exists please login.' });
          }
        const newUser = new User({
            email,
            password,
            budget,
            cartype,
            Accomodation,
            driveoption,
            transmission,
            carBrands,
        });

        
        await newUser.save();

        console.log("User registered:", newUser);
        res.json({ status: 'success' });
    } catch (error) {
        console.error("Error registering user:", error.message);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(400).json({ status: 'error', message: 'User not found. Please register first.' });
        }

        const comparePasswords = (plainTextPassword, hashedPassword) => {
            const hashA = crypto.createHash('sha256').update(plainTextPassword).digest('hex');
            const hashB = crypto.createHash('sha256').update(hashedPassword).digest('hex');
          
            return hashA === hashB;
          };
        const isPasswordValid = comparePasswords(password, existingUser.password);

        if (!isPasswordValid) {
            return res.status(400).json({ status: 'error', message: 'Invalid password.' });
        }

        console.log("User logged in:", existingUser);
        res.json({ status: 'success' });
    } catch (error) {
        console.error("Error during login:", error.message);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }

    
});


const Allcarmodel= require('../server/All_cars')
app.get('/getAllcars', async (req, res) => {
    try {
      const cardata = await Allcarmodel.find();
      res.json(cardata);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  
const Allvarmodel= require('../server/Finalcarinfo')
app.get('/carallinfo', async (req, res) => {
    try {
      const vardata = await Allvarmodel.find();
      res.json(vardata);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
const filter= require('../server/users')
app.get('/userspecs', async (req, res) => {
    try {
      const vardata = await filter.find();
      res.json(vardata);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  

