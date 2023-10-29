import { createServer } from "http";
import { readFile, access, constants } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import Paths from "./src/paths/path.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = createServer((req, res) => {
    // Get the file path based on the request URL.
    console.log("(-) path: ", req.url)
    const routes = Paths();
    const route = routes.find((r) => r.path == req.url);
    let filePath
    if(route){
        filePath = path.join(__dirname, "public/app.html");
    }
    else{
        filePath = path.join(__dirname, req.url=='/'?"public/app.html":req.url);
    }


    // Check if the file exists.
    access(filePath, constants.F_OK, (err) => {
        if (!err) {
            // Determine the content type based on the file extension.
            let contentType;
            if (path.extname(filePath) === ".js") {
                contentType = "application/javascript"; // Set the correct MIME type for JavaScript files
            } else if (path.extname(filePath) === ".html") {
                contentType = "text/html";
            } else {
                contentType = "text/plain";
            }

            // Read the file and serve it with the appropriate content type.
            readFile(filePath, (error, data) => {
                if (error) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Internal Server Error");
                } else {
                    res.writeHead(200, { "Content-Type": contentType });
                    res.end(data);
                }
            });
        } else {
            // File not found, respond with a 404 error.
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h3>404 Not Found</h3>");
        }
    });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


