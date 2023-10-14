
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({
  searchValue,
  setSearchValue
}) => {
  return (
    <form className='mt-10 text-white mx-2 relative'>
      <input
        name="name"
        type="text"
        placeholder='Search...'
        onChange={(e) => setSearchValue(e.target.value)}
        className="p-3 pl-10 bg-[#444444] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C0A080] focus:border-[#C0A080] transition-colors w-64 rounded-full"
      />
      <div className='absolute top-1/2 left-3 transform -translate-y-1/2 text-[#C0A080]'>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </form>
  )
}

export default SearchBar
