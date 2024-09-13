import { Randomfox } from "./components/Randomfox";
import { MouseEventHandler, useState } from "react";
import {random} from 'lodash';

type IFoxImageItems = {
  id: string;
  url: string;
}

// const random = () => Math.floor(Math.random() * 123) + 1;
const myRandom = () => random(1,123);
const generateId = () => Math.random().toString(36).substr(2,9)

function App() {

  const [images, setImages] = useState<IFoxImageItems[]>([])

  const addNewImage: MouseEventHandler<HTMLButtonElement> = () => {

    const newImage: IFoxImageItems = {
        id: generateId() ,
        url: `https://randomfox.ca/images/${myRandom()}.jpg`
    }

    setImages([
      ...images,
      newImage
    ]);
  }

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button
        className='btn'
        onClick={addNewImage}
      >
        Agregar imagen
      </button>
        {
          images.map(({id,url}) => (
            <div key={id}>
              <Randomfox  
                src={url}
                width={300} 
                height="auto" 
                className='rounded-full bg-gray-300'  
              />
            </div>
          ))
        }

      
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       footer
      </footer>
    </div>
    </>
  );
}

export default App;
