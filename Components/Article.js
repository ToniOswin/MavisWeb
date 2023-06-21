export default function Article(props) {
    return (
        <div className="text-center">
            <h2 className="pb-4 mb-4 border-bottom border-primary justify-content-center d-flex">{props.title}</h2>
            {props.children}
        </div>
    )
}