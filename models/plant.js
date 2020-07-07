var mongoose    = require("mongoose");

var plantSchema = new mongoose.Schema({
    type:[{
        name:String,
        position:[{
            name:String,
            description:[{
                name:String,
                image:String,
                body:String,
                price:Number
            }]
        }]
    }
    ]
});
module.exports = mongoose.model("Plant",plantSchema);