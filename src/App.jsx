export default function App() {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Submitting!");
        }}
      >
        <input />
        <button>Send</button>
      </form>
    </div>
  );
}
