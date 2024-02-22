import { useMedia } from "use-media"

export default function AbsoluteImage({ 
            zIndex = 50,
            width = '75px',
            height = '75px' ,
            className = '',
            top = 'auto',
            right = 'auto',
            bottom = 'auto',
            left = 'auto',
            src = '',
            rotate = '0deg',
            style = {},
            invert = false
        },
        props
    ) {
    
    
    
    return (
        <img 
            className={` ${className}`}
            style={{
                transform: `rotate(${rotate}deg)`,
                zIndex: zIndex,
                position: 'absolute',
                top: top,
                right: right,
                bottom: bottom,
                left: left,
                width: width,
                height: height,
                ...style,
                objectFit: 'contain',
                filter: (invert) ? 'invert(1)' : 'invert(0)',
                
            }}
            {...props}
            src={src}
        />
    )
}
