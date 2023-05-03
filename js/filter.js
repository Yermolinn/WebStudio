const btnAllPortfolio = document.querySelector(".js-filter-all")
const portfolioList = document.querySelector(".js-portfolio-list")

onPortfolioClose = (e) => {
    e.preventDefault()
    portfolioList.classList.toggle('is-hidden')
}

btnAllPortfolio.addEventListener('click', onPortfolioClose);

