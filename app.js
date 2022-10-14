const add = require('./add')
const read = require('./read')
const write = require('./write')

// get user input 
const data = process.argv 

var note = {} 

if(data[2] == 'add') {
    //Build Object 
    note = {
        id:[3],
        title: [4],
        body: [5]
    }
    // Get old note value
    var oldNote = read()
    // Add note to note.txt
    add(note, oldNote)
}
if(data[2] == 'read') {
    // import present
    const present = require('./present')

    present(read())
}