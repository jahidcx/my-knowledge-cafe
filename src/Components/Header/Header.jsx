import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between max-w-[1920px] mx-auto items-center border-b-2  p-4 my-10'>
            <h1 className='text-4xl font-bold '>My knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
       
    );
};

export default Header;