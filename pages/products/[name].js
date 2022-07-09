import styles from "../../styles/Product.module.css"

function Products(user) {
    return ( <div className={styles.container}>
      <div>
        <h3>{user.name}</h3>
        <h5>{user.email}</h5>
        <p>{user.address.city}</p>
      </div>
          <div></div>
    </div> 
    );
}

export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    const paths = users.map(user => {
        return{
            params:{
              name:`${user.username}`
              //name bayad copy esme module bashe. 
            },
        };
    });
    return { paths, fallback: false }
}

export async function getStaticProps(context) {
  // aval inoo mizani yani in route khas chiya dashte bashe.
  const { params } = context;
  //context <ye esm delkhah hast mitumi begi folan distructsh vali paramse> hamun param Ke harchi url bud hast.
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const users = await res.json();
  const user = users.filter(user => user.username === params.name)[0];
  // route Khas api Khas mikhad bara hamin filter mikonim va in [0] bara tabdil array be objecte
  return {
    props:user
  }
}

export default Products;