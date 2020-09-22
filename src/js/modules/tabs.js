function tabs(tabsSelector, contentSelector, tabActiveClass, contentActiveClass){
    let tabs = document.querySelectorAll(tabsSelector),
        content = document.querySelectorAll(contentSelector),
        contentBody = document.getElementsByClassName('catalog__wrapper')[0];
        
    let secondTabs = document.getElementsByClassName('catalog__tabs')[0];
    
    tabs.forEach((item, index) => {
        item.addEventListener('click', e => {
            e.preventDefault();
            secondTabs.getElementsByClassName(tabActiveClass)[0].classList.remove(tabActiveClass);
            item.classList.add(tabActiveClass);
            contentBody.getElementsByClassName(contentActiveClass)[0].classList.remove(contentActiveClass);
            content.forEach((item, i) => {
                if(i === index){
                    item.classList.add(contentActiveClass);
                }
            });
        })
    });
    
}

export default tabs;