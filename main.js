let country = document.querySelector(".country-list")
let select = document.querySelector(".select_list")
let search = document.querySelector(".search-input")


const render = (arr, list) => {
    list.innerHTML = "";
    arr.forEach(value => {
        let item = document.createElement("li")
        let img = document.createElement("img")
        let name = document.createElement("h2")
        let capital = document.createElement("p")
        let population = document.createElement("p")
        let id = document.createElement("span")
        let btnBlock = document.createElement("div")
        let basket = document.createElement("button")
        let like = document.createElement("button")
        let more = document.createElement("button")

        item.className = "relative hover:scale-105 duration-300 cursor-pointer w-[300px] p-4 bg-slate-400 rounded - [10px] ml-[30px] shadow-lg"

        img.src = value.flag
        img.width = "100%"
        img.height = "250"
        img.className = "w-[100%] h-[250px] rounded -[10px] mb-[10px] shadow-black-lg"

        btnBlock.className = "py-[20px]"


        name.textContent = "Country: " + value.name
        capital.textContent = "Capital: " + value.capital
        population.textContent = "Population: " + value.population
        id.className = "absolute top-0 left-[-50px] w-[50px] h-[50px] border -[5px] border-black-400 decoration-white-500 rounded-[50%] flex items-center justify-center bg-zinc-200 "
        id.textContent = value.id
        btnBlock.className = "flex items-end justify-between"
        like.innerHTML = `<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 3.64922 13.0281 4.93829 14.4797C6.00072 15.676 7.28684 16.6675 8.54113 17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 19.7499C12.3096 19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 17.9993 15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 20.0346 5.18243 18.3756 4.4241C16.7639 3.68739 14.5983 3.88249 12.5404 6.02065C12.399 6.16754 12.2039 6.25054 12 6.25054C11.7961 6.25054 11.601 6.16754 11.4596 6.02065C9.40166 3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 2.39015 7.09896 2.10078 5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 18.8585C7.95659 19.0785 8.23378 19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 11.3096 21.2499 12 21.2499C12.6904 21.2499 13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 17.8879 19.0171 16.7888 20.1833 15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z" fill="white"/>
</svg>`
        like.className = " p-3 border - [1px] border-gray-300 rounded-[10px] items-center justify-center bg-gray-400"
        basket.innerHTML = `<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z" fill="white"/>
        </svg>`

        basket.className = " p-3 border - [1px] border-gray-300 bg-gray-400 rounded-[50%] items-start justify-center"
        more.innerHTML = `<svg width="25px" height="25px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path fill="white" fill-rule="evenodd" d="M3 8a2 2 0 100 4 2 2 0 000-4zm5 2a2 2 0 114 0 2 2 0 01-4 0zm7 0a2 2 0 114 0 2 2 0 01-4 0z"/>
      </svg>`
        more.className = "p-3 border - [1px] border-gray-300 bg-gray-400 rounded-[50%] items-start justify-center"






        name.className = "mb-[8px] text-center"
        capital.className = "mb-[8px] text-center"
        population.className = "mb-[8px] text-center"
        btnBlock.append(like, basket, more)
        item.append(img, name, capital, population, id, btnBlock)
        list.append(item)
    });

}
render(countrys, country);

countrys.forEach(value => {
    let option = document.createElement("option")
    option.innerHTML = `${value.name} - ${value.capital}`
    option.setAttribute("value", value.capital)
    select.append(option)
})

select.addEventListener("change", (e) => {
    if (e.target.value == "All") {
        render(countrys, country)
    } else {
        let selectList = countrys.filter(item => item.capital == e.target.value)
        render(selectList, country)
    }

}),

 search.addEventListener("keyup", (e) => {
        let searchValue = e.target.value;
        if (Number(searchValue)) {
            const searchList = countrys.filter(item => String(item.population).includes(searchvalue.trim()))
            render(searchList , country)
        } else{
            const searchList = countrys.filter(item => item.name.toLowerCase().includes(searchValue.trim().toLowercase()))
            render(searchList , country)
        }

    })





