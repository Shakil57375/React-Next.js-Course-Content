export function Profile() { // named export
    return (
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    );
}
export function Card() { // named export
    return (
        <div className="card">
            <h1>This is a card</h1>
        </div>
    );
}

export default function Gallery() { // default export
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}
