import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import styles from './SearchBox.module.css'

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };
    
    return (
        <div className={styles.container}>
            <p className={styles.text}>Find contacts by name</p>
            <input
                className={styles.box}
                type="text"
                placeholder="Search by name"
                onChange={handleFilterChange}
            />
            
        </div>
    );
}