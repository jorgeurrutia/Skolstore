import express from "express";
import { dirname, join} from "path"
import { fileURLToPath} from "url"

import indexRoutes from "./routes/index.js"

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(join(__dirname,"views"))

//settings
app.set("views", join(__dirname, "views"))
app.set("view engine", "ejs")

//routes
app.use(indexRoutes)

//statis files
app.use(express.static(join(__dirname, "public")))

//listening
app.listen(3000);
console.log("Server on port", 3000);