const container = document.querySelector(".container");
const articles = document.querySelectorAll(".article");
const btns = document.querySelectorAll(".btn");

container.addEventListener("click", (e)=>{
    const id = e.target.dataset.id;
    if(id){
        btns.forEach((btn) =>{
            btn.classList.remove("active");
            e.target.classList.add("active")
        })
        articles.forEach((article) =>{
            article.classList.remove("active");
          const a = document.getElementById(id);
          a.classList.add("active")
        })
    }
})