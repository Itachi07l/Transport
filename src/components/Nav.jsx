import StaggeredMenu from "../components/StaggeredMenu";
const Nav = () => {
    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
        { label: 'Services', ariaLabel: 'View our services', link: '/Services' },
        { label: 'Contact', ariaLabel: 'Get in touch', link: '/Contact' },
        { label: 'About', ariaLabel: 'Learn about us', link: '/About' }
    ];

    const socialItems = [
        { label: 'Twitter', link: 'https://twitter.com' },
        { label: 'GitHub', link: 'https://github.com' },
        { label: 'LinkedIn', link: 'https://linkedin.com' }
    ];
    return (
        <>
            <div className="overflow-hidden absolute top-0 left-0 right-0" style={{ height: '100vh' }}>
                
                <StaggeredMenu
                    position="right"
                    items={menuItems}
                    socialItems={socialItems}
                    displaySocials
                    displayItemNumbering={true}
                    menuButtonColor="#000"
                    openMenuButtonColor="#000"
                    changeMenuColorOnOpen={true}
                    colors={['#B19EEF', '#5227FF']}
                    logoUrl="./logo1.webp"
                    accentColor="#5227FF"
                    onMenuOpen={() => console.log('Menu opened')}
                    onMenuClose={() => console.log('Menu closed')}
                />
            </div>
        </>
    )
}

export default Nav