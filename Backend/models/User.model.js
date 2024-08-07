const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exercise = new Schema(
            {   _id:Number,
                name:String,
                history: 
                    [
                        {
                        _id: false ,
                        weightDate: Date,
                        weight: Number,
                        }
                    ],
                    
            }

)

const userSchema = new Schema({
    fname:String,
    email:{
    type:String,
    unique:true,
    },
    password:String,
    weight:Number,
    bench:Number,
    squat:Number,
    deadlift:Number,
    exercises:
        [exercise],
    workouts:
    [{name:String,
        exercises:
        [exercise],}]
    
});

const User = mongoose.model('User',userSchema,'FitnessUsers');
module.exports = User;
