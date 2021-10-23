document.addEventListener('click', e=> {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;
    

    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
    })

    
})
    document.addEventListener('click', e => {
        const isSubDropdownButton = e.target.matches("[data-subdropdown-button]");
        if (!isSubDropdownButton && e.target.closest("[data-subdropdown]") != null) return;
        let currentsubDropdown;
        if (isSubDropdownButton) {
            currentsubDropdown = e.target.closest('[data-subdropdown]');
            currentsubDropdown.classList.toggle('active');
        }
        document.querySelectorAll("[data-subdropdown].active").forEach(subdropdown => {
        if (subdropdown === currentsubDropdown) return;
           subdropdown.classList.remove('active');
          })
    })

     document.addEventListener('click', e => {
        const isSubSubDropdownButton = e.target.matches("[data-subsubdropdown-button]");
        if (!isSubSubDropdownButton && e.target.closest("[data-subsubdropdown]") != null) return;
        let currentsubsubDropdown;
        if (isSubSubDropdownButton) {
            currentsubsubDropdown = e.target.closest('[data-subsubdropdown]');
            currentsubsubDropdown.classList.toggle('active');
        }
        document.querySelectorAll("[data-subsubdropdown].active").forEach(subsubdropdown => {
        if (subsubdropdown === currentsubsubDropdown) return;
           subsubdropdown.classList.remove('active');
          })
     })
    
     document.addEventListener('click', e => {
        const isSubSubSubDropdownButton = e.target.matches("[data-subsubsubdropdown-button]");
        if (!isSubSubSubDropdownButton && e.target.closest("[data-subsubsubdropdown]") != null) return;
        let currentsubsubsubDropdown;
        if (isSubSubSubDropdownButton) {
            currentsubsubsubDropdown = e.target.closest('[data-subsubsubdropdown]');
            currentsubsubsubDropdown.classList.toggle('active');
        }
        document.querySelectorAll("[data-subsubsubdropdown].active").forEach(subsubsubdropdown => {
        if (subsubsubdropdown === currentsubsubsubDropdown) return;
           subsubsubdropdown.classList.remove('active');
          })
    })
