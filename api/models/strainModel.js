const mongoose = require('mongoose');

const StrainSchema = new mongoose.Schema(  
                                {  
                                    name: {
                                        type: String,
                                        required: true
                                    },
                                    percent_of_thc: {
                                        type: Number,
                                        required: true
                                    },
                                    percentual_of_cbd: 
                                    {
                                        type: Number,
                                        required: true
                                    },
                                    feelings: {
                                        type: [String],
                                        required: true
                                    },
                                    negativities: {
                                        type: [String],
                                        required: true
                                    },
                                    flavours: {
                                      
                                        type: [String],
                                        required: true
                                    },
                                    dominantTerpene : {
                                        type: String,
                                        required: true
                                    }
                                },
                                {
                                    timestamps : true
                                }
                            );

module.exports = mongoose.model("Strain", StrainSchema);