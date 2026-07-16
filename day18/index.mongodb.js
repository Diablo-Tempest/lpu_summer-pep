// use("session1");
// db.student.insertOne({
//     name: "John",
//     age: 24,
//     hp: 800,
//     mp: 200,
//     city: "Pune",
// });
// db.student.insertOne({
//     name: "Bruce",
//     age: 31,
//     hp: 830,
//     mp: 234,
//     city: "Gotham",
// });
// db.student.insertOne({
//     name: "Clark",
//     hp: 345,
//     mp: 543,
//     age: 30,
//     city: "Smallville",
// });
// db.student.insertOne({
//     name: "Clark",
//     age: 46,
//     hp: 654,
//     mp: 123,
//     city: "Smallville",
// });
// db.student.insertOne({
//     name: "Peter",
//     hp: 876,
//     mp: 246,
//     age: 17,
//     city: "Queens",
// });
// db.student.find({name: 'Clark'});
// find() returns a cursor object. Think of it like a pointer to traver from one document to another.
// db.student.updateOne({age: 46}, {
//     $set: {
//         name: "Logan",
//         city: "Brooklin",
//     }
// })
// db.student.deleteMany({})

// Aggregation: It is a framework used to process, transform, and analyze, data from one or more documents. It works like a pipeline where documents pass though multiple stages, and each stage performs an operation on the data.

/*
Aggregation Pipeline

Collection
    |
Stage 1 ($match) -- filter documents
    |
Stage 2 ($group) -- group documents
    |
Stage 3 ($project) -- select or modify some fields
    |
Stage 4 ($sort) -- Sort documents
    |
Final Result

*/
// db.student.find({name: "Clark"})
// db.student.aggregate([
//     {
//         $match: {
//             name: "Peter",
//         }
//     }
// ])// filter documents

// db.student.aggregate([
//     {
//         $project: {
//             name: 1,
//             _id: 0,
//         }
//     }
// ]) // select specific fields
// db.student.aggregate([
//     {
//         $project: {
//             name: 1,
//             _id: 0,
//             powers: {
//                 $multiply: ["$hp", "$mp"],
//             }
//         }
//     }
// ]) // create a new field

// db.student.aggregate([
//     {
//         $sort: {
//             age: -1,
//         }
//     }
// ]) // sort documents. 1 is for ascending, -1 is for descending

// db.student.aggregate([
//     {
//         $count: "TotalDocuments"
//     }
// ])// $count counts the total documents
// db.student.aggregate([
// {
//     $match: {
//         name: "Clark",
//     }
// },
// {
//     $group: {
//             totalPower:{
//                 $sum: {
//                     multiply: ["hp", "mp"]
//                 }   
//             }
//     }
// },
// {
//     $sort: {
//         age: -1
//     }
// },
// {
// $count: "TotalDocuments"
// },
// ])

use('company');
// db.orders.insertMany([
//     {
//         _id: 1,
//         customer: "Amit",
//         city: "Delhi",
//         product: "Laptop",
//         category: "Electronics",
//         amount: 70000,
//         quantity: 1,
//         date: new Date("2024-01-10")
//     },
//     {
//         _id: 2,
//         customer: "Riya",
//         city: "Mumbai",
//         product: "Phone",
//         category: "Electronics",
//         amount: 30000,
//         quantity: 2,
//         date: new Date("2024-01-11")
//     },
//     {
//         _id: 3,
//         customer: "Amit",
//         city: "Delhi",
//         product: "Shoes",
//         category: "Fashion",
//         amount: 2000,
//         quantity: 3,
//         date: new Date("2024-01-12")
//     },
//     {
//         _id: 4,
//         customer: "John",
//         city: "Bangalore",
//         product: "Laptop",
//         category: "Electronics",
//         amount: 80000,
//         quantity: 1,
//         date: new Date("2024-01-13")
//     },
//     {
//         _id: 5,
//         customer: "Riya",
//         city: "Mumbai",
//         product: "T-shirt",
//         category: "Fashion",
//         amount: 1000,
//         quantity: 5,
//         date: new Date("2024-01-14")
//     },
//     {
//         _id: 6,
//         customer: "Amit",
//         city: "Delhi",
//         product: "Phone",
//         category: "Electronics",
//         amount: 25000,
//         quantity: 1,
//         date: new Date("2024-01-15")
//     }
// ]);

// db.employees.insertMany([
//     {
//         _id: 1,
//         name: "Rahul",
//         department: "IT",
//         salary: 60000,
//         age: 25,
//         city: "Delhi"
//     },
//     {
//         _id: 2,
//         name: "Sneha",
//         department: "HR",
//         salary: 40000,
//         age: 28,
//         city: "Mumbai"
//     },
//     {
//         _id: 3,
//         name: "Arjun",
//         department: "IT",
//         salary: 70000,
//         age: 30,
//         city: "Bangalore"
//     },
//     {
//         _id: 4,
//         name: "Priya",
//         department: "Finance",
//         salary: 65000,
//         age: 27,
//         city: "Delhi"
//     },
//     {
//         _id: 5,
//         name: "Karan",
//         department: "HR",
//         salary: 45000,
//         age: 32,
//         city: "Mumbai"
//     },
//     {
//         _id: 6,
//         name: "Meena",
//         department: "IT",
//         salary: 80000,
//         age: 29,
//         city: "Delhi"
//     }
// ]);

// db.orders.aggregate([
//     {
//         $group: {
//             _id: "$category",
//             totalSize: {$sum: "$amount"}
//         }
//     }
// ])
// db.orders.aggregate([
//     {
//         $group: {
//             _id: "$customer",
//             totalQuantity: {$sum: "$quantity"}
//         }
//     }
// ])

// db.employees.aggregate([
//     {
//         $group: {
//             _id: "$department",
//             avgSalary: {$avg: "$salary"}
//         }
//     }
// ])
// db.employees.aggregate([
//     {
//         $group: {
//             _id: "$city",
//             totalEmployees: {$sum: 1}
//         }
//     }
// ])
// db.orders.aggregate([
    // {
    //     $group: {
    //         _id: "$category",
    //         totalSize: {$sum: "$amount"},
    //         avgAmount: {$avg: "$amount"},
    //         maxSale: {$max: "$amount"},
    //         minSale: {$min: "$amount"},
    //         count: {$sum: 1}
    //     }
    // },
    // {
    //     $out: "updatedOrders"
    // }, // create a new collection with the aggregated data. Replaces the old data with the one if present
    // {
    //     $merge: "updatedOrders"
    // }// the same as $out but, it does not replace the old data. Instead, it add the new data and keep the old ones intact.
// ])


// db.orders.aggregate([
//     {
//         $match: { category: "Electronics" }
//     },
//     {
//         $group: { _id: "$customer", total: { $sum: '$amount' } }
//     },
//     {
//         $sort: { total: -1 }
//     }
// ])

// db.employees.aggregate([
//     {
//         $match: {
//             salary: { $gt: 60000 }
//         }
//         // $gt, $ge, $lt, $le, $eq, $ne
//     },
//     {
//         $limit: 2
//     }
// ])