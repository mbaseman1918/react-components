// TODO
const {useState} = React;

const GroceryListItem = (props) => {
  const [inCart, setInCart] = useState(false);
  const style = {
    fontWeight: inCart ? 'bold' : 'normal'
  };
  return (
    <li style={style} onMouseEnter={() => setInCart(!inCart)} onMouseLeave={() => setInCart(!inCart)}>
      {props.grocery}
    </li>
  );
};

const GroceryList = (props) => (
  <ul>
    {props.groceries.map((grocery) => (
      <GroceryListItem grocery={grocery} />
    ))}
  </ul>
);



const App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceries={['Milk', 'Chicken Thighs', 'Cucumber']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
