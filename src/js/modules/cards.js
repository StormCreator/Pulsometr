function cards(linksSelector, hideContent, showContent, activeClass, inActiveClass, backLinks){
    let triggerLinks = document.querySelectorAll(linksSelector),
        hideContents = document.querySelector(hideContent),
        showContents = document.querySelector(showContent),
        getBackLinks = document.querySelectorAll(backLinks);
    
    triggerLinks.forEach(item =>{
        item.addEventListener('click', e => {
            e.preventDefault();
            if(!showContents.classList.contains(inActiveClass) && !hideContents.classList.contains(activeClass)){
                showContents.classList.add(inActiveClass);
                hideContents.classList.add(activeClass);
            }
        });
    });

    getBackLinks.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            if(showContents.classList.contains(inActiveClass) && hideContents.classList.contains(activeClass)){
                showContents.classList.remove(inActiveClass);
                hideContents.classList.remove(activeClass);
            }
        })
    });

}

export default cards;