const express = require("express")
const server = express()

// Get database
const db = require("./database/db")

// Configure public directory
server.use(express.static("public"))

// Enable req.body
server.use(express.urlencoded ({extended: true}))

// Configure template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


// Configure routes
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    // Submit infos entered in the database
    const query = `
        INSERT INTO places (
            name,
            image,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.name,
        req.body.image,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            // Modal error page
            return res.render("create-point.html", { saved: false})
        }
        // Modal success page
        return res.render("create-point.html", { saved: true})
    }
     db.run(query, values, afterInsertData)
})

server.get("/search", (req, res) => {
    const search = req.query.search

    if(search == "") {
        // Build html to search results page (No results)
        return res.render("search-results.html", { total: 0 })
    }

    // Get data from the database
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%' OR state LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length

        // Build html to search results page
        return res.render("search-results.html", { places: rows, total })
    })

})

// Server start
server.listen(3000)