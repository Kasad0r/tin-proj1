function confirmDelete() {
    if (confirm('are you sure you want to delete the movie actors description?')) {
        // Save it!
        alert('Movie actors description has been deleted!');
    } else {
        // Do nothing!
        alert('Rollback deleting');
    }
}


function successfullyAdded(){
    alert("Movie actors description successfully added")
}

function successfullyModified(){
    alert("Movie actors description successfully modified")
}
