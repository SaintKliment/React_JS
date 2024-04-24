import Card from "../UI/Card";
import styles from "./UserList.module.css";
import React from "react";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} лет
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
