import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";

export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search); //Esto es maravilloso!!! instalar yarn add query-string

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText:' '
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if( searchText.trim().length <= 1 ) return;
    navigate(`?q=${ searchText.trim() }`)



  }
  return (
    <>
      <h1>🔍 Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit } action="">
            <input 
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button
              className="btn btn-outline-primary mt-1"
            >
              🔍Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />

          <div className="alert alert-primary">
            Search a Hero
          </div>

          <div className="alert alert-danger">
            No hero with <b>{q}</b>
          </div>

          {/* <HeroCard/> */}
        </div>
      </div>
      
    </>
  );
}
