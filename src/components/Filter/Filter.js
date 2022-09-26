export default function Filter({ continent, setContinent }) {

  return (
    <select value={continent} className="filter" onChange={(event) => {setContinent(event.target.value);}}>
      <option value="all">All</option>
      <option value="Africa">Africa</option>
      <option value="Antarctica">Antarctica</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="North America">North America</option>
      <option value="South America">South America</option>
    </select>  
  );
}