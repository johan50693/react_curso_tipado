import { useEffect, useRef, useState, ImgHTMLAttributes } from "react"

type LazyImageProps = {
    src: string
}

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative;

export const Randomfox = ({src, ...imgProps}:Props): JSX.Element => {

    const node = useRef<HTMLImageElement>(null);
    const [srcCurrent, setSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

    useEffect(() => {
      
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    console.log("Hey Youu!!")
                    setSrc(src);
                }
            })
        })

        if(node.current){
            observer.observe(node.current)
        }

        return () => {
         observer.disconnect()   
        }
    }, [src])
    

    return (
        <img 
            ref={node}  
            src={srcCurrent} 
            {...imgProps}
        />
    )
}
