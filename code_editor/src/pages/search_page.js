 import SearchBar from "../components/search_page/search_bar"
 import Card from "../components/search_page/card"
 import Header from "../components/landing_page/header"
 import Footer from "../components/landing_page/footer"

const SearchingPage = () => {
  return (
    <div>
        <Header/>
        <SearchBar />
        <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <Footer/>

    </div>
    
  )
}

export default SearchingPage