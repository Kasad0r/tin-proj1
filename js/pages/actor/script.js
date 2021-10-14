function confirmDelete() {
    if (confirm('are you sure you want to delete the actor?')) {
        // Save it!
        alert('Actor has been deleted!');
    } else {
        // Do nothing!
        alert('Rollback deleting');
    }
}

function successfullyAdded(){
    alert("Actor successfully added")
}


function successfullyModified(){
    alert("Actor successfully modified")
}
