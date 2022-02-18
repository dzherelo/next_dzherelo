const Layout = ({children}) => {
    return(
        <div className="mx-auto max-w-7xl">
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;