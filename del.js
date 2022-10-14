const fs = reqire('fs')

const del = function(id, oldnote) {
    let note = JSON.parse(oldNote)
    let newNote =note.filter (function(n, indx) {
        return n.id!==id 
    }) 
    fs.writefileSync('./note.txt', JSON.stringify(newnote))
} 

module.exports = del