import './Banner.css'

function Banner() {
    // O conteúdo do return parece HTML, mas não é. É JSX!
    return(
        <header className="banner">
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo" />
        </header>
    );
}

export default Banner