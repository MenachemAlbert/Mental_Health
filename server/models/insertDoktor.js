const mongoose = require('mongoose')
const Doctor = require('./doktors')

const doctors = [
    { name: "Doctor 1", specialization: "פסיכיאטריה", city: "ירושלים" },
    { name: "Doctor 2", specialization: "פסיכותרפיה", city: "תל אביב" },
    { name: "Doctor 3", specialization: "עבודה סוציאלית קלינית", city: "חיפה" },
    { name: "Doctor 4", specialization: "פסיכיאטריה", city: "נתניה" },
    { name: "Doctor 5", specialization: "פסיכותרפיה", city: "ירושלים" },
    { name: "Doctor 6", specialization: "עבודה סוציאלית קלינית", city: "תל אביב" },
    { name: "Doctor 7", specialization: "פסיכיאטריה", city: "חיפה" },
    { name: "Doctor 8", specialization: "פסיכותרפיה", city: "נתניה" },
    { name: "Doctor 9", specialization: "עבודה סוציאלית קלינית", city: "ירושלים" },
    { name: "Doctor 10", specialization: "פסיכיאטריה", city: "תל אביב" },
    { name: "Doctor 11", specialization: "פסיכותרפיה", city: "חיפה" },
    { name: "Doctor 12", specialization: "עבודה סוציאלית קלינית", city: "נתניה" },
    { name: "Doctor 13", specialization: "פסיכיאטריה", city: "ירושלים" },
    { name: "Doctor 14", specialization: "פסיכותרפיה", city: "תל אביב" },
    { name: "Doctor 15", specialization: "עבודה סוציאלית קלינית", city: "חיפה" },
    { name: "Doctor 16", specialization: "פסיכיאטריה", city: "נתניה" },
    { name: "Doctor 17", specialization: "פסיכותרפיה", city: "ירושלים" },
    { name: "Doctor 18", specialization: "עבודה סוציאלית קלינית", city: "תל אביב" },
    { name: "Doctor 19", specialization: "פסיכיאטריה", city: "חיפה" },
    { name: "Doctor 20", specialization: "פסיכותרפיה", city: "נתניה" },
    { name: "Doctor 21", specialization: "עבודה סוציאלית קלינית", city: "ירושלים" },
    { name: "Doctor 22", specialization: "פסיכיאטריה", city: "תל אביב" },
    { name: "Doctor 23", specialization: "פסיכותרפיה", city: "חיפה" },
    { name: "Doctor 24", specialization: "עבודה סוציאלית קלינית", city: "נתניה" },
    { name: "Doctor 25", specialization: "פסיכיאטריה", city: "ירושלים" },
    { name: "Doctor 26", specialization: "פסיכותרפיה", city: "תל אביב" },
    { name: "Doctor 27", specialization: "עבודה סוציאלית קלינית", city: "חיפה" },
    { name: "Doctor 28", specialization: "פסיכיאטריה", city: "נתניה" },
    { name: "Doctor 29", specialization: "פסיכותרפיה", city: "ירושלים" },
    { name: "Doctor 30", specialization: "עבודה סוציאלית קלינית", city: "תל אביב" }
];

mongoose.connect('mongodb+srv://menachem:Aa123456@cluster0.zx2epvv.mongodb.net/kodkod')
.then(() => {
    console.log('Connected to MongoDB');
    return Doctor.insertMany(doctors);
}).then(() => {
    console.log('Doctors added successfully');
    return mongoose.disconnect();
}).catch(err => {
    console.error('Error:', err);
});
