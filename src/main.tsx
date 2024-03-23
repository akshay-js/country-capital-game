import React from 'react'
import ReactDOM from 'react-dom/client'
import Game from './Game'
import './index.css'


export const countryObject = {
  Afghanistan: 'Kabul',
  Argentina: 'Buenos Aires',
  Bolivia: 'La Paz',
  Brazil: 'Brasília',
  Canada: 'Ottawa',
  Chile: 'Santiago',
  China: 'Beijing',
  Cuba: 'Havana',
  Egypt: 'Cairo',
  England: 'London',
  France: 'Paris',
  Germany: 'Berlin',
  India: 'New Delhi',
  Ireland: 'Dublin',
  Israel: 'Jerusalem',
  Italy: 'Roma',
  Japan: 'Tokyo',
  Peru: 'Lima',
  Portugal: 'Lisboa',
  'Russian Federation': 'Moscow',
  'South Korea': 'Seoul',
  Spain: 'Madrid',
  Ukraine: 'Kyiv',
  'United Arab Emirates': 'Abu Dhabi',
  'United States': 'Washington',
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Game countryObject={countryObject} />
  </React.StrictMode>,
)
