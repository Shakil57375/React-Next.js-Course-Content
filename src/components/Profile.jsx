import Avatar from "./Avatar";

export default function Profile(props) {
  return (
    <div>
      {props.children}
      <Avatar {...props} />
    </div>
  );
}
