const db = require('../db');
const mongoose = require('mongoose');

const StrainSchema = new mongoose.Schema(  
                                {  
                                    name: String,
                                    type : String,
                                    percent_of_thc: Number,
                                    percentual_of_cbd: Number,
                                    feelings: [String],
                                    negativities: [String],
                                    flavours: [String],
                                    dominantTerpene : String
                                }
                            );
var strainModel = mongoose.model('strain', StrainSchema);
module.exports = strainModel;