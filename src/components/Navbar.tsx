import { Link } from 'react-router'
import { ModeToggle } from './mode-toggle'

export default function Navbar() {
    const navlinks = [
        { path: '/books', label: 'All Books' },
        { path: '/create-books', label: 'Add Book' },
        { path: '/borrow-summary', label: 'Borrow Summary' },
    ]

    return (
        <div className='max-w-7xl mx-auto h-16 px-5 flex items-center gap-6'>
            <Link to='/'>
                <h2 className='text-[25px] font-bold'>ByteBooks</h2>
            </Link>

            <div className='flex items-center gap-4 justify-between w-full ml-[250px]'>
                <ul className='flex gap-5'>
                    {navlinks.map((nav, index) => (
                        <li key={index}>
                            <Link to={nav.path} className='hover:underline'>
                                {nav.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className='ml-auto'>
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}
