import '../style/menuBar.scss'
import LinkCustom from '../ui/LinkCustom'

export default function MenuBar() {
    return (
        <div className='menu_bar'>
            <LinkCustom to='/'>Home</LinkCustom>
            <LinkCustom to='/phone'>Phone</LinkCustom>
            <LinkCustom to='/laptop'>Laptop</LinkCustom>
            <LinkCustom to='phone'>Phone</LinkCustom>
            <LinkCustom to='phone'>Phone</LinkCustom>
        </div>
        
    )
}
