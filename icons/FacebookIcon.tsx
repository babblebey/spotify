import { FC } from "react";

interface Props {
    height?: number,
    width?: number,
    color?: string,
    className?: string
}
 
const FacebookIcon: FC<Props> = ({ height, width, color, className }) => {
    return ( 
        <>
            <svg role="img" fill={color || '#000'} height={height} width={width} aria-hidden="true" className={className} viewBox="0 0 16 16" data-encore-id="icon">
                <path d="M16 8a8 8 0 10-9.25 7.903v-5.59H4.719V8H6.75V6.237c0-2.005 1.194-3.112 3.022-3.112.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.617-1.304 1.25V8h2.219l-.355 2.313H9.25v5.59A8.002 8.002 0 0016 8z"></path>
            </svg>
        </>
    );
}
 
export default FacebookIcon;