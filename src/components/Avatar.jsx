export default function Avatar(props) {
    console.log(props)
    const {obj2 : {name, age, profession}} = props
    console.log(name, age, profession)
    return (
        <div>
            <div>
            </div>
        </div>
    );
}
