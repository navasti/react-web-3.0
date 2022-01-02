import {useState} from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import logo from '../images/logo.png'

interface NavbarItemProps {
	title: string;
	classProps?: string;
}

const NavbarItem = ({ title, classProps = '' }: NavbarItemProps): JSX.Element => {
	return (
		<li className={`mx-4 cursor-pointer ${classProps}`}>
			{ title}
		</li>
	)
}

const Navbar = (): JSX.Element => {
	const [toggledMenu, setToggledMenu] = useState(false);
	const menuOptions = ["Market", "Exchange", "Tutorials", "Wallets"];
	return (
		<nav className="w-full py-4 flex md:justify-center justify-between items-center ">
			<div className="md:flex-[0.5] flex-initial justify-center items-center">
				<img src={logo} alt="logo" className="w-32 cursor-pointer"/>
			</div>
			<ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
				{
					menuOptions.map((item, index) => (
						<NavbarItem key={item + index} title={item} />
					))
				}
				<li className="bg-[#2952e3] py-2 px-7 ml-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
					Login
				</li>
			</ul>
			<div className="flex relative">
				{
					toggledMenu
						? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggledMenu(false)} />
						: <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggledMenu(true)}/>
				}
				{
					toggledMenu && (
						<ul className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
							<li className="text-xl w-full my-2">
								<AiOutlineClose onClick={() => setToggledMenu(false)} />
							</li>
							{
								menuOptions.map((item, index) => (
									<NavbarItem key={item + index} title={item} classProps="my-2 text-lg" />
								))
							}
						</ul>
					)
				}
			</div>
		</nav>
	)
}

export default Navbar;
