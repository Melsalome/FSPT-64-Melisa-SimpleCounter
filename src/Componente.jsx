

export function Componente( {componenteProps} ) {
console.log(componenteProps);
    return (
        <>
            <img
                className="avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/5eeea355389655.59822ff824b72.gif"
                alt="Felix el gato"
                width={300}
                height={300}
            />
            <h1>{`Felix El gato esperando a que lo vuelvan a pasar en TV : ${componenteProps}`}</h1>
        </>
    )
}


