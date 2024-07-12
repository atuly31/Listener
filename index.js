import express from "express"
import axios from "axios";

const app = express();
const port = 3000;
app.use(express.static('public'));

app.get('',async(req,res) =>{
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/random")
        res.render("index.ejs",{content:result.data});
    } catch (error) {
        res.status(404).send(error.result.data);
    }
})


app.listen(port ,()=>{
     console.log(`Server is listening to ${port}`)
})
