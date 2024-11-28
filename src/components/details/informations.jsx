import TitleTertiary from "./title-tertiary.jsx";

const Informations = ({weight, height, catchRate}) => {
  return (
    <div>
      <TitleTertiary content={"Informations"}/>
      <ul>
        <li className="flex gap-3 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               className="lucide lucide-weight">
            <circle cx="12" cy="5" r="3"/>
            <path
              d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"/>
          </svg>
          {weight}
        </li>
        <li className="flex gap-3 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               className="lucide lucide-ruler">
            <path
              d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/>
            <path d="m14.5 12.5 2-2"/>
            <path d="m11.5 9.5 2-2"/>
            <path d="m8.5 6.5 2-2"/>
            <path d="m17.5 15.5 2-2"/>
          </svg>
          {height}
        </li>
        <li className="flex gap-3 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               className="lucide lucide-percent">
            <line x1="19" x2="5" y1="5" y2="19"/>
            <circle cx="6.5" cy="6.5" r="2.5"/>
            <circle cx="17.5" cy="17.5" r="2.5"/>
          </svg>
          {weight}
        </li>
      </ul>
    </div>

  )
}

export default Informations;