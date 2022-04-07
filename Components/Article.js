export default function Article(props) {
    return (
        <>
            <h2 className="pb-4 mb-4 border-bottom border-warning justify-content-center d-flex">{props.title}</h2>
            {props.children}
        </>
    )
}