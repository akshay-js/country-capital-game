import { useState } from "react";


const shuffle = (array: string[]) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function Game({countryObject} : {countryObject:{ [type: string]: string }}) {

  const [arrList, setArrList] = useState<string[]>(shuffle([...Object.keys(countryObject), ...Object.values(countryObject)]));
  const [activeClass, setActiveClass] = useState<number[]>([]);
  const [className, setClassName] = useState<string>('active');
  const [busy, setBusy] = useState<boolean>(false);

  
  const match = (index: number) => {
    if(busy){
      return;
    }
    if (activeClass.length > 1) {
      setActiveClass([]);
      setClassName('active');
    }
    setActiveClass((prev) => [...prev, index]);

    if (activeClass.length === 1) {
      const pre = arrList[activeClass[0]];
      const current = arrList[index];
      const preIndex = activeClass[0];
      const updatedArrList = arrList.filter((_, i) => ![preIndex, index].includes(i));
      const shuffledArrList = shuffle(updatedArrList);

      if (countryObject[pre] && countryObject[pre] === current || countryObject[current] && countryObject[current] === pre) {
        setClassName('green');
        setBusy(true);

        setTimeout(() => {
          setArrList(shuffledArrList);
          setClassName('active');
          setActiveClass([]);
          setBusy(false);
        }, 3000);
      } else {
        setClassName('wrong');
      }
    }
  }

  return (<>
    <h1>Match the Country with Capital or Capital with Country</h1>
    <ul>
      {
        arrList.map((key, index) => {
          return (
            <li className={(activeClass.includes(index)) ? className : ''} key={`${key}_${index}`} onClick={() => { match(index) }}>{key}</li>
          );
        }
        )
      }
      {arrList.length === 0 && <h2>You have won the Game</h2>}
    </ul></>
  )
}
export default Game
