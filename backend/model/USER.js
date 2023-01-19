const mongoose = require("mongoose");

// Se connecter à la base de données
const mongoDB = "mongodb://127.0.0.1:27017/euromed";   
mongoose.connect(mongoDB)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée'))

// Définir un nouveau schéma
const Schema = mongoose.Schema;
const userSchema =new Schema(
{
name: {type: String, required: true},
email: {type: String, required: true},
contact:{type: Number, required: true}
}
)

module.exports = mongoose.model("user", userSchema);


