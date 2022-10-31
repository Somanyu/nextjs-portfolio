export default function Button({ text }) {
    return (
        <button
            class="btn btn-primary"
            onClick={event => event.target.innerText = 'You clicked me!'}>
            {text}
        </button>
    )
}