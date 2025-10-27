import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'

import './styles/global.css';
import './styles/theme.css';

export function App() {
    console.log('oi');

    return (
        <>  
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu/>
            </Container>
        </>
    )
}
