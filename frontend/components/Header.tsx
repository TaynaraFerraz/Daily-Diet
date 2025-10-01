
export default function Header(){
    return(
        <header className="flex justify-between m-8">
            <img src="/Logo.png" alt="Logo" className=" w-32 md:w-24"/>
            <h3 className="font-semibold text-xl hidden md:block">Bem-vindo!</h3>
        </header>
    )
}