const app = require("./app");
const config = require("./app/config");
// const MongoDB = require("./app/utils/mongodb.util");

// Kết nối đến cơ sở dữ liệu MongoDB khi server được khởi chạy
// async function startServer() {
//     try {
//         await MongoDB.connect(config.db.uri);
//         console.log("Connect to the database !");
//         const PORT = config.app.port;
//         app.listen(PORT, () => {
//             console.log(`Server is running on port ${PORT}`);
//         });
//     }
//     catch (error) {
//         console.log("Cannot connect to the database!", error);
//         process.exit();
//     }

// }

// startServer();
// Start server
const PORT = config.app.port;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
