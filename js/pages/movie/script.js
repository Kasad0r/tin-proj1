function confirmDelete() {
    if (confirm('are you sure you want to delete the movie?')) {
        // Save it!
        alert('Movie has been deleted!');
    } else {
        // Do nothing!
        alert('Rollback deleting');
    }
}


function successfulAdded(){
    alert("Movie successfully added")
}