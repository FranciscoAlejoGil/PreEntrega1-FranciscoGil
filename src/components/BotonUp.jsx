import { ArrowBigUp } from 'lucide-react'
function BotonUp () {
    return (
        <a href="#top" className="fixed bottom-4 right-4 z-50 bg-zinc-700 hover:bg-zinc-400 hover:text-black text-white p-2 rounded-full shadow-md scroll-smooth ">
            <ArrowBigUp size={28} strokeWidth={1.5} />
        </a>
    )
}

export default BotonUp