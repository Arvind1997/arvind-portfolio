import Link from 'next/link'

const Navlink = ({href, title}) => {
    return (
        <Link href={href} className='block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 
        hover:text-black' target= { title === "Resume" ? "_blank" : null }>
        {title}
        </Link>
    );
};

export default Navlink;