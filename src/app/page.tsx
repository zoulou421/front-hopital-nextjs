import RootLayout from './layout';
import UserList from './components/listeUsers';

export default function Page(){
  return (
    <RootLayout>
      <div>
        <h1>Bienvenue Sur notre App Next.js</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
           Cumque eligendi eius doloribus, dolorem pariatur saepe adipisci laborum <br />
           autem minus debitis, architecto expedita excepturi. Fugiat eveniet ea voluptatibus <br />
           quisquam voluptates excepturi?
        </p>
        <UserList />
      </div>
    </RootLayout>
  )
}