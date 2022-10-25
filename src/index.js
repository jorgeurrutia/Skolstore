import express from "express";
import { dirname, join} from "path"
import { fileURLToPath} from "url"
import  logger  from "morgan"

import indexRoutes from "./routes/index.js"

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))

//settings
app.set("views", join(__dirname, "views"))
app.set("view engine", "ejs")
app.set('port', process.env.PORT || 3000);

//routes
app.use(indexRoutes)


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//statis files
app.use(express.static(join(__dirname, "public")))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  //export default app;

//listening
app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
});
