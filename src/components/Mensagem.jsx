export function Mensagem() {
const textoTitulo = "As batatas quando nascem se esparramam pelo chão"
const nomeAutor = "J. Almir";
const linkImagem = "https://picsum.photos/200";

    return (
      <section className="mensagem">
        <h2 className="titulo">{textoTitulo.toLocaleUpperCase()}</h2>
        <img src= {linkImagem} />
        <p>Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Aenean aliquam molestie leo, vitae iaculis nisl.</p>
        <small>Esta frase foi criada por {nomeAutor}</small>
      </section>
    );
}

