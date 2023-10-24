import Link from 'next/link'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'

export default function Products() {
    return (
        <div>
            <Head>
                <title>pagina principal</title>
                <meta name="keyworkds" content="roupas, calçados, bones" />
                <meta name="description" content="loja de roupas, calçados e bones" />
            </Head>
            <h1 className='p-4 text-black font-semibold bg-blue-50'> pagina inicial</h1>
        </div>
    )
}