export function Profile() { // named export
    return (
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    );
}

export function Card() { // named export
    return (
        <div>
            <p>This is my card I am writing on it</p>
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
