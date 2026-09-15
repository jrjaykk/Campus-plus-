function searchContent() {

    let input = document.getElementById("searchInput");
    let search = input.value.toLowerCase().trim();

    if (search === "") {
        alert("Please enter something to search.");
        return;
    }

    // Notices
    if (
        search.includes("notice") ||
        search.includes("announcement")
    ) {
        window.location.href = "notices.html";
    }

    // Study Material
    else if (
        search.includes("study") ||
        search.includes("notes") ||
        search.includes("material")
    ) {
        window.location.href = "study.html";
    }

    // Events
    else if (
        search.includes("event") ||
        search.includes("competition") ||
        search.includes("fest")
    ) {
        window.location.href = "events.html";
    }

    // Clubs
    else if (
        search.includes("club") ||
        search.includes("coding") ||
        search.includes("robotics") ||
        search.includes("sports")
    ) {
        window.location.href = "clubs.html";
    }

    // No result
    else {
        alert("No result found for: " + search);
    }
}


// Press Enter to search
document.getElementById("searchInput").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        searchContent();
    }

});
