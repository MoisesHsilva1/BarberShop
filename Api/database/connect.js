const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

  const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@clusterbarbershop.umlxv.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(uri); 
    console.log("✅ Conexão com o banco de dados realizada com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao banco de dados:", error.message);
  }
};

module.exports = connectToDatabase;
