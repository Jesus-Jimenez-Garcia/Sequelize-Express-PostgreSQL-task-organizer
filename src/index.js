import app from "./app.js";
import 'dotenv/config'
import { sequelize } from "./database/database.js";

import "./models/Project.js";
import './models/Task.js'

async function main() {
  try {
    await sequelize.authenticate(
      "Connection has been established successfully."
    );
    await sequelize.sync({force: true})
    app.listen(process.env.PORT);
    const server = "working in the port";
    console.log(server.charAt(0).toUpperCase() + server.slice(1), process.env.PORT);
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
}

main();
