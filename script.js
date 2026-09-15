function searchContent() {

    let search = document.getElementById("searchInput").value.toLowerCase();

    if (search.includes("notice")) {
        window.location.href = "notices.html";
    }
    else if (search.includes("study")) {
        window.location.href = "study.html";
    }
    else if (search.includes("event")) {
        window.location.href = "events.html";
    }
    else if (search.includes("club")) {
        window.location.href = "clubs.html";
    }
    else {
        alert("Sorry! No result found.");
    }
}
