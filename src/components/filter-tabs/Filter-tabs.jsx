/* eslint-disable arrow-body-style */
/* eslint-disable import/no-extraneous-dependencies */
import { useDispatch, useSelector } from 'react-redux'
import classes from './filter-tabs.module.scss'
import { setFilterCheckbox } from '../../redux/slices/filterTabs'

export default function FilterTabs() {
  const dispatch = useDispatch()
  const currentCheckbox = useSelector((state) => state.filterTabs)

  function handleFilterCheckbox(name) {
    dispatch(setFilterCheckbox(name))
  }

  const maxId = () => Math.random().toString(36).slice(2)

  const checkboxes = [
    { name: 'all', label: 'Все' },
    { name: 'noTransfers', label: 'Без пересадок' },
    { name: 'oneTransfers', label: '1 пересадка' },
    { name: 'twoTransfers', label: '2 пересадкие' },
    { name: 'threeTransfers', label: '3 пересадки' },
  ]

  return (
    <div className={classes.tabs}>
      <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      {checkboxes.map(({ name, label }, ind) => {
        return (
          <label htmlFor={name} key={maxId()}>
            {' '}
            <input
              type="checkbox"
              id={name}
              checked={currentCheckbox[ind].name === name ? currentCheckbox[ind].check : false}
              onChange={() => handleFilterCheckbox(name)}
            />
            {label}
          </label>
        )
      })}
    </div>
  )
}
