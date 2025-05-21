function toggleCheck(listItem) {
    listItem.classList.toggle('checked');
}



      const hamburger = document.querySelector(".hamburger");
        const linksMenu = document.querySelector(".links-menu");

        // Add event listener to the hamburger icon
        hamburger.addEventListener("click", () => {
            // Toggle the 'change' class on the hamburger for the 'X' animation
            hamburger.classList.toggle("change");
            // Toggle the 'active' class on the navigation links to show/hide the menu
            linksMenu.classList.toggle("active");
        });