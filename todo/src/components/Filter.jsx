import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa"
import styles from './Filter.module.css'

function Filter({filter, SetFilter, setSort}) {
    return(
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className={styles.filter_options}>
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => SetFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <button onClick={() => setSort("Asc")}>
                    <FaSortAlphaDown />    
                    </button>

                    <button onClick={()=> setSort("Desc")}><FaSortAlphaDownAlt />
                    </button> 
                </div>
            </div>
        </div>
    )
}

export default Filter