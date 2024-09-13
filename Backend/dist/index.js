import app from "./app.js";
import { connectToDatabse } from "./db/connection.js";
const PORT = process.env.PORT || 5000;
connectToDatabse()
    .then(() => {
    app.listen(PORT, () => console.log("Server Open & connected to DataBase"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map