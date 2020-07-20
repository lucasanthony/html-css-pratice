function showSearchInput() {
    let search_bar = document.getElementById('search-bar-div');

    search_bar.style.visibility = "visible";
    search_bar.style.opacity = 1;
    search_bar.style.width = "19em";
}

function hideSearchInput() {
    let search_bar = document.getElementById('search-bar-div');
    search_bar.style.visibility = "hidden";
    search_bar.style.opacity = 0;
    search_bar.style.width = "2em";
    search_bar.value = '';
}