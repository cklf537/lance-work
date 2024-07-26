import { NavItems } from '../../data/model'

function AppHeader(
    { navItem }: { navItem: NavItems[] }
) {
    return (
        <header className="flex flex-row">
            <div className='basis-2/4 py-8 border flex'>
                <h1>lance-work</h1>
                <nav className='flex item-center'>
                    {navItem && navItem.map(nav => <div className='px-5' key={nav.id}>{nav.title}</div>)}
                </nav>
            </div>
            <div className='basis-2/4 py-8 border'>test</div>
        </header>
    )
}

export default AppHeader