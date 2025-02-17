const { connect } = require("mongoose");

function mongoConnect() {
  connect("mongodb://admin:admin@localhost:27020/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Error in database: ", err);
    });
}

module.exports = { mongoConnect };
