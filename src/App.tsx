import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading/index';
import { Container } from './components/Container/index';
import { Logo } from './components/Logo'

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
                <Heading>Menu</Heading>
            </Container>
        </>
    )
}
