import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

export function App() {
    console.log('oi');

    return (
        <>  
        <div className="conteiner">
            <div className="content">
                <section>Logo</section>
            </div>
        </div>
        <div className="conteiner">
            <div className="content">
                <section>Menu</section>
            </div>
        </div>
        <div className="conteiner">
            <div className="content">
                <section>Formulário</section>
            </div>
        </div>
        <div className="conteiner">
            <div className="content">
                <section>Footer</section>
            </div>
        </div>
        </>
    )
}
