import express from "express";
import router from './routes/postRoute.js'
const port = process.env.PORT

const app = express();
app.use(express.json())

app.use('/api/auth', router)


app.listen(port, () => {
  console.log(`server is running on PORT ${port}`)
});
