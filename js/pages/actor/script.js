function confirmDelete() {
    if (confirm('are you sure you want to delete the actor?')) {
        // Save it!
        alert('Actor has been deleted!');
    } else {
        // Do nothing!
        alert('Rollback deleting');
    }
}

function successfulAdded(){
    alert("Actor successfully added")
}