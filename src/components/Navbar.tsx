import Link from 'next/link'
import { list } from 'postcss'
export default function Navbar() {
    return (
        <div className='bg-[#8b8b8b]'>
                <ul className='container mx-auto flex justify-between'>
                    <li>
                        <Link href="/">home</Link>
                    </li>          
                    <li>
                        <Link href="../products">produtos</Link>
                    </li>
                    <li>
                        <Link href="../about">sobre</Link>
                    </li>
                    <li>
                        <Link href="../contact">contato</Link>
                    </li>
                    <li>
                        <Link href="../login">login</Link>
                    </li>
                    <li>
                        <Link href="../registro">registro</Link>
                    </li>

                </ul>
        </div>
    );
}