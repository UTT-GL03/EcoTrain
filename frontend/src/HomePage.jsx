import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/fr'
import SearchBar from './SearchBar'

function HomePage() {
    return (
        <section className="container">
            <SearchBar></SearchBar>
        </section>
    )
}

export default HomePage;