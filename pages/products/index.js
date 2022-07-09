import Link from "next/link";

function Users({ users }) {
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <Link passHref href={`products/${user.username}`}>
            <div>
              <h3>{`name:${user.name}`}</h3>
              <h4>{`username:${user.username}`}</h4>
            </div>
          </Link>
          <hr/>
        </div>
      ))}
    </>
  );
}

export default Users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const users = await res.json();
  return {
    props: { users },
  };
}
