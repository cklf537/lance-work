import { NavItems } from '../../data/model'

function AppHeader(
    { navItem }: { navItem: NavItems[] }
) {
    console.log(navItem.length);
    return (
        <header className="flex flex-row">
            <div className='basis-2/4 py-8 border flex'>
                <h1 className='text-2xl'>Lance-work</h1>
                <nav className='flex item-center'>
                    {navItem && navItem.map((nav,i) => i <= 3 ? <div className='px-5' key={nav.id}>{nav.title}</div> : "")}
                </nav>
            </div>
            <div className='flex justify-end basis-2/4 py-8 border'>
                {navItem && navItem.map((item,i)=> i>3 ? <div className='px-5' key={item.id}>{item.title}</div> : "" )}
            </div>
        </header>
    )
}

export default AppHeader