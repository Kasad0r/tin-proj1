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

function successfullyModified(){
    alert("Movie successfully modified")
}


let expanded = false;

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}