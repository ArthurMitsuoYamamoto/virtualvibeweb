interface NomeDaLista {
    nomeDaLista: string;
}

export default function List(props: NomeDaLista) {

    const { nomeDaLista } = props;

    return (
        <main>
            <h1>{ nomeDaLista }</h1>
        </main>
    );
}