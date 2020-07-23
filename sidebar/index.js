function openSite(site) {
    switch (site) {
        case 'insta':
            window.open('http://www.instagram.com/lucasanthony40');
            break;
        case 'in':
            window.open('http://www.linkedin.com/in/lucasanthony');
            break;
        default:
            break;
    }
}

function handleSidebar() {
    let sidebar = document.getElementById('container');
    let profilePic = document.getElementById('profile-pic');
    let social = document.getElementById('sidebar-social');
    let option = document.getElementById('sidebar-content');

    if (sidebar.style.visibility.toString() != "visible") {
        sidebar.style.visibility = profilePic.style.visibility = option.style.visibility
            = social.style.visibility = 'visible';

        sidebar.style.opacity = profilePic.style.opacity = social.style.opacity = 1;

        sidebar.style.width = '250px';

    } else {
        sidebar.style.visibility = profilePic.style.visibility = option.style.visibility
            = social.style.visibility = 'hidden';

        sidebar.style.opacity = profilePic.style.opacity = social.style.opacity = 0;

        sidebar.style.width = '2px';
    }
}