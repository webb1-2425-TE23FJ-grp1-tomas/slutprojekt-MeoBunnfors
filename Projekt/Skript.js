function toggleCheck(listItem) {
    listItem.classList.toggle('checked');
}



      const hamburger = document.querySelector(".hamburger");
        const linksMenu = document.querySelector(".links-menu");
        
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("change");
            linksMenu.classList.toggle("active");
        });