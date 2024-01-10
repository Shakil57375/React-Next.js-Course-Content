export default function Avatar(props) {
    console.log(props)
    const {obj3 : {name, age, profession}} = props
    console.log(name, age, profession)
    return (
        <div>
            <div>
                <p>{name} is {age} old</p>
            </div>
        </div>
    );
}
