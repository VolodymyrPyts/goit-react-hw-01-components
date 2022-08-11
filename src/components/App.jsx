  import { Profile } from "./Task1/Profile/Profile";
  import { Statistics } from "./Task2/Statistics/Statistics";
  import { FriendList } from "./Task3/FriendList/FriendList";
  import { TransactionHistory } from "./Task4/TransactionHistory/TransactionHistory";

  import  user  from '../components/Data/user.json';
  import  data  from '../components/Data/data.json'; 
  import  friends  from '../components/Data/friends.json';
  import  transactions  from '../components/Data/transactions.json';

  export const App = () => {
  return (
    <>
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics data={data} title="Uploads stats" />
      <FriendList friends={friends}/>
      <TransactionHistory transactions={transactions} />
    </>
  );
};

// 