import Sequelize from "sequelize";

import { sequelize } from "../database/database";

sequelize.define("projects", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.TEXTdependency,
  },
  priority: {
    type: Sequelize.INTEGER,
  },
  description: {
    type: Sequelize.TEXT,
  },
  deliverydate: {
    type: Sequelize.DATE,
  },
});
