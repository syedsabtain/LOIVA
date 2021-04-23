import backgroundimage from '../images/backgrounds-light.png'
import BackgroumdComp from './BackgroundComp'
import NavBar from './NavBar'

const StillinProgress = () => {

    return (
        <div className="w-screen ">
            <BackgroumdComp
                className=' comingSoon  h-screen   '
                backgroundimage={backgroundimage}>
                <NavBar className=''></NavBar>
                <div className='flex justify-center items-center mt-48'>
                    <div className=' flex flex-col justify-center items-center'>
                        <h1
                            className=' max-w-5xl font-bold  tracking-wide text-center text-4xl md:text-5xl lg:text-6xl	text-white mb-11'>It's Under Construction. 
                            <br/> Coming Soon.</h1>
                        
                        
                    </div>
                </div>
            </BackgroumdComp>
        </div>
    )
}

export default StillinProgress